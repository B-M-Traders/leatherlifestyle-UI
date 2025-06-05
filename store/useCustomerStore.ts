import { create } from "zustand";

interface CustomerState {
  customer_id: number | null;
  email: string | null;
  setCustomer: (data: { customer_id: number; email: string }) => void;
  clearCustomer: () => void;
}

const useCustomerStore = create<CustomerState>((set) => ({
  customer_id: null,
  email: null,
  setCustomer: ({ customer_id, email }) => set({ customer_id, email }),
  clearCustomer: () => set({ customer_id: null, email: null }),
}));

export default useCustomerStore;
