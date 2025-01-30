"use client";
import Button from "@/components/button";
import SizeToggleGroup from "./SizeToggleGroup";
import StyleSelect from "./StyleSelect";
import { CartItem, useCartStore } from "@/store/store";
import { useToast } from "@/hooks/use-toast";
import { TuxCardProps } from "@/components/rent-tux/TuxCard";

const TuxFilters = ({ tux }: TuxCardProps) => {
  const { toast } = useToast();
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((store) => store.removeFromCart);
  const updateItemQuantity = useCartStore((store) => store.updateItemQuantity);

  const currentTux = cart.find((item) => item.id === tux.id) as CartItem;
  const { id, quantity } = currentTux || tux;

  // Update or delete item from cart based on quantity
  const updateOrDeleteItem = (id: number, value: number) => {
    const itemInCart = cart.find((item) => item.id === id);
    if (!itemInCart) {
      toast({
        description: "Add item to cart first!",
        variant: "destructive",
      });
      return;
    }
    if (value < 1) {
      removeFromCart(id);
    } else {
      updateItemQuantity(id, value);
    }
  };

  const handleAddToCart = (tux: CartItem) => {
    addToCart(tux);
    toast({
      description: "Added to cart",
    });
  };
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="text-sm lg:text-base">Style</p>
        <StyleSelect />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-sm lg:text-base">Size</p>
        <SizeToggleGroup />
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex w-full gap-x-2">
          <Button className="w-4/5 py-4" onClick={() => handleAddToCart(tux)}>
            Add to cart
          </Button>
          <input
            type="number"
            value={quantity | 0}
            onChange={(e) => updateOrDeleteItem(id, Number(e.target.value))}
            className="w-1/5 text-center font-medium p-3 border border-black"
          />
        </div>
        <Button className="py-4 bg-transparent text-black w-full">
          Buy now
        </Button>
        <p className="text-sm text-center">Free shipping on orders</p>
      </div>
    </>
  );
};

export default TuxFilters;
