import { Link } from "react-router-dom"
import '../../App.css'
import InputControl from '../InputControl/InputControl'
import {createUserWithEmailAndPassword, updateProfile }  from 'firebase/auth'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"

const Signup = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false)

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleSubmit = () =>{
    if(!values.name || !values.email || !values.password){
      setErrorMsg('Please fill all the fields')
      return
    }
    setErrorMsg('')

    setSubmitBtnDisabled(true)
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(async res => {
      setSubmitBtnDisabled(false)
      console.log(res)
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name
      })
      navigate('/')
    })
    .catch(err => {
      setErrorMsg(err.message)
      setSubmitBtnDisabled(false)
    })
  }

  return (
    <div className="MyContainer max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10">
      <div className="w-full">
        <h1 className="text-2xl font-semibold text-white my-5">Sign up</h1>
        
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
      <b className="text-lg font-bold text-red-500 text-center pt-5">{errorMsg}</b>
      <button 
      disabled={submitBtnDisabled}
      onClick={handleSubmit}
      className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium mt-5 disabled:bg-gray-500">
        Sign up
      </button>
      <Link to="/login" className="text-white text-lg mt-5  cursor-pointer">
        Already have an account? <span className="font-bold text-green-400">Login</span>.
      </Link>
    </div>
  )
}

export default Signup
