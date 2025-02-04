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
