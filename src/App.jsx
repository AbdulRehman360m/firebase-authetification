
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

// 21:00 timestamp
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route 
            path='/'
            element={<Home/>}
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
