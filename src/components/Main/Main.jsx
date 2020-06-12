import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Navigation from "./ui/Navigation";
import Breadcrumb from "./ui/Breadcrumb";
import Radar from "./charts/Radar";
import Card from "../common/Card";
const StyledMain = styled.div`
  background-color: white;
  width: 79.5%;
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
      background-color: red;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
    }

    .right {
      width: 25%;
      display: flex;
      flex-wrap: wrap;
      /* height: 1000px; */
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
          <div className="left"></div>
          <div className="right">
            <Card>
              <Radar />
            </Card>

            <Card>
              <Radar />
            </Card>
          </div>
        </section>
      </Container>
    </StyledMain>
  );
};

export default Main;
