import React from "react";

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
  const regex = /[!@#$%^&*(),.?":;{}|<>]/g;
  const found = text.match(regex);
  return found && found.length > 0;
}
function checkForBlankFields(text) {
  return !text;
}
let errors = {
  specialCharacters: { msg: "Special Characters Are Not Allowed" },
  blank: { msg: "Please Enter A Value" },
  name: {},
  address: {}
};
export function checkForErrors(field, value) {
  errors.specialCharacters[field] = checkForSpecialCharacters(value);
  if (errors.specialCharacters[field] === false)
    delete errors.specialCharacters[field];
  if (requiredKeys.includes(field)) {
    errors.blank[field] = checkForBlankFields(value);
  }
  if (errors.blank[field] === false) delete errors.blank[field];
  return errors;
}

export function displayErrorMessages(field, formState, serverSideError) {
  errors = Object.assign(
    {},
    errors,
    formState.validationErrors,
    serverSideError && serverSideError.errors
  );
  return Object.keys(errors).map((error, i) => {
    if (errors[error][field]) {
      return (
        <div key={i} className="error-msg">
          {" "}
          <small>{errors[error].msg || errors[error][field]}</small>
        </div>
      );
    }
    return null;
  });
}

function clearServerSideErrorsFromForm(setQuote) {
  return setTimeout(() => {
    setQuote({});
  }, 2000);
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
  handleRatingInformationSubmit: (e, config, history) => {
    const { formState, setLoading, setQuote, dispatch, setSubmitted } = config;
    let { first_name, last_name, ...address } = formState;
    const request = { address, first_name, last_name };
    setLoading(true);
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
          clearFormValues(dispatch);
          setQuote(res.quote);
          setLoading(false);
          history.push("/quote-overview");
        }
      })
      .catch(err => {
        setQuote({ err });
        setLoading(false);
        setSubmitted(false);
        clearServerSideErrorsFromForm(setQuote);
      });
  }
};
