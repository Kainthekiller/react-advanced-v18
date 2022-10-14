import React, { useState } from 'react';

const UseStateObject = () => {
  //Use State
  const [person, setPerson] = useState(
      {
        name: "Peter",
        age: 24,
        message: "Random Message",
      }
  )
    const changeName = () =>
    {
        let newPerson = {name: "Billy", age: 22, message: "Blah"}
        setPerson({ age: newPerson.age, message: newPerson.message})


    }
  return (
    <>

        <h2>useState object example</h2>
        <div>
            <h4>name: {person.name} </h4>
              <h4>  age: {person.age}</h4>
               <h4> Message: {person.message}</h4>
        </div>
        <button className={"btn"} onClick={changeName} >Change The person</button>
    </>


  )


};

export default UseStateObject;

