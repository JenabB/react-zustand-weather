import { useQuery } from "react-query";
import { WeatherAdapter } from "../WeatherAdapter";
import useWeatherStore from "../weatherStore";

const apiKey = "a3347e3e736d7f4ffaa7a91b0638ddcc";

export const useGetWeather = (latitude: number, longitude: number) => {
  const getWeather = useWeatherStore((state) => state.getWeather);
  // -4.0160833, 103.2440824
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  const urlWhenError = `https://api.openweathermap.org/data/2.5/weather?lat=-4.0160833&lon=103.2440824&appid=${apiKey}`;

  const res: any = useQuery({
    queryKey: ["get-weather"],
    queryFn: async () => {
      const req = await fetch(url).then((res) => res.json());
      if (!req || req.cod !== "200") {
        // console.log("error");
        const defaultRes = await fetch(urlWhenError).then((res) => res.json());

        // console.log(defaultRes, "default res");
        return defaultRes;
      }
      // console.log(req, "req");
      return req;
    },
    refetchInterval: 5000,
  });

  const mapped = WeatherAdapter(res.data);
  getWeather(mapped);

  return res;
};
