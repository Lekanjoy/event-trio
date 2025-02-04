import CarCard from "@/components/book-a-ride/CarCard";
import CarFilters from "@/components/book-a-ride/car-filters";
import { createClient } from "@/utils/supabase/server";

const SearchCars = async () => {
  const supabase = createClient();

  const { data: cars, error } = await (await supabase)
    .from("cars")
    .select("*")
    .range(0, 9);

  if (error) {
    console.error("Error fetching cars:", error);
    return (
      <div className="mt-[88px] flex flex-col gap-y-6 px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px]">
        Error loading available cars.
      </div>
    );
  }

  return (
    <section className="mt-[88px] flex flex-col gap-y-6 px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px]">
      <CarFilters />
      <h1 className="font-bold text-xl lg:text-2xl">
        {cars.length - 1}+ cars available
      </h1>
      <div className="w-full flex flex-col gap-y-4">
        {cars?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default SearchCars;
