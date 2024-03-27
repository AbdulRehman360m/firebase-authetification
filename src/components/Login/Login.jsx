import { Link } from "react-router-dom";
import "../../App.css";
import InputControl from "../InputControl/InputControl";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Please fill all the fields");
      return;
    }

    setErrorMsg("");
    setSubmitBtnDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        setSubmitBtnDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setSubmitBtnDisabled(false);
      });
  };
  const handleReset = () => {
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        setErrorMsg("Password reset email sent");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="MyContainer w-svw max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10">
      <div className="w-full">
        <h1 className="text-2xl font-semibold text-white my-5">Login</h1>
        <InputControl
          label="Email:"
          placeholder="Enter your email.."
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <InputControl
          label="Password:"
          type="password"
          placeholder="Enter your password.."
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <div className="ml-auto text-right mt-2 text-lg font-semibold text-white">
          Forget password?{" "}
          <span
            onClick={handleReset}
            className="cursor-pointer hover:text-red-600 font-bold text-red-500"
          >
            Reset
          </span>
        </div>
      </div>
      <b className="text-lg font-bold text-red-500 text-center pt-5">
        {errorMsg}
      </b>
      <button
        disabled={submitBtnDisabled}
        onClick={handleSubmit}
        className="bg-green-500 text-white font-medium px-5 py-2 rounded-lg mt-5"
      >
        Login
      </button>
      <Link to="/Signup" className="text-white text-lg mt-5  cursor-pointer">
        Don&apos;t have an account?{" "}
        <span className="font-bold text-green-400">Signup</span>.
      </Link>
    </div>
  );
};

export default Login;
