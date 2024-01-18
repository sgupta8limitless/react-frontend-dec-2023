import { Link } from "react-router-dom"
export default function Login()
{
    return (
        <section className="form-box">
                <form className="form">
                    <h1>Login To Become The Best Version</h1>

                    <input type="email" className="inp" placeholder="Enter Email"/>

                    <input type="password" className="inp" placeholder="Enter Password"/>

                
                    <button className="btn">Get In</button>

                    <p>Not Registered ? <Link to="/register" className="link">Create Account</Link></p>



                </form>
        </section>
    )
}