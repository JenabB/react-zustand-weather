import create from "zustand";

type State = {
  name: string;
  main: { temp: number };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  };
};

type Action = {
  getWeather: (weather: State) => void;
};

const useWeatherStore = create<State & Action>((set) => ({
  name: "",
  main: { temp: 0 },
  weather: { description: "", icon: "", id: 0, main: "" },
  getWeather: async (weather: State) =>
    set((state) => ({
      name: weather.name,
      main: weather.main,
      weather: weather.weather,
    })),
}));

export default useWeatherStore;
