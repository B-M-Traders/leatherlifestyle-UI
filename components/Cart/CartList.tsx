import React, { useState } from "react";
import CartListCard from "../Cards/CartListCard";
import { useFormat } from "@/hooks/useFormat";
import { useCart } from "@/hooks/useCart";
import { Loader2, LoaderCircle, X } from "lucide-react";
import { useToggleStore } from "@/store/useToggleStore";
import useCartStore from "@/store/useCartStore";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CartListProps {
  cartData: {
    item_name: string;
    item_id: number;
    item_price: number;
    item_quanity: number;
    variant_name: string;
  }[];
}

const CartList: React.FC<CartListProps> = ({ cartData }) => {
  const { formatAmount } = useFormat();
  const { updatingCart, toggleCartDrawer } = useToggleStore();
  const { cartItems } = useCartStore();
  const { clearCart, totalPrice } = useCart();
  const token = Cookies.get(process.env.AU_AUTH!);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-4 justify-between h-full w-full">
      {/* Cart Header */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-templateText">Your Cart</h2>
      </div>

      <hr />

      {/* Cart Items */}
      <div className="h-full space-y-3 relative overflow-y-auto w-full">
        {cartItems.length > 0 && (
          <div className="flex items-center justify-end">
            <button
              onClick={clearCart}
              className="text-xs flex items-center  gap-1 underline underline-offset-4 font-extralight"
            >
              Clear cart <X size={13} strokeWidth={1} />
            </button>
          </div>
        )}
        <div className="space-y-5">
          {cartData?.map((item, index: number) => (
            <React.Fragment key={index}>
              <CartListCard item={item as any} />
            </React.Fragment>
          ))}
        </div>
        {updatingCart && (
          <div className="absolute bg-white/40 cursor-not-allowed inset-0 flex items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        )}
      </div>

      <hr />

      {/* Cart Footer */}
      <div className=" w-full flex flex-col space-y-4 items-center justify-between">
        {/* Subtotal */}
        <div className="flex items-center w-full justify-between">
          <h2 className="text-templateText">SUBTOTAL</h2>
          <div className="flex items-center justify-end gap-3">
            {updatingCart && <Loader2 size={16} className="animate-spin" />}
            <h2 className="text-templateText text-lg font-normal">
              {formatAmount(totalPrice)}
            </h2>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-xs text-center text-gray-500">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>

        {/* Checkout Button */}
        <Link
          href={"/cart"}
          className="bg-templateBrown flex items-center justify-center font-light gap-2 hover:opacity-90 tracking-wider text-white w-full py-2.5 rounded-full"
        >
          {loading && (
            <Loader2 size={16} className="animate-spin" strokeWidth={2} />
          )}
          GO TO CART
        </Link>
      </div>
    </div>
  );
};

export default CartList;
