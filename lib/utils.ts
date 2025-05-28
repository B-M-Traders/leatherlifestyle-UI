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
