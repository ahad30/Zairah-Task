import { StaticImageData } from "next/image";

export interface HotelProps {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  distanceFromCenter: number;
  price: {
    original: number;
    discounted: number;
  };
  amenities: string[];
  imageUrl: string | StaticImageData;
  nights: number;
  capacity: {
    adults: number;
    children: number;
  };
  tags: string[];
} 