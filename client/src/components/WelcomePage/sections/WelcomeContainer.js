import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-weight: 800;
  }
`;

function WelcomeContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default WelcomeContainer;
