import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
`;

function LoginContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default LoginContainer;
