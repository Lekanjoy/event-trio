"use client";
import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import useQueryString from "@/hooks/useQueryString";
import { cn } from "@/lib/utils";

export default function BrandFilter() {
  const supabase = createClient();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = useQueryString();

  const brand = searchParams.get("brand") ?? "";
  const [cars, setCars] = useState<{ brand: string }[]>([]);

  const handleBrandChange = (brand: string) => {
    router.replace(pathname + "?" + createQueryString("brand", brand));
  };

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase.rpc("get_unique_brands");
      if (error) {
        console.error("Error fetching cars:", error);
        return;
      }
      setCars(data);
    };

    fetchCars();
  }, []);


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn("min-w-[100px]", brand ? "bg-gray-700 text-white" : '')}>
          {brand || "Brand"} <MdKeyboardArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-24 overflow-auto h-[300px] ml-3">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={brand}
          onValueChange={(brand) => handleBrandChange(brand)}
        >
          {cars.map((car) => (
            <DropdownMenuRadioItem
              className="capitalize"
              key={car.brand}
              value={car.brand}
            >
              {car.brand}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
