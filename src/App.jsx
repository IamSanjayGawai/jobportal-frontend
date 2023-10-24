import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import JobDetail from './pages/JobDetail/JobDetail.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobdetail" element={<JobDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
