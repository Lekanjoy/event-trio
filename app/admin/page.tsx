"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Car,
  Search,
  LayoutGrid,
  List,
  BriefcaseBusiness,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCarListings } from "@/hooks/useCarListing";
import logo from "@/public/landing-page/logo.png";
import { CarListingCard } from "./components/CarListingCard";
import Link from "next/link";
import Image from "next/image";

const Admin = () => {
  const { listings, loading, approveListing, rejectListing } = useCarListings();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter listings based on search term
  const filteredListings = listings.filter(
    (listing) =>
      listing.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort listings
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortOrder === "newest") {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (sortOrder === "oldest") {
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (sortOrder === "price_high") {
      return b.price - a.price;
    } else if (sortOrder === "price_low") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-background animate-fade-in px-4 pb-10 lg:px-16">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b border-border/40">
        <div className="container mx-auto py-6 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href={"/"} className="relative z-10 w-[120px] lg:w-[150px]">
                <Image
                  src={logo}
                  alt={"EventTrio Logo"}
                  className="w-full h-full"
                />
              </Link>
            </div>
            <nav className="flex items-center space-x-4">
              <h2 className="font-semibold lg:text-xl">Admin</h2>
              <Button variant="ghost" className="flex items-center gap-1">
                <BriefcaseBusiness className="h-4 w-4" />
                <span>Listings</span>
              </Button>
            </nav>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:w-auto sm:min-w-[280px]">
              <Search className="absolute left-3 top-1/2 -mt-2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by brand, model, or location..."
                className="pl-10 pr-4 w-full bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center border rounded-md overflow-hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "rounded-none h-9 px-3 w-10",
                    viewMode === "grid" && "bg-accent"
                  )}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "rounded-none h-9 px-3 w-10",
                    viewMode === "list" && "bg-accent"
                  )}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Select
                value={sortOrder}
                onValueChange={(value) => setSortOrder(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto border rounded-xl px-4 py-8 mt-3">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">
              Pending Approvals ({filteredListings.length})
            </h2>
          </div>
          <p className="text-muted-foreground text-sm lg:text-base">
            Review and approve or reject the following car listings.
          </p>
        </div>

        {sortedListings.length === 0 ? (
          <div className="text-center py-12  rounded-lg">
            <Car className="mx-auto h-12 w-12 text-muted-foreground/60" />
            <h3 className="mt-4 text-lg font-medium">No Listings Found</h3>
            <p className="mt-1 text-muted-foreground max-w-md mx-auto">
              There are no pending car listings matching your search criteria.
            </p>
          </div>
        ) : (
          <div
            className={cn(
              "grid gap-6 animate-fade-in",
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            )}
          >
            {sortedListings.map((listing, index) => (
              <div
                key={listing.id}
                className={cn(
                  "transition-all duration-300",
                  `animation-delay-${(index % 5) * 100}`
                )}
              >
                <CarListingCard
                  listing={listing}
                  onApprove={approveListing}
                  onReject={rejectListing}
                  isLoading={loading}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
