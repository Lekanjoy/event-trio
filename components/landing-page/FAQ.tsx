import React from "react";
import FaqItem from "./FaqItem";

const FAQData = [
  {
    id: 0,
    question: "How does renting work?",
    answer:
      "Renting is simple! Just choose your desired tuxedo or designer bag from our collection, select the rental period, and complete the checkout process. Your items will be delivered to your door or ready for pickup.",
  },
  {
    id: 1,
    question: "What is the return policy?",
    answer:
      "We offer a hassle-free return policy. You can return your rented items within 3 days after your event. Late returns may incur additional fees.",
  },
  {
    id: 2,
    question: "Can i book a ride?",
    answer:
      "Yes, you can easily book a ride through our app. Just enter your pickup location and destination, and choose your preferred vehicle type. We’ll ensure you arrive at your event on time.",
  },
  {
    id: 3,
    question: "Are there any fees?",
    answer:
      "Rental fees vary based on the item and duration. Additionally, ride bookings may include service fees depending on the distance. Always check the app for a detailed breakdown of costs.",
  },
  {
    id: 4,
    question: "How do i contact support?",
    answer:
      "You can reach our support team through the app or via email. We’re available 24/7 to assist you with any inquiries. Your satisfaction is our priority!",
  },
];

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
