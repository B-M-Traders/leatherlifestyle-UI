import { Minus, Plus, Trash } from "lucide-react";
import React from "react";
import FallbackImage from "./FallbackImage";
import { useFormat } from "@/hooks/useFormat";
import { useCart } from "@/hooks/useCart";
import CustomSelect from "../ui/custom-select";
import Cookies from "js-cookie";
import Link from "next/link";

interface Props {
  item: {
    item_name: string;
    item_quantity: number;
    item_price: number;
    variant_name: string;
    item_image: string;
  };
}

const CartPageListCard: React.FC<Props> = ({ item }) => {
  const authToken = Cookies.get(process.env.USER_AUTH_KEY!);
  const { formatAmount } = useFormat();
  const { updateQuantity, removeItem } = useCart();
  return (
    <div className="flex gap-3 group">
      {/* Product Image */}
      <div className="h-[95px] w-[80px] overflow-hidden">
        <FallbackImage
          src={item.item_image}
          alt={"product image"}
          sizes="70px"
          className="h-full w-full object-cover object-center"
          height={65}
          width={55}
        />
      </div>

      {/* Product Details */}
      <div className="w-full my-auto space-y-2">
        <button
          onClick={() => removeItem(item)}
          className="text-[10px] underline underline-offset-1 pl-2 font-extralight float-right"
        >
          Remove
        </button>
        <h2 className="font-light text-[13px] leading-tight text-templateBrown">
          {item.item_name}
        </h2>
        <p className="font-light text-[12px] leading-tight text-gray-500">
          {item.variant_name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex  items-center border w-auto  px-2 py-0.5 bg-white">
            <div
              onClick={() => updateQuantity(item, "decrement")}
              className="flex items-center cursor-pointer justify-center hover:text-templatePrimary"
            >
              {item.item_quantity <= 1 ? (
                <Trash size={14} strokeWidth={1.5} />
              ) : (
                <Minus size={14} strokeWidth={1.5} />
              )}
            </div>

            {/* Quantity Display */}
            <span className="w-10 text-center text-sm font-extralight h-full text-templateText">
              {item.item_quantity}
            </span>

            {/* Increment Button */}
            <div
              onClick={() => updateQuantity(item, "increment")}
              className="flex cursor-pointer items-center justify-center"
            >
              <Plus size={14} strokeWidth={1.5} />
            </div>
          </div>

          {item.variant_name.toLowerCase().includes("custom") && (
            <>
              {!authToken ? (
                <CustomSelect list={["Arshad Ansari"]} />
              ) : (
                <Link
                  href={"/auth/login"}
                  className="inline-block underline underline-offset-4 text-xs font-light text-orange-500"
                >
                  Please login to add custom size
                </Link>
              )}
            </>
          )}

          {/* Product Prices */}
          <div className="">
            <h2 className="text-templateBrown text-sm">
              {formatAmount(item.item_price, "usd")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageListCard;
