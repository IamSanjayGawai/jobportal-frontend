import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import JobDetail from './pages/JobDetail/JobDetail.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReccruiterDashBoard from './pages/ReccruiterDashBoard/ReccruiterDashBoard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobdetail" element={<JobDetail />} />
      <Route path="/recruiter-dashboard" element={<ReccruiterDashBoard/>} />
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>

  )
}

export default App
