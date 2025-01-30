import Image from "next/image";
import { tuxData } from "@/data";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import TabSwitch from "./TabSwitch";
import TuxFilters from "./TuxFilters";
import { CartItem } from "@/store/store";

const TuxDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const tuxId = (await params).id;
  const tuxItem = tuxData.find((tux) => tux.id.toString() == tuxId) as CartItem;

  const rating = tuxItem?.rating;

  return (
    <section className="mt-[128px] flex flex-col gap-y-8 px-4 pb-16 lg:gap-x-10 lg:flex-row lg:pb-[112px] lg:px-16 lg:mt-[144px] 2xl:gap-x-20">
      <Image
        src={tuxItem?.img}
        alt={tuxItem?.name || "Tuxedo"}
        className="w-full object-cover object-top self-start h-[300px] lg:w-2/4 lg:h-[540px]"
      />

      <div className="flex flex-col gap-y-5">
        <nav className="flex items-center text-sm gap-x-1">
          <Link href="/rent-tux" className="flex items-center">
            Tuxedos <MdKeyboardArrowRight size={14} />
          </Link>
          <span className="font-semibold">{tuxItem?.name} Tuxedo</span>
        </nav>
        <h1 className="font-bold text-4xl lg:text-5xl">
          {tuxItem?.name} Tuxedo
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-x-4">
          <p className="font-bold text-lg lg:text-xl lg:pr-4 lg:border-r lg:border-black">
            $55
          </p>
          <div className="flex items-center gap-x-2">
            {/* Rating stars */}
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={
                    index < Math.floor(rating)
                      ? "black"
                      : index < rating
                      ? "url(#half)"
                      : "none"
                  }
                  viewBox="0 0 24 24"
                  stroke="black"
                  className="w-4 h-4 text-black"
                >
                  <defs>
                    <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="50%" stopColor="black" />
                      <stop offset="50%" stopColor="white" />
                    </linearGradient>
                  </defs>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.122 6.564a1 1 0 00.95.69h6.905c.969 0 1.371 1.24.588 1.81l-5.588 4.065a1 1 0 00-.364 1.118l2.122 6.564c.3.921-.755 1.688-1.54 1.118l-5.588-4.065a1 1 0 00-1.176 0l-5.588 4.065c-.784.57-1.838-.197-1.54-1.118l2.122-6.564a1 1 0 00-.364-1.118L2.486 12.99c-.783-.57-.38-1.81.588-1.81h6.905a1 1 0 00.95-.69l2.122-6.564z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-sm">
              ({tuxItem?.rating} stars) • 10 reviews
            </span>
          </div>
        </div>
        <p className="text-sm lg:text-base">
          Our tuxedo rental service offers a wide range of styles to suit any
          occasion. From classic to modern designs, we have the perfect tuxedo
          for you.
        </p>
        <TuxFilters tux={tuxItem}/>
        <TabSwitch />
      </div>
    </section>
  );
};

export default TuxDetails;
