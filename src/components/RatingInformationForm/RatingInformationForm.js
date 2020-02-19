import React, { useState, useEffect } from "react";
import { FormControl, Button } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import AddressForm from "../AddressForm/AddressForm";
import InputField from "../InputField/InputField";
import { useHistory } from "react-router-dom";
import "./RatingInformationForm.css";
import { hasAllRequiredProperties } from "../../utils/utils";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function RatingInformationForm({ onChange, formState, handleSubmit, loading }) {
  const history = useHistory();
  const [submitted, setSubmit] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (hasAllRequiredProperties(formState)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formState]);
  
  return (
    <div>
      {loading && <LoadingSpinner />}

      <form
        onSubmit={e => {
          e.preventDefault();
          setSubmit(true);
          handleSubmit(e);
          history.push("/quote-overview");
        }}
      >
        <h5>Rating Information</h5>
        <div className="rating-form">
          <FormControl>
            <InputField
              label="First Name"
              id="first_name"
              onChange={onChange}
              error={submitted && !formState["first_name"]}
            />
          </FormControl>
          <FormControl>
            <InputField
              label="Last Name"
              id="last_name"
              onChange={onChange}
              error={submitted && !formState["last_name"]}
            />
          </FormControl>
          <AddressForm
            onChange={onChange}
            formState={formState}
            submitted={submitted}
          />
          <FormHelperText id="helper-text">
            We'll never share your personal information.
          </FormHelperText>
        </div>
        <Button id="submit" type="submit" color="primary" disabled={disabled}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default RatingInformationForm;
