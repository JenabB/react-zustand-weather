import MorningCloud from "@/assets/images/morning-cloud.jpg";
import MorningRain from "@/assets/images/morning-rain.jpg";
import AfternoonCloud from "@/assets/images/afternoon-cloud.jpg";

const weathers = [
  {
    day: "morning",
    condition: [
      { name: "Clouds", image: MorningCloud },
      { name: "Rain", image: MorningRain },
    ],
  },

  {
    day: "afternoon",
    condition: [
      { name: "Clouds", image: AfternoonCloud },
      { name: "Rain", image: MorningCloud },
    ],
  },
];

export default weathers;
