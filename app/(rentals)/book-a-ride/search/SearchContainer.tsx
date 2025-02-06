"use client";
import CarCard from "@/components/book-a-ride/CarCard";
import Button from "@/components/button";
import useQueryString from "@/hooks/useQueryString";
import { CarType } from "@/types";
import { usePathname, useRouter } from "next/navigation";

type SearchContainerProps = {
    cars: CarType[];
    limit: string | string[] | undefined
}

const SearchContainer = ({ cars, limit }: SearchContainerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useQueryString();
  const newLimit = Number(limit) + 10;

  return (
    <>
      <div className="w-full flex flex-col gap-y-4">
        {cars?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Button
        onClick={() => {
          router.replace(
            pathname + "?" + createQueryString("limit", newLimit.toString()),
            { scroll: false }
          );
        }}
        className="mx-auto"
      >
        Load more..
      </Button>
    </>
  );
};

export default SearchContainer;
