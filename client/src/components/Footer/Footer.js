import React from "react";
import FooterContainer from "./sections/FooterContainer";
import Service from "./sections/Service";
import Notice from "./sections/Notice";

function Footer() {
  return (
    <FooterContainer>
      <h3>오늘의 일기</h3>
      <Service />
      <Notice />
    </FooterContainer>
  );
}

export default Footer;
