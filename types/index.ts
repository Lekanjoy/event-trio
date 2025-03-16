export type CarType = {
  id: string;
  name: string;
  brand: string;
  price_per_day: number;
  image_url: string;
  year: number;
  status: "available" | "booked" | "maintenance";
  location: string;
  model: string | null;
  rating: number | null;
  tripsTaken: number;
  images: string[];
};

export type CarListing = {
  id: string;
  user_id: string;
  name: string;
  brand: string;
  year: number;
  location: string;
  price: number;
  images: string[];
  documents: string[];
  created_at: string;
};
