import axios from "axios";

export function userRegister(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);
  return {
    type: "USER_REGISTER",
    payload: request,
  };
}

export function userLogin(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: "USER_LOGIN",
    payload: request,
  };
}

export function userLogout() {
  const request = axios
    .get("/api/users/logout")
    .then((response) => response.data);
  return {
    type: "USER_LOGOUT",
    payload: request,
  };
}

export function userAuth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);
  return {
    type: "USER_AUTH",
    payload: request,
  };
}
