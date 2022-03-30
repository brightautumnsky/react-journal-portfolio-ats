import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
`;

function RegisterContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default RegisterContainer;
