"use client";

import * as React from "react";

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

export default function BrandFilter() {
  const [brandValue, setBrandValue] = React.useState("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[100px]">
          {brandValue || "Brand"} <MdKeyboardArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-24">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={brandValue}
          onValueChange={setBrandValue}
        >
          <DropdownMenuRadioItem value="Tesla">Tesla</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Lexus">Lexus</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Toyota">Toyota</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
