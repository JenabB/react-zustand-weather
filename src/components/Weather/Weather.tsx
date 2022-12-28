import { useGeoLocationStore, useWeatherStore } from "@/store";
import { useGetWeather } from "@/store/Weather/actions/useGetWeather";
import WeatherHeader from "./components/WeatherHeader";

const Weather = () => {
  const longitude = useGeoLocationStore((state) => state.longitude);
  const latitude = useGeoLocationStore((state) => state.latitude);

  useGetWeather(longitude, latitude);

  const name = useWeatherStore((state) => state.name);

  return (
    <div>
      <WeatherHeader />
    </div>
  );
};

export default Weather;
