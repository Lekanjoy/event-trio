import CarFilters from "@/components/book-a-ride/car-filters";
import { createClient } from "@/utils/supabase/server";
import SearchContainer from "./SearchContainer";
import { Suspense } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const SearchCars = async ({ searchParams }: { searchParams: SearchParams }) => {
  const supabase = createClient();

  const { brand, price_min, price_max, location, year_min, year_max, limit } =
    await searchParams;

  let query = (await supabase).from("cars").select("*");

  if (brand) query = query.eq("brand", brand);
  if (price_min) query = query.gte("price_per_day", Number(price_min));
  if (price_max) query = query.lte("price_per_day", Number(price_max));
  if (location) query = query.ilike("location", `%${location}%`); // Match substring (case-insensitive)
  if (year_min) query = query.gte("year", Number(year_min));
  if (year_max) query = query.lte("year", Number(year_max));

  // Add pagination
  query = query.range(0, Number(limit));

  const { data: cars, error } = await query;

  if (error) {
    console.error("Error fetching cars:", error);
    return (
      <div className="mt-[88px] flex flex-col gap-y-6 px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px]">
        Error loading available cars.
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <p className="absolute top-0 left-0 w-full h-screen z-50 bg-white backdrop-blur ">
          Loading cars...
        </p>
      }
    >
      <section className="mt-[88px] flex flex-col gap-y-6 px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px]">
        <CarFilters />
        <h1 className="font-bold text-xl lg:text-2xl">
          {cars.length > 1
            ? `${cars.length - 1}+ cars available`
            : cars.length === 1
            ? "1 car available"
            : "No cars available"}
        </h1>
        <SearchContainer cars={cars} limit={limit} />
      </section>
    </Suspense>
  );
};

export default SearchCars;
