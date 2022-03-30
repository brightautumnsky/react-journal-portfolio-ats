import React from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../_actions/user_action";
import useInputs from "../../_hooks/useInputs";
import PageContainer from "../utils/PageContainer";
import LoginContainer from "./sections/LoginContainer";
import LogoBox from "./sections/LogoBox";
import InputBox from "./sections/InputBox";
import Button from "../utils/Button";

const initialLoginState = {
  email: "",
  password: "",
};

function LoginPage(props) {
  const [inputs, onChange] = useInputs(initialLoginState);
  const { email, password } = inputs;
  const dispatch = useDispatch();

  const onLoginBtnHandler = () => {
    const body = {
      email,
      password,
    };

    dispatch(userLogin(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인을 실패했습니다");
      }
    });
  };

  return (
    <PageContainer>
      <LoginContainer>
        <LogoBox />
        <InputBox foo={onChange} email={email} password={password} />
        <Button
          onClick={onLoginBtnHandler}
          width="150"
          color="#84ced1"
          rounded="16"
        >
          <span>로그인</span>
        </Button>
      </LoginContainer>
    </PageContainer>
  );
}

export default LoginPage;
