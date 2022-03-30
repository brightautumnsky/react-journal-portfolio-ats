import React from "react";
import styled from "styled-components";
import EmotionBox from "./EmotionBox";
import DateBox from "./DateBox";
import Button from "../../utils/Button";
import Textarea from "./Textarea";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 1% 7%;
  box-sizing: border-box;
`;

function WriteForm({ sf, rf }) {
  return (
    <StyledForm onSubmit={sf}>
      <DateBox refresh={rf} />
      <EmotionBox refresh={rf} />
      <Textarea refresh={rf} />
      <Button color="#84ced1">
        <span>등록</span>
      </Button>
    </StyledForm>
  );
}

export default WriteForm;
