import React, {useState, useEffect} from 'react'

export default function AutoComplete() {

    const [allValues, setAllValues] = useState({
        search1: 'Poland',
        search2: 'Monako'
    });

    const onChange = (event) => {
      setValue(event.target.value);
    };


  return (
    <>
    <form>
  <label>
    AutoComplete Search
    <input type="text" name="search1" value={allValues.search1} />
    <input type="text" name="search2" value={allValues.search2} />
  </label>
  <input type="submit" value="Submit" />
</form>
    </>
  )
}
