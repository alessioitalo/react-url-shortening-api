import React, { useContext } from "react";
import Context from "../context";
import styled from "styled-components";

const StyledShortenedLink = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  margin: 1rem auto 0;
  text-align: left;
  word-break: break-all;

  & button {
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
  }

  & button::after {
    content: "Copy";
  }

  & button:focus {
    background-color: hsl(257, 27%, 26%);
    color: white;
    cursor: default;
    &::after {
      content: "Copied!";
    }
  }
  & .shortened-second {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: hsl(180, 66%, 49%);
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 90%;
    &.shortened-first {
      border-bottom: 1px solid black;
    }
    & .shortened-second {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    & button {
      margin: 0;
      width: 100%;
    }
  }
`;

function ShortenedLink() {
  const ctx = useContext(Context);

  return (
    <div>
      {ctx.data.map((storageItem) => {
        return (
          <StyledShortenedLink key={localStorage.getItem(storageItem)}>
            <div>
              <span className="shortened-first">
                {JSON.parse(localStorage.getItem(storageItem))[0]}
              </span>
            </div>
            <span className="shortened-second">
              {JSON.parse(localStorage.getItem(storageItem))[1]}
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    JSON.parse(localStorage.getItem(storageItem))[1]
                  )
                }
              />
            </span>
          </StyledShortenedLink>
        );
      })}
    </div>
  );
}

export default ShortenedLink;
