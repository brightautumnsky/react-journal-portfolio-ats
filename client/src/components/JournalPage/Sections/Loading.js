import React from "react";
import styled from "styled-components";

const StyedLoading = styled.div`
  max-width: 1000px;
  height: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Loading({ children }) {
  return <StyedLoading>{children}</StyedLoading>;
}

export default Loading;
