export const requiredKeys = [
  "first_name",
  "last_name",
  "line_1",
  "city",
  "region",
  "postal"
];

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
  handleRatingInformationSubmit : (e, config) => {
    const {formState, setLoading, setQuote, dispatch} = config;
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
}
