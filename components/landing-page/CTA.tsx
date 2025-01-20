import React from "react";
import Button from "../button";

const CTA = () => {
  return (
    <section className="px-4 pb-16 lg:pb-[112px] lg:px-16">
      <div className="relative text-white text-center p-8 flex flex-col gap-y-2 justify-center items-center bg-downloadApp bg-cover bg-center bg-no-repeat w-full min-h-[400px]">
        <div className="absolute bg-black/50 left-0 top-0 w-full h-full "></div>
        <h5 className="z-[2] font-bold text-4xl lg:text-5xl">
          Elevate Your Event Experience
        </h5>
        <p className="text-sm z-[2] lg:text-base">
          Download our app today to easily rent tuxedos, designer bags, and book
          your ride.
        </p>
        <div className="flex gap-x-4 z-[2] mt-3">
          <Button className="bg-white text-black">Download</Button>
          <Button
            as="link"
            href="/sign-up"
            className="bg-transparent text-white border-white"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
