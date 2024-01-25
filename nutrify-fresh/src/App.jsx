import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Notfound from './components/Notfound'
import Track from './components/Track'

import Private from './components/Private'

import { UserContext } from './contexts/UserContext'
import { useEffect, useState } from 'react'
import Diet from './components/Diet'



function App() {
 
  const [loggedUser,setLoggedUser] 
  = useState(JSON.parse(localStorage.getItem("nutrify-user")));

  

  return (
    <>

    
      <UserContext.Provider value={{loggedUser,setLoggedUser}}>

          <BrowserRouter>   

              <Routes>

                  <Route path='/' element={<Login/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/track' element={<Private Component={Track}/>}/>
                  <Route path='/diet' element={<Private Component={Diet}/>}/>
                  
                  <Route path='*' element={<Notfound/>}/>

              </Routes>
        
            </BrowserRouter>
       

        </UserContext.Provider>

        
    </>
  )
}

export default App
