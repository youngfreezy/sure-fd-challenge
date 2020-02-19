import React from "react";
import get from "lodash/get";
export const requiredKeys = [
  "first_name",
  "last_name",
  "line_1",
  "city",
  "region",
  "postal"
];

export const menuItems = [
  { link: "/rating-information", text: "Rating Information" },
  { link: "/quote-overview", text: "Quote Overview", showIfSubmitted: true }
];

export function checkForSpecialCharacters(text) {
  const regex = /[!@#$%^&*(),.?":{}|<>]/g;
  const found = text.match(regex);
  return found && found.length > 0;
}

export function checkForErrors(field, value) {
  let errors = { specialCharacters: {}, blank: {} };
  if (checkForSpecialCharacters(value)) {
    errors.specialCharacters[field] = true;
  }
  if (value === "") {
    errors.blank[field] = true;
  }
  return errors;
}

export function displayErrorMessages(field, formState) {
  if (get(formState, `validationErrors.specialCharacters[${field}]`)) {
    return (
      <div class="error-msg">
        {" "}
        <small>Special Characters Are Not Allowed</small>
      </div>
    );
  }
  if (get(formState, `validationErrors.blank[${field}]`) && requiredKeys.includes(field)) {
    return (
      <div class="error-msg">
        {" "}
        <small>Please Enter A Value</small>
      </div>
    );
  }
  return null;
}

export const allKeys = requiredKeys.concat(["line_2"]);

export function hasAllRequiredProperties(formState) {
  for (var i = 0; i < requiredKeys.length; i++) {
    if (!formState[requiredKeys[i]]) {
      return false;
    }
  }
  return true;
}

export function clearFormValues(dispatch) {
  allKeys.forEach(key => {
    dispatch({
      field: key,
      value: ""
    });
  });
}
//in the real world this would be in a separate file. leaving it here for now.
export const ApiUtil = {
  handleRatingInformationSubmit: (e, config) => {
    const { formState, setLoading, setQuote, dispatch } = config;
    let { first_name, last_name, ...address } = formState;
    const request = { address, first_name, last_name };
    setLoading(true);
    clearFormValues(dispatch);
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
        if (!res.quote) {
          throw res;
        } else {
          setQuote(res.quote);
          setLoading(false);
        }
      })
      .catch(err => {
        setQuote({ err });
        setLoading(false);
      });
  }
};
