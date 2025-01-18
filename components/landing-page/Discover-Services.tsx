import Image from "next/image";
import Button from "../button";
import { MdKeyboardArrowRight } from "react-icons/md";
import rideIcon from "@/public/landing-page/rideIcon.png";
import tuxIcon from "@/public/landing-page/tuxIcon.png";
import bagIcon from "@/public/landing-page/bagIcon.png";

const Discover = () => {
  return (
    <section className="px-4 pb-16 lg:pb-[112px] lg:px-16">
      <div className="flex flex-col mb-12 lg:mb-20 lg:max-w-xl xl:max-w-3xl">
        <span className="text-sm font-semibold mb-3 lg:mb-4 lg:text-base">
          Elevate
        </span>
        <h2 className="text-4xl font-bold mb-5 leading-10 lg:text-5xl lg:leading-[57px]">
          Discover Our Premier Event Services Today
        </h2>
        <p className="text-sm leading-6 lg:text-base lg:leading-7">
          We provide a seamless way to look your best for any occasion. From
          stylish tuxedos to chic designer bags, we have everything you need to
          make a statement.
        </p>
      </div>

      <div className="flex flex-col gap-y-12 justify-between lg:flex-row lg:gap-x-12">
        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          <Image
            src={tuxIcon}
            alt="Tuxedo rental icon"
            className="w-10 h-10 border border-black/50 p-1 rounded-full"
          />
          <p className=" font-bold text-2xl">
            Tuxedo Rentals for Every Special Occasion
          </p>
          <span className="text-sm">
            Choose from a wide range of tuxedos to fit your style and budget.
          </span>
        </div>

        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          <Image
            src={bagIcon}
            alt="Designer bag icon"
            className="w-10 h-10 border border-black/50 p-1 rounded-full"
          />
          <p className=" font-bold text-2xl">
            Designer Bag Rentals to Complement Your Look
          </p>
          <span className="text-sm">
            Elevate your outfit with our exclusive designer bags.
          </span>
        </div>

        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          <Image
            src={rideIcon}
            alt="Event ride icon"
            className="w-10 h-10 border border-black/50 p-1 rounded-full"
          />
          <p className=" font-bold text-2xl">
            Convenient Event Ride Booking for Your Needs
          </p>
          <span className="text-sm">
            Book a ride effortlessly to ensure you arrive in style.
          </span>
        </div>
      </div>

      <div className="flex gap-x-2 items-center mt-6 lg:mt-12">
        <Button className="bg-transparent text-background">Learn More</Button>

        <Button
          as="link"
          href="/auth/sign-up"
          className="bg-transparent text-background border-none flex items-center gap-x-1"
        >
          <span>Sign Up</span>
          <MdKeyboardArrowRight size={20}/>
        </Button>
      </div>
    </section>
  );
};

export default Discover;
