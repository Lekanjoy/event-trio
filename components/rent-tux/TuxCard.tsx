import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import classicBlack from "@/public/tuxedo/classic-black.jpg";

interface TuxCardProps {
  tux: {
    id: number;
    name: string;
    price: string;
  };
}

const TuxCard = ({ tux }: TuxCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href={`/rent-tux/${tux.id}`}>
        <Image
          src={classicBlack}
          alt="Classic Black Tux"
          className="mb-2 w-full h-[300px] object-cover object-top"
        />
      </Link>
      <div className="flex justify-between items-center font-semibold">
        <p>{tux.name}</p>
        <p className="text-lg">${tux.price}</p>
      </div>
      <span className="mb-2 text-sm">Standard</span>
      <Button className="bg-transparent text-black w-full ease-in-out duration-300 hover:bg-black hover:text-white">
        Add to cart
      </Button>
    </div>
  );
};

export default TuxCard;
