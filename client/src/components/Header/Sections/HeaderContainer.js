import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12%;
  box-sizing: border-box;
  z-index: 77;
`;

function HeaderContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default HeaderContainer;
