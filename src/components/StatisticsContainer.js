import React from "react";
import styled from "styled-components";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";

const StyledStatisticsContainer = styled.section`
  padding: 5rem 0;
  background-color: hsl(225, 33%, 95%);
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    width: 40%;
    position: relative;
    margin: auto;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
    margin: 0;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
`;
const StyledSquare = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  text-align: left;
  padding: 4rem 2rem;
  position: relative;
  width: 30%;
  @media (max-width: 1000px) {
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
  }
  &.second {
    top: 2rem;
  }
  &.third {
    top: 4rem;
  }
`;

const StyledIcon = styled.div`
  background-color: hsl(257, 27%, 26%);
  position: absolute;
  left: 10px;
  top: -40px;
  height: 80px;
  width: 80px;
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  @media (max-width: 1000px) {
    left: 0;
    top: -50px;
    left: calc(50% - 40px);
  }
`;

const StyledHorizontal = styled.div`
  height: 10px;
  width: 100%;
  position: absolute;
  top: 50%;
  margin: auto;
  background-color: hsl(180, 66%, 49%);
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledVertical = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    width: 10px;
    height: 80%;
    background-color: hsl(180, 66%, 49%);
    position: absolute;
    left: calc(50% - 5px);
    bottom: 20px;
  }
`;

function StatisticsContainer() {
  return (
    <StyledStatisticsContainer>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="container">
        <StyledHorizontal />
        <StyledVertical />
        <StyledSquare>
          <StyledIcon>
            <img src={brand} alt="icon" />
          </StyledIcon>
          <h3>Brand Recognition</h3>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </StyledSquare>
        <StyledSquare className="second">
          <StyledIcon>
            <img src={detailed} alt="icon" />
          </StyledIcon>
          <h3>Detailed Records</h3>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </StyledSquare>
        <StyledSquare className="third">
          <StyledIcon>
            <img src={fully} alt="icon" />
          </StyledIcon>
          <h3>Fully Customizable</h3>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </StyledSquare>
      </div>
    </StyledStatisticsContainer>
  );
}

export default StatisticsContainer;
