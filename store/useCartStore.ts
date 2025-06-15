// stores/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string; // Unique line ID
  item_id: number;
  item_name: string;
  item_price: number;
  item_quantity: number;
  variant_name: string;
}

interface CartState {
  cartItems: CartItem[];

  setCart: (items: CartItem[]) => void;
  addCart: (item: Omit<CartItem, "id">) => void;
  remove: (id: string) => void;
  removeAll: () => void;
  // addQuantity: (id: string) => void;
  // removeQuantity: (id: string) => void;
}

const useCartStore = create<CartState>()((set, get) => ({
  cartItems: [],

  setCart: (items) => {
    const newItems = items.map((item) => ({
      ...item,
      id: crypto.randomUUID(),
    }));
    set({ cartItems: newItems });
  },

  addCart: (item) => {
    const cartItems = get().cartItems;
    const existing = cartItems.find(
      (i) => i.item_id === item.item_id && i.variant_name === item.variant_name
    );

    let updatedCart;

    if (existing) {
      updatedCart = cartItems.map((i) =>
        i.item_id === item.item_id && i.variant_name === item.variant_name
          ? { ...i, item_quantity: i.item_quantity + item.item_quantity }
          : i
      );
    } else {
      const newItem: CartItem = {
        ...item,
        id: crypto.randomUUID(),
      };
      updatedCart = [...cartItems, newItem];
    }

    set({ cartItems: updatedCart });
  },

  remove: (id) => {
    const updatedCart = get().cartItems.filter((item) => item.id !== id);
    set({ cartItems: updatedCart });
  },

  removeAll: () => {
    set({ cartItems: [] });
  },

  // addQuantity: (id) => {
  //   const updatedCart = get().cartItems.map((item) =>
  //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   set({ cartItems: updatedCart });
  // },

  // removeQuantity: (id) => {
  //   const updatedCart = get()
  //     .cartItems.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
  //         : item
  //     )
  //     .filter((item) => item.quantity > 0); // Optional: auto-remove if 0
  //   set({ cartItems: updatedCart });
  // },
}));

export default useCartStore;
