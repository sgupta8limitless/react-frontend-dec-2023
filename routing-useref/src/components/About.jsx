import { Link, Outlet } from "react-router-dom";


function About()
{
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique rem amet quia labore ea tempora fuga sequi natus suscipit! Qui nesciunt tempore maiores quod explicabo quos delectus earum beatae?
            </p>

            <ul>
                <li>
                    <Link to="/about/image">Images</Link>
                </li>
                <li>
                    <Link to="/about/prices">Prices</Link>
                </li>
                <li>
                <Link to="/about/location">Location</Link>
                </li>
            </ul>

            <Outlet/>
           

        </div>
    )
}

export default About;