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
  & > * {
    margin-bottom: 12px;
  }
`;

function InputBox({ foo, name, email, password, pc }) {
  return (
    <InputBoxContainer>
      <Input name="name" onChange={foo} value={name} placeholder="이름" />
      <Input
        name="email"
        onChange={foo}
        type="email"
        value={email}
        placeholder="이메일"
      />
      <Input
        name="password"
        onChange={foo}
        type="password"
        value={password}
        placeholder="비밀번호"
      />
      <Input
        onChange={foo}
        name="passwordConfirm"
        type="password"
        value={pc}
        placeholder="비밀번호 확인"
      />
    </InputBoxContainer>
  );
}

export default InputBox;
