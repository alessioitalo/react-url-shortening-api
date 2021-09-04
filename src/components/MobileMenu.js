import React from "react";
import styled from "styled-components";

const StyledMobileMenu = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    min-width: 200px;
    width: 90%;
    height: 50%;
    background-color: hsl(257, 27%, 26%);
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 1;
    border-radius: 10px;
    color: white;
    & ul {
      padding: 1rem 0;
      position: relative;
      margin: auto;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    & .mobile-menu-first-half {
      height: 60%;
      border-bottom: 1px solid hsl(257, 7%, 63%);
    }

    & .mobile-menu-second-half {
      height: 40%;
    }

    & li {
      color: white;
      cursor: pointer;
    }

    & li:hover{
      transform: scale(1.1)
    }

    & button {
      border-radius: 20px;
      padding: 0.5rem 0;
    }
  }
`;
function MobileMenu() {
  return (
    <StyledMobileMenu>
      <ul className="mobile-menu-first-half">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <ul className="mobile-menu-second-half">
        <li>Login</li>
        <button>Signup</button>
      </ul>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
