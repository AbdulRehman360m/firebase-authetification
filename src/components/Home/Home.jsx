import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="MyContainer w-svw max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <h1 className="text-white font-semibold text-4xl my-10">Home</h1>
      <div className="flex flex-col gap-5 ">
        {isLoggedIn ? (
          <button
            className="text-xl px-5 py-2 bg-green-500 rounded-xl text-white"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <button
            className="text-xl px-5 py-2 bg-green-500 rounded-xl text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
      <h2 className="text-2xl font-medium p-10 text-white">
        Welcome To Internee.pk!
      </h2>
    </div>
  );
};

export default Home;
