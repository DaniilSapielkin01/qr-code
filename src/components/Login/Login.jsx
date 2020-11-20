import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import { Field, reduxForm } from "redux-form";
import stl from "./Login.module.css";

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const LoginForm = ({ handleSubmit }) => {
  return (
    <Grid container direction="row" justify="center">
      <div className={stl.loginCard}>
        <form>
          <Field name="login" label="Login" component={renderTextField} />
          <Field
            name="password"
            label="Password"
            component={renderTextField}
            type="password"
          />
        </form>
        <div className={stl.btn}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Sign in
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default reduxForm({
  form: "loginForm",
})(LoginForm);
