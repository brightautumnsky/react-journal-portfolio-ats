import React from "react";
import styled from "styled-components";
import Icon from "../../utils/Icon";
import getUrl from "../../../_functions/getUrl";

const StyledLike = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 16px;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  p {
    margin: 0;
    padding: 24px;
    text-align: justify;
    font-weight: 800;
  }
  p:nth-of-type(1) {
    flex: 1;
    background: #f8f9fc;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      background-color: pink;
      width: 10px;
      border-top-right-radius: 16px;
    }
    &::-webkit-scrollbar-thumb {
      background: #84ced1;
      border-top-right-radius: 16px;
    }
  }
  p:nth-of-type(2) {
    background: #84ced1;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    text-align: center;
  }
`;

const EmotionContainer = styled.div`
  background: #e4fbff;
  display: flex;
  justify-content: center;
  img {
    width: 50px;
  }
`;

function Like({ info }) {
  if (info === null) return <div></div>;

  return (
    info &&
    info.map((journal, index) => (
      <StyledLike key={index}>
        <p>{journal.journal}</p>
        <EmotionContainer>
          <img src={getUrl(journal.emotion)} alt="emotion" />
        </EmotionContainer>
        <p>
          {journal.year}.{journal.month}.{journal.date}
        </p>
      </StyledLike>
    ))
  );
}

export default Like;
