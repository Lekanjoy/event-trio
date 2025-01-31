"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "../button";
import CartItem from "./CartItem";
import { IoCartOutline } from "react-icons/io5";
import { useCartStore } from "@/store/store";
import { useEffect } from "react";

export default function CartSheet() {
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);
  const totalCartValue = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Sheet>
      <SheetTrigger asChild className="relative">
        <div>
          <IoCartOutline size={25} />
          <div className="absolute min-w-4 min-h-4 w-auto flex justify-center items-center bg-red-700 -right-[12px] -top-[6px] rounded-full text-white text-xs font-bold">
            {cart.length}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="w-[90%] sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Rental Cart</SheetTitle>
          {cart.length > 0 && (
            <SheetDescription>
              Review the items in your cart. You can adjust quantities or remove
              items before proceeding to checkout.
            </SheetDescription>
          )}
        </SheetHeader>
        <div className="grid gap-y-4 py-4">
          {cart.length === 0 && (
            <p className="flex items-center justify-center font-medium text-red-500 animate-pulse">
              Your cart is empty!!
            </p>
          )}
          {cart.map((item) => (
            <CartItem key={item.id} cart={item} />
          ))}
        </div>
        <SheetFooter>
          {cart.length > 0 && (
            <>
              <div className="flex justify-between items-center pt-2">
                <span className="font-medium">Subtotal:</span>
                <span className="font-bold">${totalCartValue.toFixed(2)}</span>
              </div>
              <span className="text-gray-600 text-sm italic pb-2">
                Delivery fees not included yet.
              </span>
            </>
          )}
          <SheetClose asChild>
            {cart.length > 0 && (
              <Button className="w-full py-3">
                Checkout <span className="font-bold">(${totalCartValue.toFixed(2)})</span>
              </Button>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
