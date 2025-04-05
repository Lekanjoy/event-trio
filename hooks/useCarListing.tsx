"use client";
import { useEffect, useState } from "react";
import { CarListing } from "@/types";
import { toast } from "./use-toast";
import { createClient } from "@/utils/supabase/client";
import {
  approveCarListing,
  rejectCarListing,
} from "@/app/actions/approveListingAction";

export function useCarListings() {
  const supabase = createClient();
  const [listings, setListings] = useState<CarListing[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [listingStats, setListingStats] = useState({
    approved: 0,
    pending: listings.length,
    rejected: 0,
  });

  const fetchPendingCars = async () => {
    // Fetch pending cars
    const { data, error } = await supabase.from("pending_cars").select("*");
    if (error) {
      console.error(error);
      return;
    }
    // Fetch listing stats
    const { data: statusData } = await supabase
      .from("listing_stats")
      .select("*")
      .single();
    setListingStats({
      ...statusData,
      pending: data?.length || 0,
    });
    setListings(data || []);
  };

  useEffect(() => {
    fetchPendingCars();
  }, [supabase]);

  const approveListing = async (id: string) => {
    setLoading(true);
    try {
      const result = await approveCarListing(id);
      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
        return;
      }

      setListings(listings.filter((listing) => listing.id !== id));
      setListingStats((prev) => ({
        ...prev,
        approved: prev.approved + 1,
        pending: prev.pending - 1,
      }));

      toast({
        title: "Listing Approved",
        description: "The car listing has been approved successfully.",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to approve the listing. Please try again.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const rejectListing = async (id: string) => {
    setLoading(true);
    try {
      const result = await rejectCarListing(id);
      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
        return;
      }

      setListings(listings.filter((listing) => listing.id !== id));
      setListingStats((prev) => ({
        ...prev,
        rejected: prev.rejected + 1,
        pending: prev.pending - 1,
      }));

      toast({
        title: "Listing Rejected",
        description: "The car listing has been rejected.",
        variant: "destructive",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to reject the listing. Please try again.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    listings,
    loading,
    approveListing,
    rejectListing,
    listingStats,
  };
}
