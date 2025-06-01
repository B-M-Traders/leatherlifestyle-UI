"use client";
import React from "react";
import { useCart } from "@/hooks/useCart";
import { LoaderIcon } from "lucide-react";

const AddToCart = () => {
  const { addItem, addingCart } = useCart();

  const requestedData = {
    item_image: "",
    item_name: "Product Name",
    item_price: 1500,
    item_id: 151,
    item_quantity: 1,
    variant_name: "White, XXL",
  };

  const handleAddToCart = () => {
    addItem(requestedData);
  };

  return (
    <div>
      <button
        disabled={addingCart}
        onClick={handleAddToCart}
        className="w-full flex items-center gap-2 justify-center py-3.5 bg-templateBrown hover:bg-templateBrown/90 text-white text-sm"
      >
        {addingCart && <LoaderIcon size={14} className="animate-spin" />}
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
