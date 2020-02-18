import React from "react";

import { FormControl } from "@material-ui/core";
import FormField from "./FormField";

function AddressForm({ onChange, addressState, submitted }) {
  return (
    <div className="AddressForm">
      <FormControl>
        <FormField
          label="Address"
          id="line_1"
          onChange={onChange}
          error={submitted && !addressState["line_1"]}
        />
      </FormControl>

      <FormControl>
        <FormField label="Line 2" id="line_2" onChange={onChange} />
      </FormControl>
      <FormControl>
        <FormField
          label="City"
          id="city"
          onChange={onChange}
          error={submitted && !addressState["city"]}
        />
      </FormControl>
      <FormControl>
        <FormField
          label="Region"
          id="region"
          onChange={onChange}
          error={submitted && !addressState["region"]}
        />
      </FormControl>
      <FormControl>
        <FormField
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
