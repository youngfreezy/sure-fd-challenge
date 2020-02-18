import React from "react";

import { InputLabel, Input } from "@material-ui/core";

function FormField({ label, id, onChange }) {
  return (
    <div className="FormField">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} onChange={onChange} />
    </div>
  );
}

export default FormField;
