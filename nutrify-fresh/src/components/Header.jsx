import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Header()
{

    const loggedData = useContext(UserContext);
    const navigate = useNavigate();

    function logout()
    {
        localStorage.removeItem("nutrify-user");
        loggedData.setLoggedUser(null);
        navigate("/login");

    }

    return (
        <div>

                <ul>
                    <li>Home</li>
                    <li onClick={logout}>Logout</li>
                </ul>


        </div>
    )
}