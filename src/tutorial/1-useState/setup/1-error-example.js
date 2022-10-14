import React, {useState} from 'react';
import { data } from '../../../data';

async function loadUsers()
{

}
//MAIN CLASS START
function ErrorExample()
{
    const [mydata, setData] = useState([])
    const apiGet = ()  => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((json) => {
console.log(json);
setData(json);
                }
            )

    }

   return (
       //MAIN START
       <>
       My API <br/>
           <button onClick={apiGet} className={"btn"}>Fetch API</button>
           <br/>
           <div>
           </div>
       </>
       //MAIN END
   )

} //MAIN CLASS END

export default ErrorExample;
