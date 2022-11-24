import React, {useState} from 'react'

export default function AutoComplete() {

    const value = useState("Poland");
  return (
    <>
    <div>AutoComplete</div>
    <p>{value}</p>
    </>
  )
}
