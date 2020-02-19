import React from "react";

function QuoteError({ err }) {
  return (
    <div>
      <div>There was the following error(s) loading the quote: </div>

      <div>
        <pre>{JSON.stringify(err.errors, null, 4)}</pre>
      </div>
    </div>
  );
}

export default QuoteError;
