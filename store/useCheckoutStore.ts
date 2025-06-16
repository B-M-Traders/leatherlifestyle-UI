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
  billingAddress: {
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
  setBillingAddress: (address: any) => void;
  clearShippingAddress: () => void;
  clearBillingAddress: () => void;
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
  billingAddress: {
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
  setBillingAddress: (address: any) => set({ billingAddress: address }),
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
  clearBillingAddress: () =>
    set({
      billingAddress: {
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
