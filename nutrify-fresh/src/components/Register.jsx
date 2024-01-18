import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Register()
{
        const [userDetails,setUserDetails] = useState({
            name:"",
            email:"",
            password:"",
            age:""
        })

        const [message,setMessage] = useState({
            type:"invisible-msg",
            text:"Dummy Msg"
        })

       


        function handleInput(event)
        {
            
            setUserDetails((prevState)=>{

                return {...prevState,[event.target.name]:event.target.value};

            })
           
        }

        function handleSubmit(event)
        {
            event.preventDefault();
            // console.log(userDetails);

            fetch("http://localhost:8000/register",{
                method:"POST",
                body:JSON.stringify(userDetails),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((response)=>response.json())
            .then((data)=>{
               
                setMessage({type:"success",text:data.message});

                setUserDetails({
                    name:"",
                    email:"",
                    password:"",
                    age:""
                })

                setTimeout(()=>{
                    setMessage({type:"invisible-msg",text:"Dummy sg"});
                },5000)





            })
            .catch((err)=>{
                console.log(err);
            })
            



        }

       
    return (
        <section className="container">

            <form className="form" onSubmit={handleSubmit}>

                <h1>Start Your Fitness</h1>

                <input className="inp" type="text" required onChange={handleInput}
                placeholder="Enter Name" name="name" value={userDetails.name}/>

                <input className="inp" type="email" required onChange={handleInput} 
                placeholder="Enter Email" name="email" value={userDetails.email}/>

                <input className="inp" type="password" required maxLength={8} onChange={handleInput} 
                placeholder="Enter Password" name="password" value={userDetails.password}/>

                <input className="inp" max={100} min={12} type="number" onChange={handleInput}
                placeholder="Enter Age" name="age" value={userDetails.age}/>

                <button className="btn">Join</button>

               

                <p>Already Registered ?  <Link to="/login">Login</Link> </p>

                <p className={message.type}>{message.text}</p>

            </form>


          

           

        </section>
    )
}