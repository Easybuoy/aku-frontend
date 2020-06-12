import React from "react";
import styled from "styled-components";

const StyledSideNav = styled.div`
  width: 100%;

  h5 {
    font-size: 0.8rem;
    color: #a6b5f9;
    padding-bottom: 0.6rem;
    border-bottom: 2px solid #3456f1;
    margin: 1rem;
  }

  ul {
    color: white;
    i {
      font-size: 0.6rem;
      margin-right: 0.4rem;
      /* font-weight: bolder; */
    }
    li {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      margin: 1rem 0;
      padding: 1rem;
      width: 100%;
      .fa-arrow-right {
        color: #2469f4;
        font-size: 0.9rem;
        /* right: 10px; */
        left: 220px;
        position: absolute;
      }
    }

    .active {
      background-color: #0e24d4;
    }
  }
`;

const SideNav = () => {
  return (
    <StyledSideNav>
      <h5>Main Menu</h5>

      <ul>
        <li>
          <div className="link">
            <i class="far fa-circle"></i> Dashboards
          </div>
        </li>

        <li className="active">
          <div className="link">
            <i class="far fa-circle"></i> Basic UI Elements
          </div>
          <i className="fas fa-arrow-right "></i>
        </li>

        <li>
          <div className="link">
            <i class="far fa-circle"></i> Form Elements
          </div>
        </li>

        <li>
          <div className="link">
            <i class="far fa-circle"></i> Charts
          </div>
        </li>

        <li>
          <div className="link">
            <i class="far fa-circle"></i> Tables
          </div>
        </li>

        <li>
          <div className="link">
            <i class="far fa-circle"></i> Icons
          </div>
        </li>

        <li>
          <div className="link">
            <i class="far fa-circle"></i> User Pages
          </div>
          <i className="fas fa-arrow-right "></i>
        </li>
      </ul>
    </StyledSideNav>
  );
};

export default SideNav;
