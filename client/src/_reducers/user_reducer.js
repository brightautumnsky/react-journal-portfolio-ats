function userReducer(state = {}, action) {
  switch (action.type) {
    case "USER_REGISTER":
      return { ...state, registerSuccess: action.payload };
    case "USER_LOGIN":
      return { ...state, loginSuccess: action.payload };
    case "USER_LOGOUT":
      return { ...state, logoutSuccess: action.payload };
    case "USER_AUTH":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}

export default userReducer;
