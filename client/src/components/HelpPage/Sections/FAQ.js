import React from "react";
import styled from "styled-components";

const StyledFaQ = styled.div`
  padding: 50px 0;
  h1 {
    padding-left: 100px;
    @media screen and (max-width: 766px) {
      padding-left: 0;
    }
  }
  ul {
    margin: 0 auto;
    width: 800px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 70px;
    li {
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 12px;
      &:hover {
        cursor: pointer;
        background: gray;
        color: white;
      }
    }
    @media screen and (max-width: 766px) {
      width: 400px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

function FAQ() {
  return (
    <StyledFaQ>
      <h1>FAQ</h1>
      <ul>
        <li>회원가입 오류</li>
        <li>로그인 오류</li>
        <li>일기 작성 오류</li>
        <li>다양한 감정 이모티콘</li>
        <li>아이디와 비밀번호 분실</li>
        <li>다양한 설정</li>
        <li>비밀번호 변경</li>
      </ul>
    </StyledFaQ>
  );
}

export default FAQ;
