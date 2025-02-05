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

const PriceFilter = () => {
  const router = useRouter();
  const { ranges, reset } = useSliderStore();
  const searchParams = useSearchParams();
  const minPrice = searchParams.get("price_min");
  const maxPrice = searchParams.get("price_max");

  const priceText = `Price • $${minPrice} - $${maxPrice} `;

  const resetPrices = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Remove only price-related filters
    params.delete("price_min");
    params.delete("price_max");

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
          " min-w-[130px] whitespace-nowrap inline-flex gap-2 items-center h-9 px-4 py-2 rounded-md border border-input bg-background shadow-sm text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          maxPrice || minPrice
            ? "bg-gray-700 text-white min-w-[180px]"
            : "bg-transparent text-black"
        )}
      >
        {minPrice ? priceText : "Daily Price"}
        <MdKeyboardArrowDown />
      </PopoverTrigger>
      <PopoverContent className="mt-3">
        <p className="text-sm font-medium mb-2">
          ${ranges.price.values[0]} - ${ranges.price.values[1]}/day
        </p>
        <SliderInput min={10} max={500} sliderKey="price" syncWithUrl={true} />
        <div className="flex justify-between gap-x-2 items-center mt-10">
          <Button
            onClick={resetPrices}
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

export default PriceFilter;
