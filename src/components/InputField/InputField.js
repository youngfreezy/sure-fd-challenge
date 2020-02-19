import React from "react";
import "./InputField.css";

import { InputLabel, Input } from "@material-ui/core";

function InputField({ label, id, onChange, error }) {
  return (
    <div className="input-field">
      <InputLabel error={error} htmlFor={id}>
        {label}
      </InputLabel>
      <Input id={id} onChange={onChange} />
    </div>
  );
}

export default InputField;
