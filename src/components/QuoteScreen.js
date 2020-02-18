import React from "react";

function QuoteScreen({quote}) {
  return (
    <div className="QuoteScreen">
      <pre>{JSON.stringify(quote, null, 2) }</pre>
    </div>
  );
}

export default QuoteScreen;
