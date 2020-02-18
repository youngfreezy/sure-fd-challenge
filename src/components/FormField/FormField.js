import React from "react";
import "./FormField.css";

import { InputLabel, Input } from "@material-ui/core";

function FormField({ label, id, onChange, error }) {
  return (
    <div className="form-field">
      <InputLabel error={error} htmlFor={id}>
        {label}
      </InputLabel>
      <Input id={id} onChange={onChange} />
    </div>
  );
}

export default FormField;