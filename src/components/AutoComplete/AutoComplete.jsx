import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import { Container } from "./AutoComplete.styles";

const COUNTRIES_LIST = "countries-list";
const VEGETABLES = "vegetables";

export default function AutoComplete() {
  const [currentCountry, setCurrentCountry] = useState("Poland");
  const [currentVegetable, setCurrentVegetable] = useState("Cabage");

  // create container with list of results
  // show this container only when there are any results
  // show results when input value is equal or bigger than 3 
  // * update box with result only after 3 seconds without typing - debouncing;
  // + use styled components for styling 

  const handleChange = (value, name) => {
    if (name === COUNTRIES_LIST) {
      setCurrentCountry(value);
    } else if (name === VEGETABLES) {
      setCurrentVegetable(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${currentVegetable} living in ${currentCountry}`);
  };

  return (
    <Container size={500}>
      <form onSubmit={handleSubmit}>
        <label>
          AutoComplete Search
          <InputText
            name={COUNTRIES_LIST}
            defaultValue={currentCountry}
            // onSubmit={handleSubmit}
            onChange={(value) => handleChange(value, COUNTRIES_LIST)}
          />
          <div></div>
          {/* <InputText
            name={VEGETABLES}
            defaultValue={currentVegetable}
            // onSubmit={handleSubmit}
            onChange={(value) => handleChange(value, VEGETABLES)}
          /> */}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
}
