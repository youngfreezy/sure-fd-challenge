import React, { useState } from "react";
// import mockQuote from "./mockQuote";
import QuoteOverViewHeader from "../QuoteOverViewHeader/QuoteOverViewHeader";
import QuoteOverViewVariableOptions from "../QuoteOverViewVariableOptions/QuoteOverViewVariableOptions";
import QuoteError from "../QuoteError/QuoteError";
function QuoteOverView({ quote }) {
  //for testing, uncomment to avoid submitting post request in previous screen
  // quote = mockQuote;
  // some fun things I could to extend functionaliity
  // save what the user entered in the form, as well as the quote info, and preserve it on back button/forward button press
  // unless of course user changes whats entered in the form

  const [makeChangesButtonClicked, setmakeChangesButtonClicked] = useState(
    false
  );

  const handleClick = () => {
    setmakeChangesButtonClicked(!makeChangesButtonClicked);
  };
  const quoteExists = quote.quoteId && !quote.err;
  
  //I'm aware that this iteration with two maps is o^n squared
  //but since it's only two options I went with this approach
  return (
    
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
  );
}

export default QuoteOverView;