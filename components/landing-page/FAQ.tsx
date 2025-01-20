import React from "react";
import FaqItem from "./FaqItem";
import { FAQData } from "@/data";


const FAQ = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col px-4 pb-16 lg:pb-[112px] lg:px-16">
      <div className="flex justify-center items-center text-center flex-col gap-y-5">
        <h1 className="font-bold text-4xl lg:text-5xl">FAQs</h1>
        <p className="text-sm lg:text-base">
          Find answers to your questions about our tuxedo rentals, designer
          bags, and ride bookings.
        </p>
      </div>

      <div className="w-full flex flex-col mt-12 lg:mt-20 lg:max-w-xl xl:max-w-3xl">
        {FAQData.map((item) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
