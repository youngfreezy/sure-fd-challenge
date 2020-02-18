import React, { useState } from "react";
import { FormControl, Button } from "@material-ui/core";
import AddressForm from "../AddressForm/AddressForm";
import FormField from "../FormField/FormField";
import { useHistory } from "react-router-dom";
import "./RatingInformationForm.css";

function RatingInformationForm({ onChange, addressState, handleSubmit }) {
  //deploy
  const history = useHistory();
  const [submitted, setSubmit] = useState(false);
  const hasAllRequiredProperties = () => {
    let requiredKeys = [
      "first_name",
      "last_name",
      "line_1",
      "city",
      "region",
      "postal"
    ];
    for (var i = 0; i < requiredKeys.length; i++) {
      if (!addressState[requiredKeys[i]]) {
        return false;
      }
    }
    return true;
  };
  return (
    <div className="RatingInformationForm">
      <div className="name-row">
        <FormControl>
          <FormField
            label="First Name"
            id="first_name"
            onChange={onChange}
            error={submitted && !addressState["first_name"]}
          />
        </FormControl>
        <FormControl>
          <FormField
            label="Last Name"
            id="last_name"
            onChange={onChange}
            error={submitted && !addressState["last_name"]}
          />
        </FormControl>
      </div>
      <div className="address-row">
        <AddressForm
          onChange={onChange}
          addressState={addressState}
          submitted={submitted}
        />
      </div>
      <Button
        id="submit"
        type="submit"
        color="primary"
        onClick={e => {
          setSubmit(true);
          if (hasAllRequiredProperties()) {
            handleSubmit(e);
            history.push("/quote");
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default RatingInformationForm;
