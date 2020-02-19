import React from "react";
import "./AddressForm.css";
import { FormControl } from "@material-ui/core";
import InputField from "../InputField/InputField";

function AddressForm({ onChange, addressState, submitted }) {
  return (
    <div className="address-form">
      <FormControl>
        <InputField
          label="Address"
          id="line_1"
          onChange={onChange}
          error={submitted && !addressState["line_1"]}
        />
      </FormControl>

      <FormControl>
        <InputField label="Line 2" id="line_2" onChange={onChange} />
      </FormControl>
      <FormControl>
        <InputField
          label="City"
          id="city"
          onChange={onChange}
          error={submitted && !addressState["city"]}
        />
      </FormControl>
      <FormControl>
        <InputField
          label="Region"
          id="region"
          onChange={onChange}
          error={submitted && !addressState["region"]}
        />
      </FormControl>
      <FormControl>
        <InputField
          label="Postal"
          id="postal"
          onChange={onChange}
          error={submitted && !addressState["postal"]}
        />
      </FormControl>
    </div>
  );
}

export default AddressForm;