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

  const checkVariantSelected = () => {
    if (!requestedData?.variant_name) return false;

    const parts = requestedData.variant_name
      .split(",")
      .map((p) => p.trim().toLowerCase());

    // Make sure no part is 'null', empty, or whitespace
    return parts.length === 2 && parts.every((p) => p && p !== "null");
  };

  const handleAddToCart = () => {
    if (!checkVariantSelected()) {
      alert("Please select both color and size before adding to cart.");
      return;
    }

    addItem(requestedData);
  };

  return (
    <div>
      <button
        disabled={addingCart}
        onClick={handleAddToCart}
        className="w-full fixed bottom-0 z-[1] left-0 lg:relative flex items-center gap-2 justify-center font-light py-4 lg:py-3 bg-templateBrown text-white lg:text-sm"
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
