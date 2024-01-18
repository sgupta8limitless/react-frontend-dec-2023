import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Notfound from './components/Notfound'
import Track from './components/Track'

import Private from './components/Private'

import { UserContext } from './contexts/UserContext'
import { useState } from 'react'
import Demo from './components/Demo'


function App() {
 
  const [loggedUser,setLoggedUser] = useState(localStorage.getItem("nutrify-user"));

  return (
    <>

    
      <UserContext.Provider value={{loggedUser,setLoggedUser}}>

          <BrowserRouter>   

              <Routes>

                  <Route path='/' element={<Login/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/track' element={<Private Component={Track}/>}/>
                  <Route path='/demo' element={<Private Component={Demo}/>}/>

                  <Route path='*' element={<Notfound/>}/>

              </Routes>
        
            </BrowserRouter>
       

        </UserContext.Provider>

        
    </>
  )
}

export default App
