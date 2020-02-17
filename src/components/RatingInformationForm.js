import React, { useState, useReducer } from "react";

import { FormControl, Button } from "@material-ui/core";
import AddressForm from "./AddressForm";
import FormField from "./FormField";

function RatingInformationForm() {
  //TODO: validation on inputs + Styling.
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  function addressReducer(state, { field, value }) {
    return { ...state, [field]: value };
  }
  const [addressState, dispatch] = useReducer(addressReducer, {});
  const onAddressChange = e => {
    dispatch({ field: e.target.id, value: e.target.value });
  };

  const onChange = e => {
    e.persist();
    e.target.id === "first_name"
      ? setFirstName(e.target.value)
      : setLastName(e.target.value);
  };
  const handleSubmit = e => {
    const request = {
      first_name,
      last_name,
      address: addressState
    };

    fetch("https://fed-challenge-api.sure.now.sh/api/v1/quotes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    })
      .then(response => response.json())
      .then(res => {
        console.log(res, "the post response");
      })
      .catch(err => {
        console.log(err, "the error");
      });
  };

  return (
    <div className="Form">
      <FormControl>
        <FormField label="First Name" id="first_name" onChange={onChange} />
      </FormControl>
      <FormControl>
        <FormField label="Last Name" id="last_name" onChange={onChange} />
      </FormControl>
      <AddressForm onChange={onAddressChange} addressState={addressState} />
      <Button type="submit" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default RatingInformationForm;
