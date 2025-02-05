"use client";
import Button from "@/components/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdKeyboardArrowDown } from "react-icons/md";
import SliderInput from "./Slider";
import { useSliderStore } from "@/store/slider-store";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";

const YearFilter = () => {
  const router = useRouter();
  const { ranges, reset } = useSliderStore();
  const searchParams = useSearchParams();
  const minYear = searchParams.get("year_min");
  const maxYear = searchParams.get("year_max");

  const yearText = `Year • ${minYear} - ${maxYear} `;

  const resetYears = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Remove only year-related filters
    params.delete("year_min");
    params.delete("year_max");

    // Construct new query string
    const newQueryString = params.toString();
    const newUrl = newQueryString
      ? `/book-a-ride/search?${newQueryString}`
      : "/book-a-ride/search";

    // Replace updated URL
    router.replace(newUrl);
    reset();
  };

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          " min-w-[100px] whitespace-nowrap inline-flex gap-2 items-center h-9 px-4 py-2 rounded-md border border-input bg-background shadow-sm text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          maxYear || minYear
            ? "bg-gray-700 text-white min-w-[180px]"
            : "bg-transparent text-black"
        )}
      >
        {minYear ? yearText : "Year"}
        <MdKeyboardArrowDown />
      </PopoverTrigger>
      <PopoverContent className="mt-3">
        <p className="text-sm font-medium mb-2">
          {ranges.year.values[0]} - {ranges.year.values[1]}
        </p>
        <SliderInput
          min={2000}
          max={2026}
          sliderKey="year"
          syncWithUrl={true}
        />
        <div className="flex justify-between gap-x-2 items-center mt-10">
          <Button
            onClick={resetYears}
            className="bg-transparent text-black rounded-md border-black/50"
          >
            Reset
          </Button>
          <PopoverClose>
            <Button className="rounded-md border-black/50 whitespace-nowrap text-sm">
              View 200+ results
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default YearFilter;
