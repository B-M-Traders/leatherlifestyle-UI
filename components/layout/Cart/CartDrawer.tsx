import CartList from "@/components/Cart/CartList";
import EmptyCart from "@/components/Cart/EmptyCart";
import { useCart } from "@/hooks/useCart";
import useCartStore from "@/store/useCartStore";
import { useToggleStore } from "@/store/useToggleStore";
import { ShoppingBag } from "lucide-react";
import React, { useEffect } from "react";

interface Props {}

const CartDrawer: React.FC<Props> = () => {
  const { cartItems } = useCartStore();
  const { isCartDrawerOpen } = useToggleStore();
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { totalItems } = useCart();

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    if (showDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showDrawer]);

  useEffect(() => {
    if (mounted) {
      toggleDrawer();
    } else {
      setMounted(true);
      return;
    }
  }, [isCartDrawerOpen]);

  return (
    <>
      <div
        onClick={toggleDrawer}
        className="hover:bg-gray-100 relative rounded-full p-2 cursor-pointer "
      >
        {totalItems > 0 && (
          <span className="bg-templateBrown h-5 w-5 text-[11px] text-white rounded-full  absolute -top-0.5 -right-0.5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
        <ShoppingBag size={18} strokeWidth={1.5} />
      </div>

      <div
        onClick={toggleDrawer}
        className="bg-black/50 fixed top-0 bottom-0 left-0 right-0 z-20 transition-transform duration-300 "
        style={{ display: showDrawer ? "block" : "none" }}
      ></div>

      <div
        className={`fixed top-0 bottom-0 text-black right-0 w-[85%] md:w-[400px] bg-white shadow-lg z-30 p-6 ${
          showDrawer ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <CartList cartData={cartItems as any} />
        {/* <EmptyCart /> */}
      </div>
    </>
  );
};

export default CartDrawer;
