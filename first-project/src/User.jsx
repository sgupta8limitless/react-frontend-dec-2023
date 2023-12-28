import { useState } from "react";

function User(props)
{

    let [name,setName] = useState("Saurabh");

    let [age,setAge] = useState(29);

    // let name = "Saurabh";

    function changeName()
    {
        setName(props.name);
        
    }


    function changeAge()
    {
        setAge(props.age);
    }


    function doSomething(planet)
    {
        console.log("Hello "+planet);
    }


    return (
        <div className="user">
            <h1>{name}</h1>
            <h1>{age}</h1>

            <button onClick={changeName}>Change Name</button>
            <button onClick={changeAge}>Change Age</button>

            {/* <button onClick={doSomething.bind(this,"Mars")}>Do Something</button> */}

            <button onClick={()=>{
                doSomething("Mars");

            }}>Do Something</button>

        </div>
    )
}


export default User;