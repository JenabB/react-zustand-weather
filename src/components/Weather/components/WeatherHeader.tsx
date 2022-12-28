import React from "react";
import { useWeatherStore } from "@/store";
import { format, getHours } from "date-fns";
import WeatherLocation from "./header/WeatherLocation";
import { days, weathers } from "@/utils";

const WeatherHeader = () => {
  const { name, main, weather } = useWeatherStore((state) => state);

  const hour = getHours(new Date());
  const bg =
    "https://media.istockphoto.com/id/508544168/photo/clear-blue-sky-background.jpg?b=1&s=170667a&w=0&k=20&c=rzsADNkqiN0SxgvaUXXKjxF-FeBDqs1-gV0jCdUZ8o4=";

  const d = days.find((day) => day.time.some((el) => el === hour));

  const condition = weathers.find((weather) => weather.day == d?.name);

  const result = condition?.condition.find((con) => con.name === weather.main);

  console.log({ d, result }, "find day");

  return (
    <div
      className="rounded-b-[15%]"
      style={{
        backgroundImage: `url(${result?.image ? result.image : bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "350px",
        width: "100%",
      }}
    >
      <div>
        <WeatherLocation name={name} />
      </div>
      <div className="p-4 text-white pt-10">
        <h1 className="text-[54px] ">{main.temp}&deg;C</h1>
        <h2 className="">{weather.main}</h2>
      </div>
    </div>
  );
};

export default WeatherHeader;
