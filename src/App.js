import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import "typeface-roboto";
import RatingInformationForm from "./components/RatingInformationForm/RatingInformationForm";
import QuoteOverView from "./components/QuoteOverView/QuoteOverView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { checkForErrors } from "./utils/utils";
import { ApiUtil } from "./utils/utils";
import NavigationMenu from "./components/Menu/NavigationMenu";

function App() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function formReducer(formState, { field, value }) {
    const validationErrors = checkForErrors(field, value);
    return { ...formState, [field]: value, validationErrors };
  }

  const [formState, dispatch] = useReducer(formReducer, {});
  const [quote, setQuote] = useState({});
  const onChange = e => {
    dispatch({ field: e.target.id, value: e.target.value });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const handleSubmit = (e, history) => {
    const config = { formState, setLoading, setQuote, dispatch, setSubmitted };
    setSubmitted(true);
    return ApiUtil.handleRatingInformationSubmit(e, config, history);
  };

  return (
    <Router>
      <div className="App">
        <NavigationMenu submitted={submitted} />
        <Switch>
          <Route exact path="/rating-information">
            <RatingInformationForm
              onChange={onChange}
              formState={formState}
              handleSubmit={handleSubmit}
              loading={loading}
              serverSideError={quote}
            />
          </Route>
          <Route path="/quote-overview">
            <QuoteOverView quote={quote} loading={loading} />
          </Route>
        </Switch>
      </div>
      <Redirect exact from="/" to="rating-information" />
    </Router>
  );
}
export default App;
