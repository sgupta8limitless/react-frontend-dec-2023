import './App.css'
import Product from './Product'
import User from './User'

function App() {
  

  return (
    <div>
      <h1>Main Component</h1>
      
      {/* <Product name="Iphone 14" price="20000" specs={{ram:"2gb",screen:"19cm"}} category={["Electronics","Mobile"]}/>

      <Product name="Samsung S21" price="45000" specs={{ram:"4gb",screen:"21cm"}} category={["Electronics","Mobile"]}/> */}

      <User name="Sabin" age={26}/>

     

    </div>
  )
  
}

export default App
