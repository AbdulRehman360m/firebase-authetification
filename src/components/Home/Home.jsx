import { Link } from "react-router-dom"

const Home = (props) => {
  return (
    <div className="MyContainer">
      <h1 className="text-white font-semibold text-3xl my-10">Home</h1>
      <div className="flex flex-col gap-5 ">
      <Link to='/login' className="text-2xl font-medium px-5 py-2 bg-blue-500 rounded-xl text-white">Login</Link>
      <Link to='/signup' className="text-2xl font-medium px-5 py-2 bg-blue-500 rounded-xl text-white">Signup</Link>
      </div>
      <br/>
      <h2 className="text-2xl font-medium p-10 underline text-green-600">{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
    </div>
  )
}

export default Home
