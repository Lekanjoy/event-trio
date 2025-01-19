import Image from "next/image";
import Button from "../button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { cn } from "@/lib/utils";
import launch from "@/public/landing-page/launch.svg";
import partnership from "@/public/landing-page/partnership.svg";
import milestone from "@/public/landing-page/milestone.svg";
import expansion from "@/public/landing-page/collaboration.svg";

const steps = [
  {
    id: 0,
    title: "First Launch",
    text: "Launched our app, making luxury rentals accessible for everyone.",
    icon: launch,
  },
  {
    id: 1,
    title: "Partnership Growth",
    text: "Established partnerships with top designers and brands to expand our offerings.",
    icon: partnership,
  },
  {
    id: 2,
    title: "User Milestone",
    text: "Reached 10,000 active users, transforming how people prepare for events.",
    icon: milestone,
  },
  {
    id: 3,
    title: "Service Expansion",
    text: "Introduced ride-booking feature, ensuring seamless event experiences for our customers.",
    icon: expansion,
  },
];

const Journey = () => {
  return (
    <section className="flex flex-col px-4 pb-16 lg:pb-[112px] lg:px-16 lg:flex-row lg:gap-x-10 xl:gap-x-20">
      <div className="flex flex-col gap-y-3 lg:gap-y-6">
        <span className="font-semibold text-sm lg:text-base">Elegance</span>
        <p className="font-bold text-4xl lg:text-5xl">
          Our Journey to Redefining Event Fashion
        </p>
        <div className="flex items-start self-start">
          <Button className="bg-transparent text-background">Discover</Button>
          <Button
            as="link"
            href="/auth/sign-up"
            className="bg-transparent text-background border-none flex items-center gap-x-1"
          >
            <span>Explore</span>
            <MdKeyboardArrowRight size={20} />
          </Button>
        </div>
      </div>

      <div className="flex flex-col py-10 gap-y-10 mt-8 lg:gap-y-8">
        {steps.map((step) => {
          return (
            <div key={step.id} className="flex gap-x-10">
              <div className="relative min-w-8 min-h-8 max-w-8 max-h-8 lg:min-w-12 lg:min-h-12 lg:max-w-12 lg:max-h-12">
                <Image
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-full h-full"
                />
                <span
                  className={cn(
                    "absolute w-[2px] h-[65px] bg-black left-[45%] top-10 lg:left-[48%] lg:top-[50px]",
                    step.id === 3 ? "hidden" : ""
                  )}
                ></span>
              </div>
              <div className="flex flex-col gap-y-2 lg:gap-y-3">
                <p className="font-bold lg:text-lg">{step.title}</p>
                <p className="text-sm lg:text-base">{step.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;
