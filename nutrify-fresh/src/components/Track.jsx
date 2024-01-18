import { Link } from "react-router-dom";
import Header from "./Header";

export default function Track()
{
    return (
        <>
        <h1>Welcome You are logged In</h1>
        <Link to="/demo">Demo</Link>
        <Header/>
        </>
    )
}