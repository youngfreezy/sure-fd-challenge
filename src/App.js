import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import "typeface-roboto";
import RatingInformationForm from "./components/RatingInformationForm/RatingInformationForm";
import QuoteOverView from "./components/QuoteOverView/QuoteOverView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { ApiUtil } from "./utils/utils";

function App() {
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function formReducer(formState, { field, value }) {
    return { ...formState, [field]: value };
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

  const handleSubmit = e => {
    const config = { formState, setLoading, setQuote, dispatch };
    setHasSubmitted(true)
    return ApiUtil.handleRatingInformationSubmit(e, config);
  };
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/rating-information">Rating Information</Link>
          </li>
          { hasSubmitted &&
          <li>
            <Link to="/quote-overview">Quote OverView</Link>
          </li>}
        </ul>

        <hr />
        <Switch>
          <Route exact path="/rating-information">
            <RatingInformationForm
              onChange={onChange}
              formState={formState}
              handleSubmit={handleSubmit}
              loading={loading}
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
