import { useState } from 'react'
import './App.css'
import Products from './Products'

function App() {
  
  let [showProduct,setShowProduct] = useState(true);

  return (
    <div className='main'>
     <h1>All Products</h1>

     {/* <button onClick={()=>{
      setShowProduct(true);
     }}>Show</button>

     <button onClick={()=>{
      setShowProduct(false)
     }}>Hide</button> */}

     {

        showProduct===true?
        (
          <Products/>
        ):
        (
          <h1>Product Not Available</h1>
        )

     }

    </div>
  )
}

export default App
