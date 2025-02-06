'use client'
import BrandFilter from "./BrandFilter";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import YearFilter from "./YearFilter";

const CarFilters = () => {

  return (
    <form id="filters" className="w-full flex gap-x-2 items-center overflow-x-scroll  p-2 shadow">
      <BrandFilter/>
      <PriceFilter/>
      <LocationFilter/>
      <YearFilter/>
    </form>
  );
};

export default CarFilters;
