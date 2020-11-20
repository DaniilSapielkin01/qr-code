import React, { useState } from "react";
import { Redirect } from "react-router";

import LoginForm from "../components/Login/Login";

export const LoginContainer = (props) => {
  const [login, setLogin] = useState(false);

  const onSubmitInfo = (values) => {
    const { login, password } = values;
    if (login && password) {
      localStorage.setItem("jwt", btoa(`${login}":"${password}`));
      values.login = "";
      values.password = "";
      setLogin(true);
    }
  };
  return (
    <>
      {login ? (
        <Redirect to={"/scan"} />
      ) : (
        <div>
          <h3>Login</h3>
          <LoginForm onSubmit={onSubmitInfo} />
        </div>
      )}
    </>
  );
};
