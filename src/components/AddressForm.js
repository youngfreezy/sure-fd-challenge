import React from "react";

import { FormControl, InputLabel, Input } from "@material-ui/core";

function AddressForm({ onChange }) {
  return (
    <div className="Form">
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="line-1">Address</InputLabel>
          <Input id="line-1" type="text" onChange={onChange} />
        </div>
      </FormControl>

      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="line-2">Line 2</InputLabel>
          <Input id="line-2" type="text" onChange={onChange} />
        </div>
      </FormControl>
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="city">City</InputLabel>
          <Input id="city" type="text" onChange={onChange} />
        </div>
      </FormControl>
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="region">Region</InputLabel>
          <Input id="region" type="text" onChange={onChange} />
        </div>
      </FormControl>
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="postal">Postal</InputLabel>
          <Input id="postal" type="text" onChange={onChange} />
        </div>
      </FormControl>
    </div>
  );
}

export default AddressForm;
