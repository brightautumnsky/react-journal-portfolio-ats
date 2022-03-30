import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 550px;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 30%);
  grid-auto-columns: 250px;
  grid-auto-rows: 250px;
  overflow-y: scroll;
  margin-bottom: 70px;
  &::-webkit-scrollbar {
    background-color: pink;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: #84ced1;
    border-radius: 12px;
  }
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 40%);
  }
  @media screen and (max-width: 766px) {
    grid-template-columns: repeat(1, 80%);
  }
`;

function JournalContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default JournalContainer;
