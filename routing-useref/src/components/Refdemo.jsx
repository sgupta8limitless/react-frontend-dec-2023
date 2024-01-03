import { useEffect, useState,useRef } from "react";

function Refdemo()
{

    let [name,setName] = useState("Saurabh")
    let nVar = 0;
    let rVar = useRef(10);

    let pTag = useRef();



    

    useEffect(()=>{
        console.log(name);
        console.log(nVar);

        console.log(rVar);

        console.log(pTag);
    })

    return (
        <div className="refdemo">
            <h1>UseRef Demo</h1>
            <h1>{name}</h1>
            <h1>{nVar}</h1>
            <h1>{rVar.current}</h1>
            <button onClick={()=>{
                setName("Thor")
                nVar = 1;
                rVar.current=20;
            }}>change name</button>

            <p ref={pTag}>Hello Everyone</p>

            <button onClick={()=>{
                pTag.current.style.backgroundColor="red";
            }}>Change Content</button>

        </div>
    )
}


export default Refdemo;