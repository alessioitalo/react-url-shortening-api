import React, { useContext, useState } from "react";
import styled from "styled-components";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import bgMobile from "../images/bg-shorten-mobile.svg";
import axios from "axios";
import Context from "../context";
import ShortenedLink from "./ShortenedLink";
import Loading from "./Loading";

const StyledContainer = styled.div`
  background: linear-gradient(white 20%, hsl(225, 33%, 95%) 20%);
  margin: 5rem 0 0;
`;

const StyledForm = styled.form`
  position: relative;
  padding: 3rem 1rem;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${bgDesktop});
  background-size: cover;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-image: url(${bgMobile});
  }

  & div{
    display: flex;
    justify-content: space-around;
    @media (max-width: 1000px){
      flex-direction: column;
    }
  }

  & input {
    width: 72%;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    padding: 0 2rem;
    box-shadow: ${(props) => (props.valid ? "none" : "inset 0 0 0 2px rgba(255,68,56,0.9)")};
    @media (max-width: 1000px) {
      width: 100%;
      margin-bottom: 0.5rem;
      padding: 0.5rem 2rem;
      font-size: 1.2rem;
    }
  }

  & input:focus-visible {
    outline: none;
  }

  & input:focus::placeholder {
    color: transparent;
  }

  & input::placeholder {
    color: ${(props) => (props.valid ? "hsl(257, 27%, 26%)" : "rgba(255,68,56,0.9)")};
  }

  & label {
    display: ${(props) => (props.valid ? "none" : "block")};
    position:relative;
    top: 0.5rem;
    padding: 0 2%;
    color: rgb(255,68,56);
    font-size: 1rem;
    text-align: left;
  }

  & button {
    height: 5rem;
    width: 20%;
    border-radius: 10px;
    font-size: 1.5rem;
    @media (max-width: 1000px) {
      width: 100%;
      height: auto;
      padding: 0.5rem 2rem;
      font-size: 1.2rem;
    }
  }
`;

function Shortener() {
  const ctx = useContext(Context);
  const [validInput, setValidInput] = useState(true);
  const inputUrlHandler = (e) => {
    ctx.setUrlHandler(e.target.value);
  };

  const validateFormHandler = (e) => {
    const expression =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'(\\*+,;=.]+$/;
    const regex = new RegExp(expression);
    setValidInput(regex.test(ctx.url));
  };

  const fetchShortenedUrl = async () => {
    validateFormHandler()
    ctx.setLoadingHandler(true);
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${ctx.url}`
      );
      const result = response.data.result.short_link;
      ctx.setLoadingHandler(false);
      localStorage[`data${ctx.counter + 1}`] = JSON.stringify([
        ctx.url,
        result,
      ]);
      ctx.setData(Object.keys(localStorage));
    } catch (error) {
      ctx.setLoadingHandler(false);
    }
  };

  const shortenerHandler = (e) => {
    e.preventDefault();
    fetchShortenedUrl();
  };

  return (
    <StyledContainer>
      <StyledForm
        valid={validInput}
        onSubmit={shortenerHandler}
        className="container"
        
      >
        <div>
          <input
            type="text"
            inputMode="url"
            placeholder="Shorten a link here..."
            onChange={inputUrlHandler}
            onBlur={validateFormHandler}
            onFocus={(validInput) => setValidInput(true)}
          />
          <button>Shorten It!</button>
        </div>
        <label>Please add a link.</label>
      </StyledForm>

      {ctx.loading && <Loading />}
      <ShortenedLink />
    </StyledContainer>
  );
}

export default Shortener;
