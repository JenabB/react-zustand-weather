import React, { FC } from "react";
import { MapPinIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";

interface Props {
  name: string;
}
const WeatherLocation: FC<Props> = (props) => {
  return (
    <div className="flex justify-between p-2 items-center">
      {" "}
      <div className="flex items-center space-x-3 text-white p-2">
        <>
          <MapPinIcon className="h-6 w-6 text-white" />
        </>
        <>
          <h1 className="text-[1em] mb-0">{props.name}</h1>
        </>
      </div>
      <div>
        <Bars3BottomRightIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default WeatherLocation;
