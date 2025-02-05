"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useMediaQuery from "@/hooks/use-media-query";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useQueryString from "@/hooks/useQueryString";
import { cn } from "@/lib/utils";

const locations: string[] = ["New York", "Lagos", "Abuja", "Vegas", "Peru"];

export default function LocationFilter() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const searchParams = useSearchParams();
  const locationValue = searchParams.get("location") ?? "";


  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className={cn("w-[100px] justify-start", locationValue ? 'bg-gray-700 text-white' : '')}>
            {locationValue ? (
              <>
                {locationValue} <MdKeyboardArrowDown />{" "}
              </>
            ) : (
              <>
                Location <MdKeyboardArrowDown />
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline"  className={cn("min-w-[100px] justify-start", locationValue ? 'bg-gray-700 text-white' : '')}>
          {locationValue ? (
            <>
              {locationValue} <MdKeyboardArrowDown />
            </>
          ) : (
            <>
              Location <MdKeyboardArrowDown />
            </>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({ setOpen }: { setOpen: (open: boolean) => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useQueryString();

  const handleLocationChange = (location: string) => {
    router.replace(pathname + "?" + createQueryString("location", location));
  };
  return (
    <Command>
      <CommandInput placeholder="Search location..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {locations.map((status) => (
            <CommandItem
              key={status}
              value={status}
              onSelect={(value) => {
                handleLocationChange(value);
                setOpen(false);
              }}
            >
              {status}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
