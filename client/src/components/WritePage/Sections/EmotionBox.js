import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Icon from "../../utils/Icon";
import getUrl from "../../../_functions/getUrl";

const EmotionBoxContainer = styled.div`
  margin: 36px 0;
  display: flex;
  gap: 0 16px;
  ${({ detailValue }) =>
    !detailValue &&
    css`
      & > * {
        cursor: pointer;
      }
    `}
`;

function EmotionBox({ refresh, detailValue }) {
  const emotions = ["Happy", "Joyful", "Fine", "Sad", "Angry"];
  const [emotion, setEmotion] = useState("");

  useEffect(() => {
    if (detailValue) {
      setEmotion(detailValue);
    }
  }, [detailValue]);

  const onClickHandler = (e) => {
    if (!detailValue) {
      // 이미지 경로에서 선택한 이모티콘의 emotion 얻기
      let target = e.target.src;
      const splitTarget = target.split("/");
      let checkedEmotion = splitTarget[5].split(".")[0];
      if (checkedEmotion !== "") {
        // 첫번째 알파벳을 대문자로 변환
        let emotionAlphabet = checkedEmotion.split("");
        let upper = emotionAlphabet[0].toUpperCase();
        emotionAlphabet.splice(0, 1, upper);
        const result = emotionAlphabet.join("");
        setEmotion(result);
        refresh(result, "emotion");
      }
    }
  };

  const getEmotionUrl = (emotion) => {
    let index = emotions.indexOf(emotion);
    let targetEmotion = emotions[index];
    return getUrl(targetEmotion);
  };

  return (
    <EmotionBoxContainer detailValue={detailValue}>
      {emotions.map((item, index) => (
        <Icon
          key={index}
          url={getEmotionUrl(item)}
          width="4.5"
          onClick={onClickHandler}
          check={item === emotion ? true : false}
          mobile
        />
      ))}
    </EmotionBoxContainer>
  );
}

export default EmotionBox;
