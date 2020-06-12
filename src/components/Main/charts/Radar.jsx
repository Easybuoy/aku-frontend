import React from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const data = [
  {
    data: {
      january: 0.7,
      febuary: 0.8,
      march: 0.9,
      april: 0.67,
      may: 0.8,
      june: 0.2,
      july: 0.5,
      august: 0.91,
    },
    meta: { color: "blue" },
  },
  {
    data: {
      january: 0.6,
      febuary: 0.85,
      march: 0.5,
      april: 0.65,
      may: 0.7,
      june: 0.21,
      july: 0.5,
      august: 0.7,
    },
    meta: { color: "green" },
  },
];

const captions = {
  // columns
  january: "January",
  febuary: "Febuary",
  march: "March",
  april: "April",
  may: "May",
  june: "June",
  july: "July",
  august: "August",
};

const Radar = () => {
  return (
    <div>
      <RadarChart captions={captions} data={data} size={450} />
    </div>
  );
};

export default Radar;
