import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import { compose } from "redux";

import "./App.css";
import { ScanContainer } from "./container/ScanContainer";
import { LoginContainer } from "./container/LoginContainer";
import { ResultContainer } from "./container/ResultContainer";

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Redirect from="/" to="/scan" />
        <Route path="/scan" render={() => <ScanContainer />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/result" render={() => <ResultContainer />} />
      </Container>
    </div>
  );
};

export default compose(withRouter)(App);
