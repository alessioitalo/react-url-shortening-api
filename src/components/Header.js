import React from "react";
import styled from "styled-components";
import illustrationDesktop from "../images/illustration-working.svg";
import Navbar from "./Navbar";

const StyledHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    text-align: center;
    width: 100%;
  }

  & button {
    margin-top: 1rem;
    border-radius: 30px;
    padding: 1rem 3rem;
    @media (max-width: 1000px) {
      font-size: 1.3rem;
    }
  }
`;

const StyledLeftHeader = styled.div`
  padding-left: 10%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 90%;
    position: relative;
    margin: auto;
    padding-left: 0;
    letter-spacing: -1px;
  }
`;

const StyledRightHeader = styled.div`
  width: 50%;
  overflow: hidden;
  @media (max-width: 1000px) {
    width: 100%;
  }

  & img {
    padding: 2rem 0;
    width: 100%;
    position: relative;
    bottom: 2rem;
    left: 1rem;
    overflow-x: hidden;
    @media (max-width: 1000px) {
      bottom: 0;
      width: 130%;
      left: ;
      max-width: 600px;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Navbar />
      <StyledHeaderContainer className="container">
        <StyledLeftHeader>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <div>
            <button>Get Started</button>
          </div>
        </StyledLeftHeader>
        <StyledRightHeader>
          <div>
            <img src={illustrationDesktop} alt="illustration" />
          </div>
        </StyledRightHeader>
      </StyledHeaderContainer>
      {/* <Shortener /> */}
    </StyledHeader>
  );
}

export default Header;
