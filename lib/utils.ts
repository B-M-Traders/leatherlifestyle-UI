import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterList = [
  {
    label: "Price",
    list: ["Under $100", "$100 - $200", "$200 - $500", "Above $500"],
  },
  {
    label: "Material",
    list: ["Genuine Leather", "Faux Leather", "Suede", "Shearling"],
  },
  {
    label: "Color",
    list: ["Black", "Brown", "Tan", "White", "Red"],
  },
  {
    label: "Size",
    list: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    label: "Brand",
    list: ["Azura", "LeatherCo", "Hidecraft", "Urban Hides"],
  },
];

export async function detectLocation() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    return {
      countryName: data.country_name || "United States",
      countryCode: data.country || "US",
      countryCallingCode: data.country_calling_code || "+1",
      currency: data.currency || "USD",
    };
  } catch (error) {
    return {
      countryName: "United States",
      countryCode: "US",
      countryCallingCode: "+1",
      currency: "USD",
    };
  }
}
