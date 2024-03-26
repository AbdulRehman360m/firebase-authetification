
import {auth} from '../../firebase'
import {signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

const Home = (props) => {
  const navigate = useNavigate()
  const logout = () => {
    signOut(auth).then(() => {
      navigate('/login')
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="MyContainer w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <h1 className="text-white font-semibold text-4xl my-10">Home</h1>
      <div className="flex flex-col gap-5 ">
      <button className="text-xl px-5 py-2 bg-green-500 rounded-xl text-white" 
        onClick={logout}
        >Logout</button>
      </div>
      <h2 className="text-2xl font-medium p-10 text-white">Welcome - <span className="font-bold text-green-500">{props.name ? `${props.name}` : "Login Please"}</span></h2>
    </div>
  )
}

export default Home
