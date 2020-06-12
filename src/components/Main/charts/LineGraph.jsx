import React from "react";
import styled from "styled-components";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(150, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 27,
      },
      {
        x: "helicopter",
        y: 280,
      },
      {
        x: "boat",
        y: 297,
      },
      {
        x: "train",
        y: 27,
      },
      {
        x: "subway",
        y: 42,
      },
      {
        x: "bus",
        y: 168,
      },
      {
        x: "car",
        y: 249,
      },
      {
        x: "moto",
        y: 221,
      },
      {
        x: "bicycle",
        y: 166,
      },
      {
        x: "horse",
        y: 100,
      },
      {
        x: "skateboard",
        y: 277,
      },
      {
        x: "others",
        y: 138,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(337, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 199,
      },
      {
        x: "helicopter",
        y: 3,
      },
      {
        x: "boat",
        y: 145,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 93,
      },
      {
        x: "bus",
        y: 279,
      },
      {
        x: "car",
        y: 206,
      },
      {
        x: "moto",
        y: 278,
      },
      {
        x: "bicycle",
        y: 158,
      },
      {
        x: "horse",
        y: 136,
      },
      {
        x: "skateboard",
        y: 134,
      },
      {
        x: "others",
        y: 149,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(323, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 174,
      },
      {
        x: "helicopter",
        y: 86,
      },
      {
        x: "boat",
        y: 16,
      },
      {
        x: "train",
        y: 250,
      },
      {
        x: "subway",
        y: 66,
      },
      {
        x: "bus",
        y: 286,
      },
      {
        x: "car",
        y: 133,
      },
      {
        x: "moto",
        y: 163,
      },
      {
        x: "bicycle",
        y: 111,
      },
      {
        x: "horse",
        y: 61,
      },
      {
        x: "skateboard",
        y: 81,
      },
      {
        x: "others",
        y: 258,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(213, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 95,
      },
      {
        x: "helicopter",
        y: 290,
      },
      {
        x: "boat",
        y: 127,
      },
      {
        x: "train",
        y: 189,
      },
      {
        x: "subway",
        y: 159,
      },
      {
        x: "bus",
        y: 178,
      },
      {
        x: "car",
        y: 157,
      },
      {
        x: "moto",
        y: 89,
      },
      {
        x: "bicycle",
        y: 48,
      },
      {
        x: "horse",
        y: 55,
      },
      {
        x: "skateboard",
        y: 47,
      },
      {
        x: "others",
        y: 295,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(246, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 170,
      },
      {
        x: "helicopter",
        y: 146,
      },
      {
        x: "boat",
        y: 109,
      },
      {
        x: "train",
        y: 22,
      },
      {
        x: "subway",
        y: 104,
      },
      {
        x: "bus",
        y: 122,
      },
      {
        x: "car",
        y: 84,
      },
      {
        x: "moto",
        y: 275,
      },
      {
        x: "bicycle",
        y: 55,
      },
      {
        x: "horse",
        y: 63,
      },
      {
        x: "skateboard",
        y: 101,
      },
      {
        x: "others",
        y: 26,
      },
    ],
  },
];

const StyledLineGraph = styled.div`
  .line-graph {
    padding: 1rem;
    h3 {
      margin: 1rem 0;
      font-size: 1.2rem;
    }

    p {
      color: #939597;
      margin: 0.5rem 0;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .chart {
    height: 375px;
  }
`;
const LineGraph = () => {
  return (
    <StyledLineGraph>
      <div className="line-graph">
        <h3>Sales Statistical Overview</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          molestiae corporis similique omnis? Quam maxime,
        </p>
      </div>

      <div className="chart">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          lineWidth={5}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          enableArea={true}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </StyledLineGraph>
  );
};

export default LineGraph;
