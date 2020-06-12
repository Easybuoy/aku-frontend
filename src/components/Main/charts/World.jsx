import React from "react";
import styled from "styled-components";
import { ResponsiveChoropleth } from "@nivo/geo";

import Card from "../../common/Card";
import features from "./features";
const data = [
  {
    id: "AFG",
    value: 699163,
  },
  {
    id: "AGO",
    value: 120309,
  },
  {
    id: "ALB",
    value: 22648,
  },
  {
    id: "ARE",
    value: 860133,
  },
  {
    id: "ARG",
    value: 763105,
  },
  {
    id: "ARM",
    value: 404198,
  },
  {
    id: "ATA",
    value: 360060,
  },
  {
    id: "ATF",
    value: 448690,
  },
  {
    id: "AUT",
    value: 875828,
  },
  {
    id: "AZE",
    value: 591637,
  },
  {
    id: "BDI",
    value: 520634,
  },
  {
    id: "BEL",
    value: 435148,
  },
  {
    id: "BEN",
    value: 78908,
  },
  {
    id: "BFA",
    value: 32952,
  },
  {
    id: "BGD",
    value: 617272,
  },
  {
    id: "BGR",
    value: 301189,
  },
  {
    id: "BHS",
    value: 72845,
  },
  {
    id: "BIH",
    value: 829287,
  },
  {
    id: "BLR",
    value: 112040,
  },
  {
    id: "BLZ",
    value: 825688,
  },
  {
    id: "BOL",
    value: 651571,
  },
  {
    id: "BRN",
    value: 137587,
  },
  {
    id: "BTN",
    value: 952853,
  },
  {
    id: "BWA",
    value: 781432,
  },
  {
    id: "CAF",
    value: 723938,
  },
  {
    id: "CAN",
    value: 284700,
  },
  {
    id: "CHE",
    value: 155405,
  },
  {
    id: "CHL",
    value: 347278,
  },
  {
    id: "CHN",
    value: 833780,
  },
  {
    id: "CIV",
    value: 837840,
  },
  {
    id: "CMR",
    value: 181354,
  },
  {
    id: "COG",
    value: 468951,
  },
  {
    id: "COL",
    value: 698163,
  },
  {
    id: "CRI",
    value: 237165,
  },
  {
    id: "CUB",
    value: 528327,
  },
  {
    id: "-99",
    value: 348100,
  },
  {
    id: "CYP",
    value: 796731,
  },
  {
    id: "CZE",
    value: 520230,
  },
  {
    id: "DEU",
    value: 800034,
  },
  {
    id: "DJI",
    value: 333020,
  },
  {
    id: "DNK",
    value: 737242,
  },
  {
    id: "DOM",
    value: 197130,
  },
  {
    id: "DZA",
    value: 69528,
  },
  {
    id: "ECU",
    value: 727260,
  },
  {
    id: "EGY",
    value: 932380,
  },
  {
    id: "ERI",
    value: 846513,
  },
  {
    id: "ESP",
    value: 956772,
  },
  {
    id: "EST",
    value: 840794,
  },
  {
    id: "ETH",
    value: 799001,
  },
  {
    id: "FIN",
    value: 720162,
  },
  {
    id: "FJI",
    value: 642590,
  },
  {
    id: "FLK",
    value: 142551,
  },
  {
    id: "FRA",
    value: 439630,
  },
  {
    id: "GAB",
    value: 204944,
  },
  {
    id: "GBR",
    value: 932039,
  },
  {
    id: "GEO",
    value: 160,
  },
  {
    id: "GHA",
    value: 211295,
  },
  {
    id: "GIN",
    value: 172687,
  },
  {
    id: "GMB",
    value: 549819,
  },
  {
    id: "GNB",
    value: 744107,
  },
  {
    id: "GNQ",
    value: 862654,
  },
  {
    id: "GRC",
    value: 317752,
  },
  {
    id: "GTM",
    value: 963401,
  },
  {
    id: "GUY",
    value: 56280,
  },
  {
    id: "HND",
    value: 533894,
  },
  {
    id: "HRV",
    value: 560344,
  },
  {
    id: "HTI",
    value: 411413,
  },
  {
    id: "HUN",
    value: 265931,
  },
  {
    id: "IDN",
    value: 91201,
  },
  {
    id: "IND",
    value: 562185,
  },
  {
    id: "IRL",
    value: 427037,
  },
  {
    id: "IRN",
    value: 380215,
  },
  {
    id: "IRQ",
    value: 562872,
  },
  {
    id: "ISL",
    value: 64727,
  },
  {
    id: "ISR",
    value: 575739,
  },
  {
    id: "ITA",
    value: 358100,
  },
  {
    id: "JAM",
    value: 5843,
  },
  {
    id: "JOR",
    value: 515019,
  },
  {
    id: "JPN",
    value: 283609,
  },
  {
    id: "KAZ",
    value: 146039,
  },
  {
    id: "KEN",
    value: 138265,
  },
  {
    id: "KGZ",
    value: 327208,
  },
  {
    id: "KHM",
    value: 10039,
  },
  {
    id: "OSA",
    value: 613243,
  },
  {
    id: "KWT",
    value: 31622,
  },
  {
    id: "LAO",
    value: 978795,
  },
  {
    id: "LBN",
    value: 518756,
  },
  {
    id: "LBR",
    value: 805455,
  },
  {
    id: "LBY",
    value: 183036,
  },
  {
    id: "LKA",
    value: 486472,
  },
  {
    id: "LSO",
    value: 275820,
  },
  {
    id: "LTU",
    value: 92266,
  },
  {
    id: "LUX",
    value: 336307,
  },
  {
    id: "LVA",
    value: 542673,
  },
  {
    id: "MAR",
    value: 839888,
  },
  {
    id: "MDA",
    value: 23544,
  },
  {
    id: "MDG",
    value: 913686,
  },
  {
    id: "MEX",
    value: 554025,
  },
  {
    id: "MKD",
    value: 780378,
  },
  {
    id: "MLI",
    value: 792414,
  },
  {
    id: "MMR",
    value: 843141,
  },
  {
    id: "MNE",
    value: 854436,
  },
  {
    id: "MNG",
    value: 18008,
  },
  {
    id: "MOZ",
    value: 238837,
  },
  {
    id: "MRT",
    value: 651627,
  },
  {
    id: "MWI",
    value: 482532,
  },
  {
    id: "MYS",
    value: 445826,
  },
  {
    id: "NAM",
    value: 248947,
  },
  {
    id: "NCL",
    value: 576439,
  },
  {
    id: "NER",
    value: 113140,
  },
  {
    id: "NGA",
    value: 394011,
  },
  {
    id: "NIC",
    value: 30869,
  },
  {
    id: "NLD",
    value: 198095,
  },
  {
    id: "NOR",
    value: 733801,
  },
  {
    id: "NPL",
    value: 913255,
  },
  {
    id: "NZL",
    value: 606113,
  },
  {
    id: "OMN",
    value: 918295,
  },
  {
    id: "PAK",
    value: 102593,
  },
  {
    id: "PAN",
    value: 189748,
  },
  {
    id: "PER",
    value: 256036,
  },
  {
    id: "PHL",
    value: 419550,
  },
  {
    id: "PNG",
    value: 65596,
  },
  {
    id: "POL",
    value: 199080,
  },
  {
    id: "PRI",
    value: 270717,
  },
  {
    id: "PRT",
    value: 221279,
  },
  {
    id: "PRY",
    value: 900263,
  },
  {
    id: "QAT",
    value: 61031,
  },
  {
    id: "ROU",
    value: 425303,
  },
  {
    id: "RUS",
    value: 532562,
  },
  {
    id: "RWA",
    value: 166433,
  },
  {
    id: "ESH",
    value: 13999,
  },
  {
    id: "SAU",
    value: 865779,
  },
  {
    id: "SDN",
    value: 202545,
  },
  {
    id: "SDS",
    value: 661065,
  },
  {
    id: "SEN",
    value: 614165,
  },
  {
    id: "SLB",
    value: 34875,
  },
  {
    id: "SLE",
    value: 231313,
  },
  {
    id: "SLV",
    value: 736394,
  },
  {
    id: "ABV",
    value: 743207,
  },
  {
    id: "SOM",
    value: 541074,
  },
  {
    id: "SRB",
    value: 275287,
  },
  {
    id: "SUR",
    value: 942515,
  },
  {
    id: "SVK",
    value: 289430,
  },
  {
    id: "SVN",
    value: 567673,
  },
  {
    id: "SWZ",
    value: 32154,
  },
  {
    id: "SYR",
    value: 159293,
  },
  {
    id: "TCD",
    value: 422143,
  },
  {
    id: "TGO",
    value: 451268,
  },
  {
    id: "THA",
    value: 125633,
  },
  {
    id: "TJK",
    value: 167159,
  },
  {
    id: "TKM",
    value: 849511,
  },
  {
    id: "TLS",
    value: 779772,
  },
  {
    id: "TTO",
    value: 517338,
  },
  {
    id: "TUN",
    value: 120228,
  },
  {
    id: "TUR",
    value: 567818,
  },
  {
    id: "TWN",
    value: 576637,
  },
  {
    id: "TZA",
    value: 376387,
  },
  {
    id: "UGA",
    value: 619391,
  },
  {
    id: "UKR",
    value: 422127,
  },
  {
    id: "URY",
    value: 21584,
  },
  {
    id: "USA",
    value: 723350,
  },
  {
    id: "UZB",
    value: 959577,
  },
  {
    id: "VEN",
    value: 858418,
  },
  {
    id: "VNM",
    value: 213996,
  },
  {
    id: "VUT",
    value: 660146,
  },
  {
    id: "PSE",
    value: 620179,
  },
  {
    id: "YEM",
    value: 152254,
  },
  {
    id: "ZAF",
    value: 950783,
  },
  {
    id: "ZMB",
    value: 107033,
  },
  {
    id: "ZWE",
    value: 749347,
  },
  {
    id: "KOR",
    value: 83513,
  },
];

const StyledWorld = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    h3 {
      margin: 0.5rem 0;
    }
  }
  .chart {
    height: 300px;

    svg {
      width: 90%;
      /* height: 200px; */
    }
  }

  .stats-container {
    margin-bottom: 1rem;
    color: #001837;
    .stats {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5rem;

      p {
        margin-right: 2rem;

        span {
          font-size: 0.8rem;
          margin-left: 1rem;
        }
      }
    }
  }
`;

const World = () => {
  return (
    <StyledWorld>
      <Card>
        <h3>Worlds</h3>
        <div className="chart">
          <ResponsiveChoropleth
            data={data}
            features={features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="blues"
            domain={[0, 1000000]}
            unknownColor="#5244c1"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={45}
            projectionTranslation={[0.5, 0.45]}
            projectionRotation={[0, 0, 0]}
            graticuleLineColor="#dddddd"
            borderColor={{ theme: "background" }}
            legends={[]}
          />
        </div>

        <div className="stats-container">
          <div className="stats">
            <p>Carlifonia</p>
            <p>
              26,437
              <span>26%</span>
            </p>
          </div>

          <div className="stats">
            <p>Washington</p>
            <p>
              3252
              <span>64%</span>
            </p>
          </div>

          <div className="stats">
            <p>Michigan</p>
            <p>
              4,985
              <span>30%</span>
            </p>
          </div>
        </div>
      </Card>
    </StyledWorld>
  );
};

export default World;
