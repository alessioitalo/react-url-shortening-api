import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const StyledNavbar = styled.nav`
  padding: 3rem 0;
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 90%;
    padding: 1rem 0;
  }

  & ul {
    padding: 0;
    display: flex;
    align-items: center;
  }
  & li {
    margin: 0 1rem;
    font-weight: 700;
    @media (max-width: 1000px) {
      display: none;
    }
  }
  & a:hover {
    color: hsl(255, 11%, 22%);
  }
  & button {
    border-radius: 30px;
    padding: 0.7rem 1.5rem;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const StyledHamburger = styled.div`
  display: none;
  @media (max-width: 1000px) {
    cursor: pointer;
    display: flex;
    & div {
      position: relative;
      margin: auto;
      height: 5px;
      width: 25px;
      background: hsl(257, 27%, 26%);
      align-self: center;
      position: relative;
      cursor: pointer;
      &:before,
      &:after {
        content: "";
        height: 5px;
        width: 25px;
        position: absolute;
        background: hsl(257, 27%, 26%);
      }
      &:before {
        top: -10px;
        left: 0;
      }
      &:after {
        top: 10px;
        left: 0;
      }
    }
  }
`;

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const showMobileMenuHandler = () => {
    setShowMobileMenu((showMobileMenu) => !showMobileMenu);
  };
  return (
    <React.Fragment>
      {showMobileMenu && <MobileMenu />}
      <StyledNavbar>
        <ul>
          <img src={logo} alt="logo" />
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <button>Sign Up</button>
        </ul>
        <StyledHamburger onClick={showMobileMenuHandler}>
          <div></div>
        </StyledHamburger>
      </StyledNavbar>
    </React.Fragment>
  );
}

export default Navbar;
