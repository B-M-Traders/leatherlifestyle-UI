"use client";
import React from "react";
import { useCart } from "@/hooks/useCart";
import { Loader2, ShoppingCart } from "lucide-react";

interface Props {
  requestedData?: {
    item_image: string;
    item_name: string;
    item_price: number;
    item_id: number;
    item_quantity: number;
    variant_name: string | null;
  };
  text: string;
}

const AddToCart: React.FC<Props> = ({ requestedData, text }) => {
  const { addItem, addingCart } = useCart();

  const demoRequestedData = {
    item_image: "/men1.jpg",
    item_name: "Product Name",
    item_price: 1500,
    item_id: 151,
    item_quantity: 1,
    variant_name: "White, XXL",
  };

  const handleAddToCart = () => {
    addItem(requestedData || demoRequestedData);
  };

  return (
    <div>
      <button
        disabled={addingCart}
        onClick={handleAddToCart}
        className="w-full fixed bottom-0 left-0 lg:relative flex items-center gap-2 justify-center font-light py-4 lg:py-3 bg-templateBrown text-white lg:text-sm"
      >
        {addingCart && <Loader2 size={14} className="animate-spin" />}
        {text && (
          <>
            {text} <ShoppingCart size={16} strokeWidth={2} />
          </>
        )}
      </button>
    </div>
  );
};

export default AddToCart;
