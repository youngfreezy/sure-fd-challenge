import React, { useState } from "react";

import { FormControl, Button, InputLabel, Input } from "@material-ui/core";

function RatingInformationForm() {
  //TODO: validation on inputs + Styling.
  //do this dynamically
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postal, setPostal] = useState("");

  const handleSubmit = e => {
    //build the post request body here, send request to: https://fed-challenge-api.sure.now.sh/api/v1/quotes
    //keeping camel case variables. could have used object destructuring otherwise.
    const request = {
      first_name: firstName,
      last_name: lastName,
      address: {
        line_1: addressLineOne,
        line_2: addressLineTwo,
        city,
        region,
        postal,
      }
    };

    console.log(request, 'the request')
  };
  return (
    <div className="Form">
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="first-name-input">First Name</InputLabel>
          <Input
            id="first-name"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
      </FormControl>
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="last-name-input">Last Name</InputLabel>
          <Input
            id="last-name"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
      </FormControl>
     
     {/* pull the FormControls Below into a separate address form component */}
     
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="address-line-1">Address</InputLabel>
          <Input
            id="address-line-1"
            type="text"
            value={addressLineOne}
            onChange={e => setAddressLineOne(e.target.value)}
          />
        </div>
      </FormControl>

      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="address-line-2">Line 2</InputLabel>
          <Input
            id="address-line-2"
            type="text"
            value={addressLineTwo}
            onChange={e => setAddressLineTwo(e.target.value)}
          />
        </div>
      </FormControl>
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="city">City</InputLabel>
          <Input
            id="city"
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
      </FormControl>
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="region">Region</InputLabel>
          <Input
            id="region"
            type="text"
            value={region}
            onChange={e => setRegion(e.target.value)}
          />
        </div>
      </FormControl>
      <FormControl>
        <div className="FormField">
          <InputLabel htmlFor="postal">Postal</InputLabel>
          <Input
            id="postal"
            type="text"
            value={postal}
            onChange={e => setPostal(e.target.value)}
          />
        </div>
      </FormControl>
      <Button type="submit" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default RatingInformationForm;
