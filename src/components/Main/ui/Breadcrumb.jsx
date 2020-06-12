import React from "react";
import styled from "styled-components";

const StyledBreadcrumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #cdd6dd;
  padding: 0.5rem 0;

  .left {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    h4 {
      font-weight: bold;
      color: #001737;
      margin-right: 1rem;
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
      color: #788494;
    }

    span {
      margin: 0 0.5rem;
      color: #788494;
    }
  }
`;

const Breadcrumb = () => {
  return (
    <StyledBreadcrumb>
      <div className="left">
        <h4>Dashboard</h4>

        <p>ICE Market data</p>
        <span>|</span>
        <p>ICE Market data</p>
        <span>|</span>
        <p>ICE Market data</p>
      </div>

      <div className="left">
        <p>Settings</p>
        <span>|</span>
        <p>Analytics</p>
        <span>|</span>
        <p>Watchlist</p>
      </div>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
