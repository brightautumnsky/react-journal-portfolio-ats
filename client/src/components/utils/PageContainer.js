import React from "react";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  padding: 200px 0 100px;
  max-width: 1240px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    padding: 200px 50px 100px;
  }
  @media screen and (max-width: 767px) {
    padding: 200px 24px 100px;
  }
`;

function PageContainer({ children }) {
  return <StyledPageContainer>{children}</StyledPageContainer>;
}

export default PageContainer;
