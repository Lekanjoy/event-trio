import TuxCard from "@/components/rent-tux/TuxCard";
import { tuxData } from "@/data";

const Rent_A_Tux = () => {
  return (
    <section className="mt-[128px] px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px]">
      <div className="flex flex-col gap-y-1 mb-12 lg:mb-20 lg:gap-y-2">
        <span className="text-sm font-medium">Elegance</span>
        <h1 className="text-4xl font-bold lg:text-5xl">Tuxedos</h1>
        <p className="text-sm lg:font-base">
          Explore our exquisite collection of tuxedo rentals.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {tuxData.map((tux) => (
          <TuxCard key={tux.id} tux={tux} />
        ))}
      </div>
    </section>
  );
};

export default Rent_A_Tux;
