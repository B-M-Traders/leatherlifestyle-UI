import { Minus, Plus, Trash, X } from "lucide-react";
import React from "react";
import FallbackImage from "./FallbackImage";
import { useFormat } from "@/hooks/useFormat";
import { useCart } from "@/hooks/useCart";
import CustomSelect from "../ui/custom-select";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
      <div className="flex items-center gap-3">
        <div className="h-[130px] min-w-[90px] relative max-w-[110px]">
          <Image
            className="h-full w-full object-cover rounded-lg"
            src={item.item_image}
            alt={item.item_name}
            height={200}
            width={200}
          />
          <span
            onClick={() => removeItem(item)}
            className="h-6 cursor-pointer border-templateBrown/50 w-6 absolute -top-2 shadow-2xl -right-2 bg-white border rounded-full flex items-center justify-center"
          >
            <X size={12} strokeWidth={1.5} />
          </span>
        </div>
        <div className="space-y-0.5">
          <p className="text-gray-400 font-normal text-[11px] tracking-wide">
            CATEGORY
          </p>
          <h2 className="text-[13px] leading-snug lg:text-[13px] font-medium text-templateBrown">
            {item.item_name}
          </h2>
          <div className="!mt-2 lg:!mt-3 space-y-1">
            <p className="tracking-wide text-xs text-gray-400">
              {item.variant_name}
            </p>
            <div>
              {item.variant_name.toLowerCase().includes("custom") && (
                <>
                  {!authToken ? (
                    <div className="w-full">
                      <CustomSelect
                        list={[
                          { label: "Arshad Ansari", code: "Arshad Ansari" },
                          { label: "Afroz Ansari", code: "Afroz Ansari" },
                        ]}
                        placeholder="Select Size"
                        name="customSize"
                      />
                    </div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center">
        <p className="text-[13px] font-light">
          {formatAmount(item.item_price)}
        </p>
        <p className="flex items-center justify-center gap-3">
          <button
            onClick={() => updateQuantity(item, "decrement")}
            className="flex items-center justify-center w-6 h-6 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
          >
            {item.item_quantity <= 1 ? (
              <Trash size={14} strokeWidth={1.5} />
            ) : (
              <Minus size={14} strokeWidth={1.5} />
            )}
          </button>
          <span className="text-[13px] font-medium mb-[1px] leading-none font-sans">
            {item.item_quantity}
          </span>
          <button
            onClick={() => updateQuantity(item, "increment")}
            className="flex items-center justify-center w-6 h-6 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
          >
            <Plus size={14} />
          </button>
        </p>
        <p className="text-sm text-templateBrown font-medium text-right">
          {formatAmount(item.item_price * item.item_quantity)}
        </p>
      </div>
    </div>
  );
};

export default CartPageListCard;
