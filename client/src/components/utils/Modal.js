import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 350px;
  height: 170px;
  border-radius: 24px;
  background: #fafafa;
  color: #84ced1;
  padding: 12px 24px;
  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0 12px;
  justify-content: flex-end;
`;

function Modal({ title, action, onCancelHandler, onClick }) {
  return (
    <ModalContainer>
      <ModalBox>
        <h2>{title}</h2>
        <ButtonBox>
          <Button
            rounded="6"
            width="20px"
            color="pink"
            onClick={onCancelHandler}
          >
            취소
          </Button>
          <Button rounded="6" width="20px" color="pink" onClick={onClick}>
            {action}
          </Button>
        </ButtonBox>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
