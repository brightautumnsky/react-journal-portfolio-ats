import React from "react";
import styled from "styled-components";
import Input from "../../utils/Input";
import Button from "../../utils/Button";

const StyledHelp = styled.div`
  border-top: 1px solid gray;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  h1 {
    padding-left: 100px;
  }
  .submit {
    & > :last-child {
      margin-top: 50px;
    }
  }
  & > *:nth-child(2n-1) {
    margin-bottom: 12px;
  }
  @media screen and (max-width: 766px) {
    h1 {
      padding-left: 0;
    }
  }
`;

const StyledTextarea = styled.textarea`
  width: 500px;
  height: 300px;
  resize: none;
  border: none;
  background: lightgray;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 766px) {
    width: 350px;
  }
`;

function Help() {
  return (
    <div>
      <StyledHelp>
        <h1>1:1 문의</h1>
        <div className="submit">
          <p>이메일</p>
          <Input color="lightgray" width="300" />
          <p>카테고리</p>
          <Input color="lightgray" width="200" />
          <p>문의 내용</p>
          <StyledTextarea />
          <Button color="lightgray">제출</Button>
        </div>
      </StyledHelp>
    </div>
  );
}

export default Help;
