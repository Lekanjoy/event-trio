"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import { CartItem, useCartStore } from "@/store/store";
import { useToast } from "@/hooks/use-toast";

interface TuxCardProps {
  tux: {
    id: number;
    name: string;
    price: string;
    img: StaticImageData;
    quantity: number;
  };
}

const TuxCard = ({ tux }: TuxCardProps) => {
  const { toast } = useToast();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (tux: CartItem) => {
    addToCart(tux);
    toast({
      description: "Added to cart",
    });
  };

  return (
    <div className="flex flex-col">
      <Link href={`/rent-tux/${tux.id}`}>
        <Image
          src={tux?.img}
          alt={tux.name}
          className="mb-2 w-full h-[300px] object-cover object-top"
        />
      </Link>
      <div className="flex justify-between items-center font-semibold">
        <p>{tux.name}</p>
        <p className="text-lg">${tux.price}</p>
      </div>
      <span className="mb-2 text-sm">Standard</span>
      <Button
        onClick={() => handleAddToCart(tux)}
        className="bg-transparent text-black w-full ease-in-out duration-300 hover:bg-black hover:text-white"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default TuxCard;
