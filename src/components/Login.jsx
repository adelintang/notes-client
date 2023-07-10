import { useState } from "react"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (value) => {
    setUsername(value)
  }

  const handlePassword = (value) => {
    setPassword(value)
  }

  const handleForm = (e) => {
    e.preventDefault();
    console.log({ username, password })
  }

  const inputStyle = "block w-[100%] py-2 pl-2 rounded-sm text-black mb-4 font-semibold focus:outline-none focus:ring focus:ring-blue-400 bg-slate-200"

  return (
    <div className="w-[400px] mx-auto bg-slate-800 p-4 text-white box-border rounded-sm">
      <h1 className="text-xl font-semibold text-center mb-16">Sign In</h1>
      <form>
        <input type="text" placeholder="Masukkan Username" className={inputStyle}
          onChange={(e) => handleUsername(e.target.value)}          
        />
        <input type="password" placeholder="Masukkan Password" className={inputStyle}
          onChange={(e) => handlePassword(e.target.value)}
        />
        <button className="block w-[100%] mt-16 bg-blue-400 py-2 rounded-sm font-semibold"
          onClick={(e) => handleForm(e)}
        >Sign In</button>
      </form>
    </div>
  )
}

export default Login
