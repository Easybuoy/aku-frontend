import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Navigation from "./ui/Navigation";
import Breadcrumb from "./ui/Breadcrumb";
import Radar from "./charts/Radar";

import TotalRevenue from "./charts/TotalRevenue";
import LineGraph from "./charts/LineGraph";
import AudienceMetric from "./charts/AudienceMetric";
import World from "./charts/World";
import TotalTransactions from "./charts/TotalTransactions";
import MarketOverview from "./charts/MarketOverview";
import Invoices from "./charts/Invoices";
import RecentEvents from "./charts/RecentEvents";
import Footer from "../common/Footer";

const StyledMain = styled.div`
  width: 84.5%;
  height: 100vh;
  flex-direction: column;
  overflow-y: scroll;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 1rem 0;

    .left {
      width: 70%;
      display: flex;
      flex-wrap: wrap;

      .full-width {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
      }

      .divided-width {
        width: 45%;
      }
    }

    .right {
      width: 25%;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const Main = () => {
  return (
    <>
      <StyledMain>
        <Navigation />
        <Container margin="1rem">
          <Breadcrumb />
          <section>
            <div className="left">
              <div className="full-width">
                <LineGraph />
              </div>

              <div className="full-width">
                <div className="divided-width">
                  <TotalRevenue />
                </div>

                <div className="divided-width">
                  <TotalTransactions />
                </div>
              </div>

              <div className="full-width">
                <MarketOverview />
              </div>

              <div className="full-width">
                <Invoices />
              </div>

              <div className="full-width">
                <div className="divided-width">
                  <TotalRevenue />
                </div>

                <div className="divided-width">
                  <TotalTransactions />
                </div>
              </div>

              <div className="full-width">
                <div className="divided-width">
                  <RecentEvents />
                </div>

                <div className="divided-width">
                  <RecentEvents />
                </div>
              </div>
            </div>
            <div className="right">
              <Radar />
              <AudienceMetric />
              <World />
              <World />
              <World />
              <World />
            </div>
          </section>
        </Container>
        <Footer />
      </StyledMain>
    </>
  );
};

export default Main;
