import Navbar from '../../components/Navbar'
import {Link} from 'react-router-dom'
function Register() {





    return (  
        <>
             <div className="container-fluid" style={{ height: '100vh' }}>

<Navbar />

<div className='row d-flex flex-column justify-content-center align-items-center'>
    <div className="col-sm-8 col-md-8 col-lg-4 " >
        <form className="input-box-shadow rounded-3 p-4 d-flex flex-column gap-1">
            <div className="form-group  ">
                <label className="form-label" htmlFor="form2Example1">Name</label>
                <input type="text"  className="form-control input-outline" />
            </div>

            <div className="form-group ">
                <label className="form-label">Email</label>
                <input type="text"  className="form-control input-outline" />
            </div>

            <div className="form-group ">
                <label className="form-label">Mobile No</label>
                <input type="text" className="form-control input-outline" />
            </div>

            <div className="form-group ">
                <label htmlFor="user-type">Select User Type</label>
                <select name="user-type" className="form-control input-outline">
                    <option value="student">Student</option> 
                    <option value="recruiter">Recruiter</option>
                </select>
            </div>

            <div className="form-group ">
                <label className="form-label" htmlFor="form2Example2">Password</label>
                <input type="password"  className="form-control input-outline" />
            </div>


            {/* <div className="row ">
                <div className="col d-flex justify-content-center">
                    <div className="form-check">
                        <input className="form-check-input input-outline" type="checkbox" value="" id="form2Example31" checked />
                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                </div>

            </div> */}


            <button type="button" className="btn btn-primary btn-block  w-100 mt-2">Register</button>

            <div className="text-center">
                <p>Already a member? <Link to="/login">SignIn</Link></p>
                {/* <p>or sign up with:</p> */}
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
        </>
    );
}

export default Register;