import Image from "next/image";
import rentalApp from "@/public/landing-page/app.jpg";
import convenient from "@/public/landing-page/convenient.png";
import diverse from "@/public/landing-page/diverse.png";

const RentalApp = () => {
  return (
    <section className="w-full flex flex-col px-4 gap-y-12 pb-16 lg:pb-[112px] lg:gap-x-10 lg:px-16 lg:flex-row lg:items-center xl:gap-x-20">
      <div className="flex flex-col gap-y-5 lg:gap-y-6 lg:w-1/2">
        <h3 className="text-[32px] leading-9 font-bold lg:text-5xl lg:leading-[48px]">
          Experience Unmatched Convenience, Variety, and Quality with Our Rental
          App
        </h3>
        <p className="text-sm lg:text-base">
          Our app simplifies your event preparation by offering a seamless
          rental experience. Choose from a wide selection of tuxedos and
          designer bags, all at your fingertips.
        </p>

        <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
          <div className="flex flex-col gap-y-2 lg:gap-y-3">
            <Image
              src={convenient}
              alt="convenient icon"
              className="w-12 h-12"
            />
            <p className="font-bold lg:text-lg">Convenient Rentals</p>
            <span className="text-sm lg:text-base">
              Rent everything you need for your event in just a few taps.
            </span>
          </div>

          <div className="flex flex-col gap-y-2 lg:gap-y-3">
            <Image src={diverse} alt="diverse icon" className="w-12 h-12" />
            <p className="font-bold lg:text-lg">Diverse Selection</p>
            <span className="text-sm lg:text-base">
              Explore a variety of styles and brands to suit every occasion.
            </span>
          </div>
        </div>
      </div>

      <div className=" lg:h-[550px] lg:w-1/2">
        <Image
          src={rentalApp}
          alt="rental app"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default RentalApp;
