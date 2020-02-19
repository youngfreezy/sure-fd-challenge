import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import get from "lodash/get";

import "./QuoteOverViewVariableOptions.css";
function QuoteOverViewVariableOptions({
  quote,
  makeChangesButtonClicked,
  handleClick
}) {
  const [deductibleValue, setDeductibleValue] = useState("");
  const [collisionValue, setCollisionValue] = useState("");
  const handleChange = (event, title) => {
    if (title === "Deductible") {
      setDeductibleValue(event.target.value);
    } else {
      setCollisionValue(event.target.value);
    }
  };

  return (
    <div>
      {!makeChangesButtonClicked && (
        <Button
          className="variable-selection-button"
          color="primary"
          onClick={handleClick}
        >
          Make Changes
        </Button>
      )}

      <div className="variable-options">
        {makeChangesButtonClicked &&
          Object.values(get(quote, "variable_options", {}))
            .map((option, i) => {
              if (option) {
                return (
                  <div key={i} className="variable-option">
                    <div className={"option-row"}>
                      {option.title}: {option.description}
                    </div>

                    <div className="select-text">
                      <i>Select a new option below: </i>
                    </div>
                    {/* TODO: put this into its own component */}
                    <Select
                      className={`select-option`}
                      value={
                        option.title === "Deductible"
                          ? deductibleValue || option.values[0]
                          : collisionValue || option.values[0]
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
      <div>
        {makeChangesButtonClicked && (
          <Button color="primary" onClick={handleClick}>
            Cancel Changes
          </Button>
        )}
      </div>
    </div>
  );
}

export default QuoteOverViewVariableOptions;
