import { create } from "zustand";

interface CheckoutState {
  shippingAddress: {
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    address1: string;
    address2: string;
    city: string;
    province: string;
    postalCode: string;
    phoneCode: string;
    phoneNumber: string;
  };
  setShippingAddress: (address: any) => void;
  clearShippingAddress: () => void;
}

const useCheckoutStore = create<CheckoutState>((set) => ({
  shippingAddress: {
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    phoneCode: "",
    phoneNumber: "",
  },

  setShippingAddress: (address: any) => set({ shippingAddress: address }),
  clearShippingAddress: () =>
    set({
      shippingAddress: {
        email: "",
        firstName: "",
        lastName: "",
        country: "",
        address1: "",
        address2: "",
        city: "",
        province: "",
        postalCode: "",
        phoneCode: "",
        phoneNumber: "",
      },
    }),
}));

export default useCheckoutStore;
