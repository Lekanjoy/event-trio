"use client";
import React, { useState } from "react";
import Button from "@/components/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { MdKeyboardArrowDown } from "react-icons/md";

const YearFilter = () => {
  const [value, setValue] = useState({
    min: 0,
    max: 0,
  });
  const [btnTitle, setBtnTitle] = useState("Year");

  return (
    <Popover>
      <PopoverTrigger className="min-w-[100px] whitespace-nowrap inline-flex gap-2 items-center h-9 px-4 py-2 rounded-md border border-input bg-background shadow-sm text-sm font-medium hover:bg-accent hover:text-accent-foreground">
        {btnTitle}
        <MdKeyboardArrowDown />
      </PopoverTrigger>
      <PopoverContent className="mt-3">
        <p className="text-sm font-medium mb-2">
          ${value.min} - ${value.max}/day
        </p>
        <Slider
          defaultValue={[2001, 2005]}
          value={[value.min, value.max]}
          min={2000}
          max={2026}
          step={1}
          onValueChange={(newValue: number[]) =>
            setValue({ min: newValue[0], max: newValue[1] })
          }
        />
        <div className="flex justify-between gap-x-2 items-center mt-10">
          <Button
            onClick={() => setValue({ min: 10, max: 500 })}
            className="bg-transparent text-black rounded-md border-black/50"
          >
            Reset
          </Button>
          <PopoverClose>
            <Button
              onClick={() => {
                setBtnTitle(
                  value.max > 10
                    ? `$${value.min} - $${value.max} `
                    : "Year"
                );
              }}
              className=" rounded-md border-black/50 whitespace-nowrap"
            >
              View 200+ results
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default YearFilter;
