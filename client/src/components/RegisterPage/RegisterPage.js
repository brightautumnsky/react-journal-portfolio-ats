import React from "react";
import useInputs from "../../_hooks/useInputs";
import { useDispatch } from "react-redux";
import { userRegister } from "../../_actions/user_action";
import PageContainer from "../utils/PageContainer";
import RegisterContainer from "./sections/RegisterContainer";
import RegisterLogo from "./sections/RegisterLogo";
import RegisterForm from "./sections/RegisterForm";

const initialRegisterState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

function RegisterPage(props) {
  const [inputs, onChange] = useInputs(initialRegisterState);
  const { name, email, password, passwordConfirm } = inputs;
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !passwordConfirm) {
      alert("모든 항목을 입력해주세요.");
      return;
    } else {
      if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      let body = {
        name,
        email,
        password,
      };

      dispatch(userRegister(body)).then((response) => {
        if (response.payload.success) {
          props.history.push("/welcome");
        } else {
          alert("회원가입에 실패했습니다.");
        }
      });
    }
  };

  return (
    <PageContainer>
      <RegisterContainer>
        <RegisterLogo />
        <RegisterForm
          name={name}
          email={email}
          pw={password}
          pw={password}
          pc={passwordConfirm}
          cf={onChange}
          sf={onSubmitHandler}
        />
      </RegisterContainer>
    </PageContainer>
  );
}

export default RegisterPage;
