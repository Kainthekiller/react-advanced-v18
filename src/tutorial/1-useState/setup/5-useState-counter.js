import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  //Custom Method
  function counterPlusPlus()
  {
    setValue(value  + 1);
  }
  function counterReset()
  {
    setValue(0);
  }
  function counterMinusMinus()
  {
    setValue(value - 1);
  }

  //Main Start
  return (
      <>
        <h2>useState counter example</h2>
        <section style={{margin: '4rem 0'}}>
        <h2>Regular Counter</h2>
          <h1>{value}</h1>
          <div>
            <button onClick={counterPlusPlus} className={"btn"}>Increase</button>
            <button onClick={counterReset} className={"btn"}>Reset</button>
            <button onClick={counterMinusMinus} className={"btn"}>Decrease</button>
          </div>
        </section>
      </>
  )
};

export default UseStateCounter;
