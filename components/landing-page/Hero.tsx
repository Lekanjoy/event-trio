import Image from "next/image";
import Button from "../button";
import tux1 from "@/public/landing-page/tux1.jpg";
import bag from "@/public/landing-page/bag.jpg";
import ride from "@/public/landing-page/ride.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-[128px] text-center px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px]">
      <div className="flex flex-col items-center justify-center gap-y-5 lg:max-w-xl xl:max-w-3xl">
        <h1 className="font-bold text-[40px] leading-[48px] lg:text-[56px] lg:leading-[67px]">
          Elevate Your Event with Our All-in-One App
        </h1>
        <p className="text-sm leading-6 lg:text-base lg:leading-7">
          Rent tuxedos, designer bags, and book rides effortlessly. Experience
          convenience like never before for your next special occasion.
        </p>
        <div className="flex gap-x-2">
          <Button as="link" href="/auth/sign-up">
            Get Started
          </Button>
          <Button className="bg-transparent text-background">Learn More</Button>
        </div>
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-6 grid-rows-6 gap-4 mt-12 lg:mt-20 lg:max-h-[calc(100dvh-92px)]">
        <div
          key="item-1"
          className="relative col-start-1 row-start-1 col-span-3 row-span-3 ease-in-out duration-500 hover:scale-105"
        >
          <Image
            src={bag}
            alt="Designer Bag"
            className="w-full h-full object-cover object-center rounded-xl"
          />
          <div className="flex flex-col gap-y-1 absolute inset-0 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <span className="text-white text-lg">Designer Bags</span>
            <span className="text-[#FFFDD0] px-1.5 text-sm">
              Carry elegance with our curated <br className="hidden md:flex" />{" "}
              collection
            </span>
          </div>
        </div>
        <div
          key="item-2"
          className="relative col-start-1 row-start-4 col-span-3 row-span-3 ease-in-out duration-500 hover:scale-105"
        >
          <Image
            src={ride}
            alt=""
            className="w-full h-full object-cover object-center rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col gap-y-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <span className="text-white text-lg">Luxury Ride</span>
            <span className="text-[#FFFDD0] px-1.5 text-sm">
              Travel in style to your event
            </span>
          </div>
        </div>
        <div
          key="item-3"
          className="relative col-start-4 row-start-1 col-span-3 row-span-6 ease-in-out duration-500 hover:scale-105"
        >
          <Image
            src={tux1}
            alt=""
            className="w-full h-full object-cover object-center rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col gap-y-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <span className="text-white text-lg">Tuxedo</span>
            <span className="text-[#FFFDD0] px-1.5 text-sm">
              Rent premium tuxedos for your <br className="hidden md:flex" />{" "}
              special occasions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
