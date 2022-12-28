type State = {
  name: string;
  main: { temp: number };
  weather: Array<{
    description: string;
    icon: string;
    id: string;
    main: string;
  }>;
};

export const WeatherAdapter = (weather: any): any => {
  if (!weather) return;

  const rtn = {
    name: weather.name,
    main: {
      temp: weather.main.temp,
    },
    weather: weather.weather[0],
  };

  return rtn;
};
