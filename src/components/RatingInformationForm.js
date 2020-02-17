import React, { useState } from "react";

import { FormControl, Button } from "@material-ui/core";
import AddressForm from "./AddressForm";
import FormField from "./FormField";

function RatingInformationForm() {
  //TODO: validation on inputs + Styling.
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState({});
  const buildAddressObject = e => {
    e.persist();
    setAddress(
      Object.assign({}, address, {
        [e.target.id]: e.target.value
      })
    );
  };

  const onChange = e => {
    e.persist();
    e.target.id === "first_name"
      ? setFirstName(e.target.value)
      : setLastName(e.target.value);
  };
  const handleSubmit = e => {
    //build the post request body here, send request to: https://fed-challenge-api.sure.now.sh/api/v1/quotes
    const request = {
      first_name,
      last_name,
      address
    };

    console.log(request, "the request");
  };
  return (
    <div className="Form">
      <FormControl>
        <FormField label="First Name" id="first_name" onChange={onChange} />
      </FormControl>
      <FormControl>
      <FormField label="Last Name" id="last_name" onChange={onChange} />
      </FormControl>
      <AddressForm address={address} onChange={buildAddressObject} />
      <Button type="submit" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default RatingInformationForm;
