import { Link } from "react-router-dom"
import '../../App.css'
import InputControl from '../InputControl/InputControl'

const Login = () => {
  return (
    <div className="MyContainer p-5">
      <div className="w-full">
        <h1 className="text-2xl font-semibold text-white my-5">Login</h1>
        <InputControl label="Email:" placeholder="Enter your email.."/>
        <InputControl label="Password:" placeholder="Enter your password.."/>
      </div>
      <button className="bg-green-400 text-white px-5 py-2 rounded-lg mt-5">Login</button>
      <Link to="/Signup" className="text-green-400 text-lg mt-5  cursor-pointer">
        Don&apos;t have an account? Signup instead.
      </Link>
    </div>
  )
}

export default Login
