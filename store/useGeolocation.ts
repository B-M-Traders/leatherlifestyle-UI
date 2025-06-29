import { create } from "zustand";

interface Geolocation {
  countryName: string;
  countryCode: string;
  countryCallingCode: string;
  currency: string;
}

interface GeolocationState {
  geolocation: Geolocation;
  setGeolocation: (geolocation: Geolocation) => void;
}

const useGeolocationStore = create<GeolocationState>((set) => ({
  geolocation: {
    countryName: "",
    countryCode: "",
    countryCallingCode: "",
    currency: "",
  },
  setGeolocation: (geolocation) => set({ geolocation }),
}));

export default useGeolocationStore;
