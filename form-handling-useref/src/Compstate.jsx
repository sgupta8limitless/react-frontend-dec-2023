import { useState } from "react";

function Compstate()
{
    
  let [name,setName] = useState("Saurabh");

  let [animals,setAnimals] = useState(["Lion","Cheetah","Hyena"])

  

  function addAnimal()
  {
   
    setAnimals((prevArr)=>{
      return [...prevArr,'Deer']
    })

    }


  function changeName()
  {
    setName((val)=>{
      return val+"thor";
    })
  }

  return (
    <>
      <h1>Hello Chat</h1>
      <h1>{name}</h1>

      <button onClick={()=>{
       changeName()
      }}>Change Name</button>

      {
        animals.map((animal,index)=>{
          return (
            <h1 key={index}>{animal}</h1>
          )
        })
      }

      <button onClick={addAnimal}>Add New Animal</button>
      </>
  )

}


export default Compstate;