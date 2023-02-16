import React, { useState, useCallback, useEffect } from "react";
import InputText from "./InputText";
import { Container } from "./AutoComplete.styles";
import data from "./Suggestions.jsx";
import debounce from "lodash.debounce";
//import { uuid } from 'uuidv4';


const COUNTRIES_LIST = "countries-list";

export default function AutoComplete() {
  let [currentCountry, setCurrentCountry] = useState("");

  // create container with list of results
  // show this container only when there are any results
  // show results when input value is equal or bigger than 3 
  // * update box with result only after 3 seconds without typing - debouncing;
  // + use styled components for styling 

  const handleChange = (value, name) => {
    if (name === COUNTRIES_LIST) {
      console.log('handle')
      setCurrentCountry(value);
    }
  };
  const debouncedChangeHandler = useCallback(
    debounce(handleChange, 1000)
  , []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Looking for  ${currentCountry}`);
  };
  const handleOption = (e) =>{
    console.log(`2Looking for  ${currentCountry}`);
    console.dir(e);
  }

  return (
    <Container size={500}>
      <form onSubmit={handleSubmit}>
        <label>
          AutoComplete Search
          <InputText
            name={COUNTRIES_LIST}
            defaultValue={currentCountry}
            onSubmit={handleSubmit}
            onChange={(value) => debouncedChangeHandler(value, COUNTRIES_LIST)}
          />
          <div className="dropdown">
            {data.filter(item => {
              const searchTerm = currentCountry.toLowerCase();
              const country = item.toLowerCase();
              return country.startsWith(searchTerm) && (searchTerm.length > 2)
            })
            .map((item)=> (
            <div onClick={() => handleOption(item)} className="dropdown-row">{item}</div>
            ))}
            </div>

        </label>
        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
}
