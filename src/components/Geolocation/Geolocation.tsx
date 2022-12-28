import React, { useEffect } from "react";
import { useGeoLocationStore } from "@/store";

const Geolocation = () => {
  const setLatitude = useGeoLocationStore((state) => state.setLatitude);
  const setLongitude = useGeoLocationStore((state) => state.setLongitude);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(`${position.coords.latitude}, ${position.coords.longitude}`);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  });

  // useEffect(() => {
  //   if (!("Notification" in window)) {
  //     console.log("This browser does not support desktop notification");
  //   } else {
  //     Notification.requestPermission();
  //   }
  // }, []);

  return <div></div>;
};

export default Geolocation;
