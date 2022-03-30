import React from "react";
import InputBox from "./InputBox";
import Button from "../../utils/Button";

function RegisterForm({ cf, sf, name, email, pw, pc }) {
  return (
    <form onSubmit={sf}>
      <InputBox name={name} email={email} password={pw} fc={pc} foo={cf} />
      <Button width="150" color="#84ced1" rounded="16">
        <span>회원가입</span>
      </Button>
    </form>
  );
}

export default RegisterForm;
