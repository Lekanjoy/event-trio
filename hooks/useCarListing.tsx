"use client";
import { useEffect, useState } from "react";
import { CarListing } from "@/types";
import { toast } from "./use-toast";
import { createClient } from "@/utils/supabase/client";

// Mock data for car listings
// const MOCK_CAR_LISTINGS: CarListing[] = [
//   {
//     id: "3",
//     user_id: "user3",
//     name: "G-Class",
//     brand: "Mercedes-Benz",
//     year: 2021,
//     location: "Miami, FL",
//     price: 139,
//     images: [
//       "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=1000&auto=format&fit=crop",
//     ],
//     documents: ["registration.pdf", "ownership-history.pdf"],
//     created_at: "2024-12-14T11:45:19Z",
//   },
//   {
//     id: "5",
//     user_id: "user5",
//     name: "Model Y",
//     brand: "Tesla",
//     year: 2023,
//     location: "Chicago, IL",
//     price: 659,
//     images: [
//       "https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000&auto=format&fit=crop",
//     ],
//     documents: ["registration.pdf", "warranty-info.pdf"],
//     created_at: "2025-01-15T16:54:11Z",
//   },
// ];

export function useCarListings() {
  const supabase = createClient();
  const [listings, setListings] = useState<CarListing[] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPendingCars = async () => {
      const { data, error } = await supabase.from("pending_cars").select("*");
      if (error) {
        console.error(error);
        return;
      }
      setListings(data || []);
    };
    fetchPendingCars();
  }, [supabase]);

  const approveListing = (id: string) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setListings(listings.filter((listing) => listing.id !== id));
      toast({
        title: "Listing Approved",
        description: "The car listing has been approved successfully.",
      });
      setLoading(false);
    }, 600);
  };

  const rejectListing = (id: string) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setListings(listings.filter((listing) => listing.id !== id));
      toast({
        title: "Listing Rejected",
        description: "The car listing has been rejected.",
        variant: "destructive",
      });
      setLoading(false);
    }, 600);
  };

  return {
    listings,
    loading,
    approveListing,
    rejectListing,
  };
}
