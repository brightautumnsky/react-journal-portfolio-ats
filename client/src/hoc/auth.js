import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../_actions/user_action";

function authHoc(SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.useStore);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(userAuth()).then((response) => {
        // 로그아웃 상태
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, [dispatch, props.history]);
    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}

export default authHoc;
