import React from "react";
import PageContainer from "../utils/PageContainer";
import WelcomeContainer from "./sections/WelcomeContainer";
import Button from "../utils/Button";

function WelcomePage() {
  return (
    <PageContainer>
      <WelcomeContainer>
        <h3>가입이 완료되었습니다. 감사합니다.</h3>
        <a href="/login">
          <Button color="#84ced1">
            <span>로그인</span>
          </Button>
        </a>
      </WelcomeContainer>
    </PageContainer>
  );
}

export default WelcomePage;
