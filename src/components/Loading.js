import React from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const StyledLoading = styled.div`
  width: 80%;
  margin: auto;
`;

function Loading() {
  return (
    <StyledLoading>
      <Loader type="ThreeDots" color='hsl(257, 27%, 26%)' />
    </StyledLoading>
  );
}

export default Loading;
