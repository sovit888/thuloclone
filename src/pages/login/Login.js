import React from "react";
import { FormInputField } from "./FormField";
import logo from "../../assets/logo.png";

const Login = () => {
  return (
    <>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-head">
          <img src={logo} />
          <h3>Login to continue</h3>
        </div>

        <FormInputField type={"email"} name="email" label={"Email"} />
        <FormInputField
          type={"password"}
          name={"password"}
          label={"Password"}
        />
        <div className="forget-password">
          <a href={"#"}>Forget Password</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
