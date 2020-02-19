import React from "react";
import "./AddressForm.css";
import { FormControl } from "@material-ui/core";
import InputField from "../InputField/InputField";

function AddressForm({ onChange, formState, displayErrorMessages }) {
  return (
    <div className="address-form">
      <FormControl>
        <InputField label="Address*" id="line_1" onChange={onChange} />
        {displayErrorMessages("line_1", formState)}
      </FormControl>
      {}
      <FormControl>
        <InputField label="Line 2" id="line_2" onChange={onChange} />
        {displayErrorMessages("line_2", formState)}
      </FormControl>
      <FormControl>
        <InputField label="City*" id="city" onChange={onChange} />
        {displayErrorMessages("city", formState)}
      </FormControl>
      <FormControl>
        <InputField label="Region*" id="region" onChange={onChange} />
        {displayErrorMessages("region", formState)}
      </FormControl>
      <FormControl>
        <InputField label="Postal*" id="postal" onChange={onChange} />
        {displayErrorMessages("postal", formState)}
      </FormControl>
    </div>
  );
}

export default AddressForm;
