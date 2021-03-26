import { TextField } from "@material-ui/core";
import React from "react";

const FormInputField = ({ type, name, label }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <TextField
        type={type}
        id={name}
        name={name}
        variant={"outlined"}
        size="small"
        fullWidth
      />
    </div>
  );
};
FormInputField.defaultProps = {
  type: "text",
};

const PasswordField = ({ name, label }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <TextField
        type={show ? "text" : "password"}
        name={name}
        id={name}
        variant={"outlined"}
        fullWidth
      />
    </div>
  );
};

export { FormInputField, PasswordField };
