
import { useState } from 'react';
import './App.css'
// import Compstate from './Compstate'



function App() {

  let [details,setDetails] = useState({
    name:"",
    email:""
  });

 function handleInput(event)
 {

    setDetails((prevObj)=>{
      return {...prevObj,[event.target.name]:event.target.value}
    })

   
 }

 function handleSubmit()
 {
  console.log(details);
 }

  return (
    <>
    

    
    <div className='data-form'>
      
      <input type='text' name='name' onChange={handleInput} placeholder='Enter Name' value={details.name}/>

      <input type='text' name='email' onChange={handleInput} placeholder='Enter Email' value={details.email}/>

      <button onClick={handleSubmit}>Register</button>


      
    </div>
    
    </>
  )
}

export default App
