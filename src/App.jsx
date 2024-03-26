
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { useEffect, useState } from 'react'
import {auth} from './firebase'

function App() {
  const [userName, setUserName] = useState('')  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user){
        setUserName(user.displayName)
      }
      else{
        setUserName('')
      }
    })
  
    
  }, [])
  
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path='/'
            element={<Home name={userName}/>}
          />
          <Route 
            path='/login'
            element={<Login/>}
          />
          <Route 
            path='/signup'
            element={<Signup/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
