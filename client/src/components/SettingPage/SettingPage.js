import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUpdate } from "../../_actions/settings_action";
import PageContainer from "../utils/PageContainer";
import Button from "../utils/Button";

const SettingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  padding: 24px;
  box-sizing: border-box;
  h2 {
    color: #84ced1;
    margin-bottom: 0;
  }
  p {
    color: black;
    font-weight: 600;
  }
  span {
    font-weight: 600;
  }
`;

const ColorBox = styled.div`
  p {
    display: inline-block;
    margin-right: 12px;
    cursor: pointer;
  }
`;

const FontSizeBox = styled.div`
  p {
    display: inline-block;
    margin-right: 12px;
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

function SettingPage(props) {
  const [setting, setSetting] = useState({});
  const dispatch = useDispatch();

  const onClick = (e) => {
    const { className, dataset } = e.target;
    const value = dataset[className];
    setSetting({ ...setting, [className]: value });
  };

  const submitHandler = () => {
    let body = setting;

    dispatch(setUpdate(body)).then((response) => {
      if (!response.payload.success) {
        alert("설정 업데이트에 실패했습니다.");
      }
    });
  };

  return (
    <PageContainer>
      <SettingContainer>
        <h2>배경색</h2>
        <ColorBox>
          <p className="background" data-background="#fafafa" onClick={onClick}>
            회색
          </p>
          <p className="background" data-background="beige" onClick={onClick}>
            베이지색
          </p>
          <p className="background" data-background="pink" onClick={onClick}>
            분홍색
          </p>
        </ColorBox>
        <h2>폰트 크기</h2>
        <FontSizeBox>
          <p className="fontsize" data-fontsize="0.8" onClick={onClick}>
            작게
          </p>
          <p className="fontsize" data-fontsize="1" onClick={onClick}>
            중간
          </p>
          <p className="fontsize" data-fontsize="1.2" onClick={onClick}>
            크게
          </p>
        </FontSizeBox>
        <a href="/">
          <Button color="#84ced1" onClick={submitHandler}>
            <span>저장</span>
          </Button>
        </a>
      </SettingContainer>
    </PageContainer>
  );
}

export default SettingPage;
