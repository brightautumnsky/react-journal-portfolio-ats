import React from "react";
import styled from "styled-components";
import Input from "../../utils/Input";

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 60px;
  h2 {
    color: #84ced1;
  }
  & > *:first-child {
    margin-bottom: 24px;
  }
`;

function InputBox({ foo, email, password }) {
  return (
    <InputBoxContainer>
      <Input
        name="email"
        color="#fafafa"
        onChange={foo}
        value={email}
        placeholder="이메일"
      />
      <Input
        name="password"
        color="#fafafa"
        onChange={foo}
        value={password}
        placeholder="비밀번호"
        type="password"
      />
      <a href="/register">회원가입</a>
    </InputBoxContainer>
  );
}

export default InputBox;
