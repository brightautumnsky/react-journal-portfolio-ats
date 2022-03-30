import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../_actions/user_action";
import { withRouter } from "react-router-dom";
import HeaderContainer from "./Sections/HeaderContainer";
import Scroll from "./Sections/Scroll.js";
import Title from "./Sections/Title";
import Navbar from "./Sections/Navbar";

function Header() {
  const [scroll, setScroll] = useState(false);
  document.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const dispatch = useDispatch();
  let user = useSelector((state) => state.userStore);

  const logoutHandler = () => {
    dispatch(userLogout()).then((response) => {
      if (!response.payload.logoutSuccess) {
        alert("로그아웃에 실패했습니다.");
      }
    });
  };

  return (
    <HeaderContainer>
      <Scroll scroll={scroll}>
        <Title user={user} logoutHandler={logoutHandler} />
      </Scroll>
      <Navbar />
    </HeaderContainer>
  );
}

export default withRouter(Header);
