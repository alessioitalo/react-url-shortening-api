import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  background-color: hsl(260, 8%, 14%);
  color: white;
  display: flex;
  height: 14rem;
  text-align: left;
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  @media (max-width: 1000px) {
    height: 100%;
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }

  & div div {
    display: flex;
    flex-direction: column;
  }

  & li {
    font-weight: 500;
    padding: 0.2em 0;
  }

  & a:hover {
    color: hsl(180, 66%, 49%);
  }

  & .foot-logo {
    filter: brightness(100);
  }

  &.icon:hover {
    color: hsl(180, 63%, 71%);
  }
`;

const StyledIconsContainer = styled.span`
  & a {
    margin: 0 0.5rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <img className="foot-logo" src={logo} alt="logo" />
        <div>
          <ul>
            <li>
              <strong>Features</strong>
            </li>
            <li>
              <a href="/">Link Shortening</a>
            </li>
            <li>
              <a href="/">Branded Links</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong>Resources</strong>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Developers</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <strong>Company</strong>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Our Team</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <StyledIconsContainer>
          <a href="/">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faPinterest} className="icon" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </StyledIconsContainer>
      </div>
    </StyledFooter>
  );
}

export default Footer;
