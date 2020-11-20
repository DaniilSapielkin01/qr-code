import React, { useState } from "react";
import { Redirect } from "react-router";

import { Result } from "../components/Result /Result";

export const ResultContainer = (props) => {
  const [isLogout, setIsLogout] = useState(false);

  let keyInfo = atob(localStorage.getItem("jwt")).split('":"');
  let scanKey = atob(localStorage.getItem("jwtScan"));

  const handleClickLogout = () => {
    setIsLogout(true);
    localStorage.clear();
  };

  return (
    <>
      {isLogout ? (
        <Redirect to={"/login"} />
      ) : (
        <div>
          <Result
            keyInfo={keyInfo}
            scanKey={scanKey}
            logout={handleClickLogout}
          />
        </div>
      )}
    </>
  );
};
