import React, { useState } from "react";
import isEmpty from "lodash/isEmpty";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function QuoteScreen({ quote }) {
  // TODO make sure thsi is a form, rename this component
  const [deductibleValue, setDeductibleValue] = useState("");
  const [collisionValue, setCollisionValue] = useState("");
  const handleChange = (event, title) => {
    if (title === "Deductible") {
      setDeductibleValue(event.target.value);
    } else {
      setCollisionValue(event.target.value);
    }
  };

  let variableOptions = [];
  if (quote && !isEmpty(quote.variable_options)) {
    const { deductible, asteroid_collision } = quote.variable_options;
    variableOptions = [deductible, asteroid_collision];
  }
  //I'm aware that this iteration with two maps is o^n squared
  //but since it's only two options I went with this approach
  return (
    <div className="QuoteScreen">
      {variableOptions.map((option, i) => {
        if (option) {
          return (
            <div key={i} className="quote-section">
              <div className={"option-row"}>{option.title}: </div>
              <div className={"option-row"}>{option.description}</div>

              <Select
                className={`select-option`}
                value={
                  option.title === "Deductible"
                    ? deductibleValue
                    : collisionValue
                }
                onChange={e => {
                  handleChange(e, option.title);
                }}
              >
                {option.values.map((item, i) => {
                  return (
                    <MenuItem value={item} key={i}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default QuoteScreen;
