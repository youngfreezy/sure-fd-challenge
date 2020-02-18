import React from "react";
import { FormControl, Button } from "@material-ui/core";
import AddressForm from "./AddressForm";
import FormField from "./FormField";
import { useHistory } from "react-router-dom";
function RatingInformationForm({ onChange, addressState, handleSubmit }) {
  //TODO: validation on inputs + Styling.
  //DEPLOY
  const history = useHistory();
  return (
    <div className="RatingInformationForm">
      <div className="name-row">
        <FormControl>
          <FormField label="First Name" id="first_name" onChange={onChange} />
        </FormControl>
        <FormControl>
          <FormField label="Last Name" id="last_name" onChange={onChange} />
        </FormControl>
      </div>
      <div className="address-row">
        <AddressForm onChange={onChange} addressState={addressState} />
      </div>
      <Button
        id="submit"
        type="submit"
        color="primary"
        onClick={e => {
          handleSubmit(e);
          history.push("/quote");
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default RatingInformationForm;
