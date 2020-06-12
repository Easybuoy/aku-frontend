import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Navigation from "./ui/Navigation";
import Breadcrumb from "./ui/Breadcrumb";
import Radar from "./charts/Radar";
import Card from "../common/Card";
import LineGraph from "./charts/LineGraph";
import AudienceMetric from "./charts/AudienceMetric";
import World from "./charts/World";

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
        width: 100%;
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
    <StyledMain>
      <Navigation />
      <Container margin="1rem">
        <Breadcrumb />
        <section>
          <div className="left">
            <div className="full-width">
              <Card>
                <LineGraph />
              </Card>
            </div>
          </div>
          <div className="right">
            <Radar />
            <AudienceMetric />
            <World />

            {/* <Card>
              <Radar />
            </Card> */}
          </div>
        </section>
      </Container>
    </StyledMain>
  );
};

export default Main;