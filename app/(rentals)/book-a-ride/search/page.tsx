import CarCard from "@/components/book-a-ride/CarCard";
import CarFilters from "@/components/book-a-ride/car-filters";

const SearchCars = () => {
  return (
    <section className="mt-[88px] flex flex-col gap-y-6 px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px]">
    <CarFilters/>
      <h1 className="font-bold text-xl lg:text-2xl">200+ cars available</h1>

      <div className="w-full flex flex-col gap-y-3">
    <CarCard />
    <CarCard />
    <CarCard />
      </div>
    </section>
  );
};

export default SearchCars;
