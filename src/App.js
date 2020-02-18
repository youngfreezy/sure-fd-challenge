import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import "typeface-roboto";
import RatingInformationForm from "./components/RatingInformationForm/RatingInformationForm";
import QuoteInfo from "./components/QuoteInfo/QuoteInfo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);
  function addressReducer(addressState, { field, value }) {
    return { ...addressState, [field]: value };
  }

  const [addressState, dispatch] = useReducer(addressReducer, {});
  const [quote, setQuote] = useState({});
  const onChange = e => {
    dispatch({ field: e.target.id, value: e.target.value });
  };

  const handleSubmit = e => {
    let { first_name, last_name, ...address } = addressState;
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
        setQuote(res.quote);
        setLoading(false);
      })
      .catch(err => {
        setQuote({ err });
        setLoading(false);
      });
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <RatingInformationForm
              onChange={onChange}
              addressState={addressState}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/quote">
            {loading ? (
              <CircularProgress variant="determinate" value={progress} />
            ) : null}
            <QuoteInfo quote={quote} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
