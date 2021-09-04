import React from "react";
import styled from "styled-components";
import bgDesktop from '../images/bg-boost-desktop.svg'

const StyledCta = styled.section`
  color: white;
  background-color: hsl(257, 27%, 26%);
  background-size: cover;
  background-image: url(${bgDesktop});
  padding: 4rem 0;

  & > button {
    margin-top: 1rem;
    border-radius: 30px;
    padding: 0.7rem 3rem;
  }
`

function Cta() {
  return (
    <StyledCta>
      <h2>Boost your links today</h2>
      <button>Get Started</button>
    </StyledCta>
  );
}

export default Cta;
