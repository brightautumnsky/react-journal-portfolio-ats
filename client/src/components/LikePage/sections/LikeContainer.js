import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 150px 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-auto-rows: 350px;
  grid-gap: 0 20px;
  @media screen and (max-width: 1024px) {
    padding: 0;
    justify-content: center;
    grid-template-columns: repeat(3, 220px);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 200px);
    padding: 0 50px 0;
  }
`;

function LikeContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default LikeContainer;
