import React, { useState } from "react";
// import mockQuote from "./mockQuote";
import QuoteOverViewHeader from "../QuoteOverViewHeader/QuoteOverViewHeader";
import QuoteOverViewVariableOptions from "../QuoteOverViewVariableOptions/QuoteOverViewVariableOptions";
import QuoteError from "../QuoteError/QuoteError";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
function QuoteOverView({ quote, loading }) {
  //for testing, uncomment to avoid submitting post request in previous screen
  // quote = mockQuote;
  const [makeChangesButtonClicked, setmakeChangesButtonClicked] = useState(
    false
  );

  const handleClick = () => {
    setmakeChangesButtonClicked(!makeChangesButtonClicked);
  };
  const quoteExists = quote.quoteId && !quote.err;
  return (
    <div>
      {loading && <LoadingSpinner />}
      <form
        onSubmit={e => {
          e.preventDefault();
          //TBD
        }}
      >
        <h5>Quote Overview</h5>
        {!quoteExists && quote.err && <QuoteError err={quote.err} />}
        {quoteExists && <QuoteOverViewHeader quote={quote} />}
        {quoteExists && (
          <QuoteOverViewVariableOptions
            quote={quote}
            makeChangesButtonClicked={makeChangesButtonClicked}
            handleClick={handleClick}
          />
        )}
      </form>
    </div>
  );
}

export default QuoteOverView;
