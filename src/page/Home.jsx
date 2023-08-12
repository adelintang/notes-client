import { useState } from "react"
import Login from "../components/Login"
import Register from "../components/Register"

const Home = ({ onLogin, onRegister }) => {
  const [sign, setSign] = useState(true);

  const signUpHandler = () => {
    setSign(false);
  }

  const signInHandler = () => {
    setSign(true);
  }

  const buttonStyle = "w-[200px] bg-slate-800 text-white py-2 font-semibold rounded-sm"

  return (
    <div className="container mx-auto">
      <div className="w-[430px] mx-auto flex justify-center gap-1 mt-10 mb-5 bg-gray-200 py-2 rounded-sm">
        <button
          onClick={signInHandler}
          className={buttonStyle}
          >Sign In</button>
        <button
          onClick={signUpHandler}
          className={buttonStyle}
        >Sign Up</button>
      </div>
      {sign ? (<Login onLogin={onLogin} />) : (<Register onRegister={onRegister} />)}
    </div>
  )
}

export default Home
