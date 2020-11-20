import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import stl from "./Result.module.css";

export const Result = ({ keyInfo, scanKey, logout }) => {
  return (
    <div className={stl.card}>
      <div className={stl.cardInfo}>
        <div>
          <p>Login: </p>
          <p>Password: </p>
        </div>
        <div className={stl.cardInfoTitle}>
          {keyInfo.map((info) => (
            <div key={info}>
              <p>{info}</p>
            </div>
          ))}
        </div>
      </div>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <div className={stl.infoScan}>
          Link on QR:
          <a href={scanKey}>
            <h3>{scanKey}</h3>
          </a>
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={logout}>
            Logout in
          </Button>
        </div>
      </Grid>
    </div>
  );
};
