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

  const currentTux = cart.find((item) => item.id === tux.id) as CartItem;
  const { quantity } = currentTux || tux;

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
          <span
            className="w-1/5 text-center font-medium p-3 border border-black"
          >{quantity | 0}</span>
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
