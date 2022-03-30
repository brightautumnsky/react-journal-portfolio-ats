import React from "react";
import styled from "styled-components";
import Button from "../../utils/Button";
import getUrl from "../../../_functions/getUrl";

const EmotionSection = styled.div`
  height: fit-content;
  box-sizing: border-box;
  margin-bottom: 150px;
  h3 {
    text-align: center;
  }
`;

const EmotionList = styled.div`
  margin-top: 36px;
  width: 700px;
  margin: 0 auto;
  display: flex;
  gap: 0 24px;
  flex-wrap: wrap;
  justify-content: center;
  p {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  a {
    font-weight: 700;
    color: #fff;
  }
`;

const StyledEmotion = styled.div`
  img {
    width: 100px;
  }
`;

function Emotion({ info }) {
  return (
    <EmotionSection>
      <h3>최근에 누른 감정 이모티콘</h3>
      <EmotionList>
        {info &&
          info.map((journal, index) =>
            index < 6 ? (
              <StyledEmotion key={index}>
                <img src={getUrl(journal.emotion)} alt={journal.emotion} />
                <p>
                  {journal.year}년 {journal.month}월 {journal.date}일
                </p>
              </StyledEmotion>
            ) : null
          )}
      </EmotionList>
      <ButtonContainer>
        <Button color="#84ced1">
          <a href="/journal/like">더보기</a>
        </Button>
      </ButtonContainer>
    </EmotionSection>
  );
}

export default Emotion;
