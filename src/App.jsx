// import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Home from "./page/Home"
import { signUpRequest, signInRequest } from "./services/auth"

const App = () => {
  const signUp = async (value) => {
    const data = await signUpRequest(value);
    console.log(data);
  }

  const signIn = async (value) => {
    const data = await signInRequest(value);
    console.log(data);

    if (data.status === 'success') {
      localStorage.setItem('token', data.data.accessToken);
    }
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home onLogin={signIn} onRegister={signUp} />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
