import { create } from "zustand";

type ToggleStore = {
  isCartDrawerOpen: boolean;
  isMenuDrawerOpen: boolean;
  updatingCart: boolean;

  setUpdatingCart: (value: boolean) => void;

  toggleCartDrawer: () => void;
  setCartDrawerOpen: (value: boolean) => void;

  toggleMenuDrawer: () => void;
  setMenuDrawerOpen: (value: boolean) => void;
};

export const useToggleStore = create<ToggleStore>((set) => ({
  isCartDrawerOpen: false,
  isMenuDrawerOpen: false,
  updatingCart: false,

  setUpdatingCart: (value) => set({ updatingCart: value }),

  toggleCartDrawer: () =>
    set((state) => ({ isCartDrawerOpen: !state.isCartDrawerOpen })),
  setCartDrawerOpen: (value) => set({ isCartDrawerOpen: value }),

  toggleMenuDrawer: () =>
    set((state) => ({ isMenuDrawerOpen: !state.isMenuDrawerOpen })),
  setMenuDrawerOpen: (value) => set({ isMenuDrawerOpen: value }),
}));
