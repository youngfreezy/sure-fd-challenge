import React from "react";

import {
  InputLabel,
  Input,
} from "@material-ui/core";

function FormField(props) {
  const id = props.label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="FormField">
      <InputLabel htmlFor="first-name-input">{props.label}</InputLabel>
      <Input id={id} />
    </div>
  );
}

export default FormField;
