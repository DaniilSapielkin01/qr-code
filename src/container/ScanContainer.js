import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { QRreader } from "../components/QR/QRreader";

export const ScanContainer = (props) => {
  const [keyScan, setKeyScan] = useState("");

  let key = localStorage.getItem("jwt");

  const handleScan = (data) => {
    if (data) {
      localStorage.setItem("jwtScan", btoa(data));
      let keyScan = localStorage.getItem("jwtScan");
      setKeyScan({ keyScan });
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  if (keyScan && key) {
    return <Redirect to={`/result?r=${keyScan.keyScan}`} />;
  } else {
    return (
      <>
        {!key ? (
          <Redirect to={`/login`} />
        ) : (
          <QRreader handleScan={handleScan} handleError={handleError} />
        )}
      </>
    );
  }
};
