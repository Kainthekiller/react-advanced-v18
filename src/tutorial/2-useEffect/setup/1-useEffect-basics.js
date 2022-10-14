import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
 const [value, setValue] = useState(0);
  //Custom Methods
  function increaseValue()
  {
    setValue(value + 1)
  }
  useEffect(() =>{
    console.log("Call useEffect")
    document.title = `New Message(${value})`
  });
  console.log("Render Component")

  //Main
  return (
      <>
        <h2>useEffect Basics</h2>
        <h4>{value}</h4>
        <button className={"btn"} onClick={increaseValue}>
          Increase Button
        </button>
      </>
  )
};

export default UseEffectBasics;
