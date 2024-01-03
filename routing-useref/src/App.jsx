import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Product from './components/Product'

import Service from './components/Service'
import Home from './components/Home'
import Header from './components/Header'

import Image from './components/about/Image'
import Prices from './components/about/Prices'
import Location from './components/about/Location'
import Refdemo from './components/Refdemo'

function App() {
  

  return (
    <>



    <Refdemo/>


     {/* <BrowserRouter>

          <Header/>

     
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}>
            <Route path='image' element={<Image/>}></Route>
            <Route path='location' element={<Location/>}></Route>
            <Route path='prices' element={<Prices/>}></Route>
          </Route>
          <Route path='/product' element={<Product/>}/>
          <Route path='/service/s1/s2/s3' element={<Service/>}/>


        </Routes>
     
     
     </BrowserRouter> */}
        
    </>
  )
}

export default App
