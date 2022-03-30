import React from "react";
import styled, { css } from "styled-components";

const StyledInfoNotice = styled.div`
  margin-bottom: 100px;
  background: linear-gradient(40deg, #7f7fd5, #71eae4);
  p {
    color: white;
    line-height: 50px;
    font-weight: 800;
    text-align: center;
  }
`;

const StyledInformation = styled.div`
  text-align: center;
  @media screen and (max-width: 766px) {
    h2 {
      font-size: 22px;
    }
  }
`;

const HomeInfo = styled.div`
  padding: 0 24px;
  margin-bottom: 100px;
  h3 {
    width: fit-content;
    padding-bottom: 16px 0 6px;
    margin: 0 0 36px 16px;
    text-align: left;
    border-bottom: 2px solid black;
  }
`;

const EmotionInfo = styled.div`
  padding: 0 24px;
  margin-bottom: 100px;
  h3 {
    width: fit-content;
    padding-bottom: 16px 0 6px;
    margin: 0 0 36px 16px;
    text-align: left;
    border-bottom: 2px solid black;
  }
`;
const IconList = styled.div`
  padding: 36px 0;
  ${({ grid }) =>
    grid &&
    css`
      max-width: 700px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 20px;
      @media screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
      }
    `}
`;

const IconItem = styled.div`
  width: 430px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 70px;
  }
  ${({ grid }) =>
    grid &&
    css`
      width: 350px;
      justify-content: flex-start;
      gap: 0 20px;
      p {
        text-align: justify;
      }
    `}
  @media screen and (max-width: 766px) {
    flex-direction: column;
    width: 250px;
    font-size: 0.8rem;
    text-align: justify;
  }
`;

function Information() {
  return (
    <StyledInformation>
      <StyledInfoNotice>
        <p>처음 오셨나요?</p>
      </StyledInfoNotice>
      <h2>안녕하세요. 오늘의 일기입니다.</h2>
      <HomeInfo>
        <h3>오늘의 하루를 기록해보세요</h3>
        <IconList grid>
          <IconItem grid>
            <img src="/images/write-3.png" />
            <p>일기를 작성할 수 있어요.</p>
          </IconItem>
          <IconItem grid>
            <img src="/images/diary.png" />
            <p>기록한 일기를 볼 수 있어요.</p>
          </IconItem>
          <IconItem grid>
            <img src="/images/like.png" />
            <p>좋아요 표시한 일기를 볼 수 있어요.</p>
          </IconItem>
          <IconItem grid>
            <img src="images/setting.png" />
            <p>설정을 바꿀 수 있어요.</p>
          </IconItem>
        </IconList>
      </HomeInfo>
      <EmotionInfo>
        <h3>감정 이모티콘을 사용하세요</h3>
        <IconList>
          <IconItem>
            <img src="/images/emotions/happy.png" alt="happy" />
            <p>행복으로 가득한 기분 좋은 하루였습니다.</p>
          </IconItem>
          <IconItem>
            <img src="/images/emotions/joyful.png" alt="joyful" />
            <p>즐거운 일과 함께한 산뜻한 하루였습니다.</p>
          </IconItem>
          <IconItem>
            <img src="/images/emotions/fine.png" alt="fine" />
            <p>소소한 일상으로 채운 하루였습니다.</p>
          </IconItem>
          <IconItem>
            <img src="/images/emotions/sad.png" alt="sad" />
            <p>속상했던 하루였습니다. 내일은 괜찮을 거예요.</p>
          </IconItem>
          <IconItem>
            <img src="/images/emotions/angry.png" alt="angry" />
            <p>잘 안 풀린 하루였습니다. 금방 잊어버릴 거예요.</p>
          </IconItem>
        </IconList>
      </EmotionInfo>
    </StyledInformation>
  );
}

export default Information;
