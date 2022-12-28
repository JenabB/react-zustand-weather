import create from "zustand";

type State = {
  longitude: number;
  latitude: number;
};

type Action = {
  setLongitude: (longitude: number) => void;
  setLatitude: (latitude: number) => void;
};
const useBearStore = create<State & Action>((set) => ({
  longitude: -77.0364,
  latitude: 38.8951,
  setLongitude: async (long: number) =>
    set((state: { longitude: number }) => ({ longitude: long })),
  setLatitude: async (lat: number) =>
    set((state: { latitude: number }) => ({ latitude: lat })),
}));

export default useBearStore;
