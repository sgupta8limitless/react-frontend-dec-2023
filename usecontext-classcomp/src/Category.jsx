import { TheContext } from "./App"
import { useContext } from "react"

export default function Category(){

let u = useContext(TheContext); 

  return (
    <div className="category">
        Category Comp {u.username} {u.token}

        <button onClick={()=>{
            u.setUsername("Thor");
        }}>change Name</button>
    </div>
  )
}
