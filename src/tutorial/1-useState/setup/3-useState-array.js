import React, {useState} from 'react';
import { data } from '../../../data';


    //Custom Method

    //Use State
const UseStateArray = () => {


    //Custom Method Start
    function removeItem(id)
    {
       let newPeople = people.filter((person) => person.id != id);
       setPeople(newPeople);
    }

    //Custom Method End

    const [people, setPeople] = useState(data)
    return (
        //Main
        <>
            {people.map((person) => {
                const {id, name} = person;



                return (
                    <div key={id} className={"item"}>
                        <h4>{name}</h4>
                    <button onClick={() => removeItem(id)}>Remove</button>
                    </div>
                );
            })}
            <button className={"btn"} onClick={() => setPeople([])}>Clear Item</button>
        </>
        //Main End
    )
}



//Main



export default UseStateArray;
