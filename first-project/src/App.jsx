import { useState } from 'react'
import './App.css'
import Country from './Country'
// import Product from './Product'
// import User from './User'

function App() {

  let [isLoggedIn,setIsLoggedIn] = useState(true)


  let [countries,setCountries] = useState(
    [
      {name:"India",capital:"New Delhi",pop:"1.4B"},
      {name:"Australia",capital:"Canberra",pop:"330M"},
      {name:"France",capital:"Paris",pop:"67.5M"}
    ]
    )

    function loadNewCountries()
    {
      setCountries(
        [
          {name:"USA",capital:"Washington DC",pop:"1.4B"},
          {name:"Sri Lanka",capital:"Colombo",pop:"330M"},
          {name:"UAE",capital:"Dubai",pop:"67.5M"}
        ]
        )
    }

   
  

  return (
    <div>
      <h1>Main Component</h1>


      {

          isLoggedIn==false?
           (<h1>Please Log IN</h1>)
           :
           
           countries.map((country)=>{

            return (
              <Country name={country.name} capital={country.capital} pop={country.pop}/>
            )
  
          })

      }




      <button onClick={loadNewCountries}>Load New Countries</button>

      
      {/* {

        countries.map((country)=>{

          return (
            <Country name={country.name} capital={country.capital} pop={country.pop}/>
          )

        })

        

      } */}
      




     

    </div>
  )
  
}

export default App
