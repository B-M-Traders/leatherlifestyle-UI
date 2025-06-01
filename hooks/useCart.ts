// hooks/useCart.ts
import useCartStore from "@/store/useCartStore";
import Cookies from "js-cookie";
import { useState } from "react";

const GUEST_CART_KEY = process.env.GUEST_CART_KEY!;
const AU_AUTH = process.env.AU_AUTH!;

export const useCart = () => {
  const token = Cookies.get(AU_AUTH);
  const [addingCart, setAddingCart] = useState(false);
  const { cartItems, setCart } = useCartStore();

  const loadCart = async () => {
    if (token) {
      console.log("Loading from DB");
      // Fetch from backend & setCart(response.data)
    } else {
      console.log("Loading from LOCAL");
      const localCart = localStorage.getItem(GUEST_CART_KEY);
      const parsed = localCart ? JSON.parse(localCart) : [];
      setCart(parsed);
    }
  };

  const addItem = (item: any) => {
    setAddingCart(true);
    if (token) {
      console.log("Send item to DB", item);
    } else {
      setTimeout(() => {
        const localCart = localStorage.getItem(GUEST_CART_KEY);
        const parsed = localCart ? JSON.parse(localCart) : [];

        const index = parsed.findIndex(
          (i: any) =>
            i.item_id === item.item_id && i.variant_name === item.variant_name
        );

        if (index !== -1) {
          parsed[index].item_quantity += item.item_quantity;
        } else {
          parsed.push(item);
        }

        localStorage.setItem(GUEST_CART_KEY, JSON.stringify(parsed));
        setCart(parsed);
        setAddingCart(false);
      }, 500);
    }
  };

  const totalItems = () => {
    let items = token
      ? cartItems
      : (() => {
          const localCart = localStorage.getItem(GUEST_CART_KEY);
          return localCart ? JSON.parse(localCart) : [];
        })();

    return items.reduce(
      (sum: number, item: any) => sum + item.item_quantity,
      0
    );
  };

  return {
    addingCart,
    loadCart,
    addItem,
    totalItems,
  };
};
