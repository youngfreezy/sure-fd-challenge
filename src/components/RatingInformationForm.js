import React, { useReducer } from "react";

import { FormControl, Button } from "@material-ui/core";
import AddressForm from "./AddressForm";
import FormField from "./FormField";

function RatingInformationForm() {
  //TODO: validation on inputs + Styling.
  function reducer(state, { field, value }) {
    return { ...state, [field]: value };
  }
  const [state, dispatch] = useReducer(reducer, {});
  const onChange = e => {
    dispatch({ field: e.target.id, value: e.target.value });
  };

  const handleSubmit = e => {
    let { first_name, last_name, ...address } = state;
    const request = { address, first_name, last_name };
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
    <div className="RatingInformationForm">
      <FormControl>
        <FormField label="First Name" id="first_name" onChange={onChange} />
      </FormControl>
      <FormControl>
        <FormField label="Last Name" id="last_name" onChange={onChange} />
      </FormControl>
      <AddressForm onChange={onChange} addressState={state} />
      <Button type="submit" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default RatingInformationForm;
