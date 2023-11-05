import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { loginUser, logoutUser, isLoggedInAction } from '../../redux/reducers/jobReducer';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [userData, setUserData] = useState({
    email: '',
    password: '',
    type: 'student', // Default user type
  });



  const getUserData = (e) => {
    // Use the spread operator to update the state object
    const updatedUserData = { ...userData, [e.target.name]: e.target.value };
    setUserData(updatedUserData);
    // console.log(updatedUserData); // Log the updated data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dispatch the loginUser action with userData
      const resultAction = await dispatch(loginUser(userData));
      if (loginUser.fulfilled.match(resultAction)) {
        // If the login is successful, store the token in local storage
        localStorage.setItem('token', 'your-token-here');
        dispatch(isLoggedInAction(true));
        toast.success('Logged in successfully!');
        // If the login is successful, check the user type
        if (userData.type === 'recruiter') {
          // Redirect to the recruiter dashboard
          navigate('/recruiter-dashboard'); // Update with the actual dashboard URL for recruiters
        } else {
          // Redirect to the default dashboard or home page
          navigate('/'); // Change '/home' to the actual URL of your home page
        }
      } else if (loginUser.rejected.match(resultAction)) {
        console.log('Invalid input data. Please check and try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <div className="container-fluid" style={{ height: '100vh' }}>
      <Navbar />
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="col-sm-8 col-md-8 col-lg-4 mt-5">
          <form
            className="input-box-shadow rounded-3 p-4 d-flex flex-column gap-2 input-outline"
            method="Post"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="form2Example1"
                className="form-control input-outline"
                onChange={getUserData}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="form2Example2"
                className="form-control input-outline"
                onChange={getUserData}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="user-type">Select User Type</label>
              <select
                name="type"
                className="form-control input-outline"
                onChange={getUserData}
                value={userData.type} // Set the selected value
              >
                <option value="student">Student</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block w-100">
              Sign in
            </button>

            <div className="text-center">
              <p>
                New member? <Link to="/register">Register</Link>
              </p>
              <p>or sign in with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
