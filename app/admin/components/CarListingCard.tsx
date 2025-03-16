/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { CarListing } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Eye, FileText, MapPin } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface CarListingCardProps {
  listing: CarListing;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  isLoading: boolean;
}

export const CarListingCard = ({
  listing,
  onApprove,
  onReject,
  isLoading,
}: CarListingCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleApprove = () => {
    setIsRemoving(true);
    onApprove(listing.id);
  };

  const handleReject = () => {
    setIsRemoving(true);
    onReject(listing.id);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(listing.price);

  const timeAgo = formatDistanceToNow(new Date(listing.created_at), {
    addSuffix: true,
  });

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300  hover:bg-gray-50",
        "border border-border/40 hover:border-border/80",
        "animate-fade-in w-full",
        isRemoving && "opacity-0 scale-95 transition-all duration-500"
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={listing.images[currentImageIndex]}
          alt={`${listing.brand} ${listing.name}`}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
          onClick={nextImage}
        />

        {listing.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
            {listing.images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all",
                  currentImageIndex === index
                    ? "bg-white scale-100"
                    : "bg-white/50 scale-75"
                )}
              ></div>
            ))}
          </div>
        )}

        <Badge className="absolute rounded-2xl py-1 top-3 right-3 bg-gray-500 text-white font-medium">
          {timeAgo}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold flex flex-wrap gap-x-2 items-center">
            {listing.brand} {listing.name}
            <Badge
              variant="outline"
              className="mt-1 text-xs font-normal hover:bg-black hover:text-white"
            >
              {listing.year}
            </Badge>
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pb-3 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{listing.location}</span>
          </div>
        </div>

        <div className="text-base font-semibold">
          {formattedPrice}
          <span className="text-muted-foreground">/day</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="flex gap-1 items-center cursor-pointer font-normal"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>{listing.images.length} images</span>
          </Badge>

          <Badge
            variant="secondary"
            className="flex gap-1 items-center cursor-pointer font-normal"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>{listing.documents.length} documents</span>
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="pt-5 pb-4 flex gap-2 justify-between">
        <Button
          variant="outline"
          size="sm"
          className="gap-1 transition-colors duration-300 bg-red-600 text-white"
          onClick={handleReject}
          disabled={isLoading}
        >
          <X className="h-4 w-4" />
          <span>Reject</span>
        </Button>

        <Button
          size="sm"
          className="gap-1 transition-colors duration-300 bg-green-700"
          onClick={handleApprove}
          disabled={isLoading}
        >
          <Check className="h-4 w-4" />
          <span>Approve</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
