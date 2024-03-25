import { Link } from "react-router-dom"
import '../../App.css'
import InputControl from '../InputControl/InputControl'
import { useState } from "react"

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleSubmit = () =>{
    console.log(values)
    
  }

  return (
    <div className="MyContainer p-5">
      <div className="w-full">
        <h1 className="text-2xl font-semibold text-white my-5">Login</h1>
        
        <InputControl label="Name:" placeholder="Enter your name.." 
          onChange={(e) => setValues((prev) => ({...prev, name: e.target.value}))}
        />
        <InputControl label="Email:" placeholder="Enter your email.." 
          onChange={(e) => setValues((prev) => ({...prev, email: e.target.value}))}
        />
        <InputControl label="Password:" placeholder="Enter your password.." 
          onChange={(e) => setValues((prev) => ({...prev, password: e.target.value}))}
        />
      </div>
      <button 
      onClick={handleSubmit}
      className="bg-green-400 text-white px-5 py-2 rounded-lg mt-5">
        Signup
      </button>
      <Link to="/login" className="text-green-400 text-lg cursor-pointer">
        Have an account? Login instead.
      </Link>
    </div>
  )
}

export default Signup
