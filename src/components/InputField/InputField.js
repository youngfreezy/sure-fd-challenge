import React from "react";
import "./InputField.css";

import { TextField } from "@material-ui/core";

function InputField({ label, id, onChange, error }) {
  return (
    <div className="input-field">
      <TextField id={id} onChange={onChange} label={label} />
    </div>
  );
}

export default InputField;
