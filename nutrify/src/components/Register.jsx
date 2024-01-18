import { useState } from "react"
import { Link } from "react-router-dom"
export default function Register()
{

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        age:""
    })


    function handleInput(event)
    {
        //collecting data from form feilds
        setUser((prevDetails)=>{
            return {...prevDetails,[event.target.name]:event.target.value}
        })
    }

    function handleSubmit(event)
    {
        //preventing refresh
        event.preventDefault();

        //calling the api for registration

        fetch("")
       
    }



    return (
        <section className="form-box">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Join Us For Fitness</h1>

                    <input type="text" required name="name"  className="inp" placeholder="Enter Name"
                    onChange={handleInput} value={user.name}/>

                    <input type="email" required name="email" className="inp" placeholder="Enter Email"
                    onChange={handleInput} value={user.email}/>

                    <input type="password" maxLength={8} name="password" className="inp" placeholder="Enter Password"
                    onChange={handleInput} value={user.password}/>

                    <input type="number" name="age" min={12} max={100} className="inp" placeholder="Enter Age"
                    onChange={handleInput} value={user.age}/>

                    <button className="btn">Register</button>

                    <p>Already Registered ? <Link to="/login" className="link">Login</Link></p>


                </form>
        </section>
    )
}