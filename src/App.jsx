import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Home from "./page/Home"

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/dashboard' Component={Dashboard} />
        </Routes>
    </Router>
  )
}

export default App
