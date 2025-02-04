import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const CarCard = () => {
  return (
    <Link href="/book-a-ride/search/1">
    <div className="relative w-full shadow flex flex-col border bg-white rounded-md hover:scale-105 ease-in-out duration-300 md:flex-row">
      <div className="relative h-[250px] md:w-2/5 md:h-[150px]">
        <Image
          src="https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/FPNd72RxQPSDo1BMBUAuyw.jpg"
          alt="car"
          width={200}
          height={200}
          className="border w-full h-full object-cover origin-top rounded-l-md"
        />
      </div>
      <div className="flex justify-between  gap-x-1 p-2 md:w-3/5">
        <div className="flex flex-col gap-y-px">
          <h2 className="font-bold text-xl">Toyota Corolla</h2>
          <div className="flex items-center gap-x-1 font-medium">
            5.0 <FaStar color="#593cfb" /> (10 trips)
          </div>
          <div className="text-sm flex items-center gap-x-1">
            <CiLocationOn size={16} />
            <span>Lagos</span>
          </div>
        </div>
        <div className="flex flex-col justify-between">
            <div className="self-end bg-white p-1 rounded right-4 top-3 z-10 absolute md:relative md:right-0">
          <IoIosHeartEmpty size={20} />
            </div>
          <p className="text-lg font-bold mt-24 md:mt-0">$10/day</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CarCard;
