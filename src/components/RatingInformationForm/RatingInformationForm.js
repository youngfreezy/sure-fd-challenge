import React, { useState } from "react";
import { FormControl, Button } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import AddressForm from "../AddressForm/AddressForm";
import InputField from "../InputField/InputField";
import { useHistory } from "react-router-dom";
import "./RatingInformationForm.css";
import { hasAllRequiredProperties } from "../../utils/utils";

function RatingInformationForm({ onChange, addressState, handleSubmit }) {
  const history = useHistory();
  const [submitted, setSubmit] = useState(false);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setSubmit(true);
        if (hasAllRequiredProperties(addressState)) {
          handleSubmit(e);
          history.push("/quote-overview");
        }
      }}
    >
      <h5>Rating Information</h5>
      <div className="rating-form">
        <FormControl>
          <InputField
            label="First Name"
            id="first_name"
            onChange={onChange}
            error={submitted && !addressState["first_name"]}
          />
        </FormControl>
        <FormControl>
          <InputField
            label="Last Name"
            id="last_name"
            onChange={onChange}
            error={submitted && !addressState["last_name"]}
          />
        </FormControl>
        <AddressForm
          onChange={onChange}
          addressState={addressState}
          submitted={submitted}
        />
        <FormHelperText id="helper-text">
          We'll never share your personal information.
        </FormHelperText>
      </div>
      <Button id="submit" type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default RatingInformationForm;
