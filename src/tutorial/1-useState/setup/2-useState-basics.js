import React, { useState } from 'react';

const UseStateBasics = () => {
  // USE STATE CREATION
  const[text, setText] = useState("Hello World");


  // Custom Functions
  const HandleClick = () =>
  {
    if (text === "Hello World")
    {
      setText("Timmy");
    }
    else {
      setText("Hello World");
    }
  }

  // Main
  return <div>
  <h2>useState basic example</h2>
    <h4>{text}</h4>
    <button className={"btn"} onClick={HandleClick}>Name Changer</button>
  </div>



};

export default UseStateBasics;
