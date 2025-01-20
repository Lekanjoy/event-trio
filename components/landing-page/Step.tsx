import Image from "next/image";
import Button from "../button";
import { MdKeyboardArrowRight } from "react-icons/md";
import choose from "@/public/landing-page/choose.svg";
import date from "@/public/landing-page/date-plan.svg";
import car from "@/public/landing-page/car.svg";

const Step = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 pb-16 lg:pb-[112px] lg:px-16">
      <div className="flex flex-col mx-auto justify-center items-center text-center w-full mb-12 lg:mb-20 lg:max-w-xl xl:max-w-3xl">
        <span className="text-sm font-semibold mb-3 lg:mb-4 lg:text-base">
          Elegance
        </span>
        <h2 className="text-4xl font-bold mb-5 leading-10 lg:text-5xl lg:leading-[57px]">
          Seamlessly Rent Tuxedos and Designer Bags
        </h2>
        <p className="text-sm leading-6 lg:text-base lg:leading-7">
          Our app makes it easy to rent tuxedos and designer bags for any
          occasion. Plus, book a ride to ensure you arrive in style.
        </p>
      </div>

      <div className="w-full text-center grid items-center justify-center  gap-y-6 lg:grid-cols-3 lg:justify-between lg:gap-x-6 lg:items-stretch">
        <div className="flex flex-col bg-white shadow-md p-2 border gap-y-2 rounded ease-in-out duration-500 hover:scale-105 lg:gap-y-3">
          <Image src={choose} alt="choose icon" className="w-12 h-12 mx-auto" />
          <p className="font-bold text-lg lg:text-xl">
            {" "}
            Choose Your Tuxedo <br /> or Bag
          </p>
          <span className="text-sm lg:text-base">
            Browse our extensive collection and select your favorite.
          </span>
        </div>

        <div className="flex flex-col bg-white shadow-md p-2 border gap-y-2 rounded ease-in-out duration-500 hover:scale-105  lg:gap-y-3">
          <Image src={date} alt="date icon" className="w-12 h-12 mx-auto" />
          <p className="font-bold text-lg lg:text-xl">
            Step 2: Select Your Rental <br /> Dates
          </p>
          <span className="text-sm lg:text-base">
            Choose the dates you need the items for.
          </span>
        </div>

        <div className="flex flex-col bg-white shadow-md p-2 border gap-y-2 rounded ease-in-out duration-500 hover:scale-105 lg:gap-y-3">
          <Image src={car} alt="car icon" className="w-12 h-12 mx-auto" />
          <p className="font-bold text-lg lg:text-xl">
            Step 3: Book Your Ride to <br /> the Event
          </p>
          <span className="text-sm lg:text-base">
            Schedule a ride to ensure timely arrival.
          </span>
        </div>
      </div>

      <div className="w-fit text-center flex gap-x-2 justify-center items-center mt-12 lg:mt-20 ">
        <Button className="bg-transparent text-black">Rent</Button>

        <Button
          as="link"
          href="/explore"
          className="bg-transparent text-black border-none flex items-center gap-x-1"
        >
          <span>Explore</span>
          <MdKeyboardArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Step;
