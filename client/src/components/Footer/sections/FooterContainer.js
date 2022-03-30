import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  padding: 24px 20%;
  height: 300px;
  background: rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
  font-weight: 400;
  span {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    height: 400px;
  }
`;

function FooterContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default FooterContainer;
