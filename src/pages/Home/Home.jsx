import Hero_image from '../../assets/images/hero-image.png'
import JobCard from '../../components/JobCard';
import Navbar from '../../components/Navbar'
import { useDispatch } from 'react-redux';
import { logoutUser, isLoggedInAction } from '../../redux/reducers/jobReducer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(logoutUser());

        if (logoutUser.fulfilled.match(resultAction)) {
            toast.success('Logged out successfully!');
            localStorage.removeItem('token'); // Remove the token from local storage
            dispatch(isLoggedInAction(false)); // Update the login state
            navigate('/login'); // Navigate after successful logout
        }
    };

    return (
        <>
            <div className="container-fluid ">
                {/* Hero */}
                <div className="row" style={{ height: '100vh' }} >
                    {/* Navbar */}

                    <Navbar handleLogout={handleLogout} />
                    {/* Hero Content  */}
                    <div className="col-12 " style={{ height: '85%' }}>
                        <div className="row" style={{ height: '100%' }}>
                            {/* Hero Content side 1 */}
                            <div className="col-12 col-md-6 col-lg-6  ">
                                <div className="d-flex flex-column justify-content-center align-items-center gap-3" style={{ height: '100%' }}>
                                    <div>
                                        <h1 className="text-center">Get Hired</h1>
                                    </div>
                                    <div>
                                        <h3 className="">Find your dream job</h3>

                                    </div>
                                    {/*  input-box-shadow rounded-3 */}
                                    <div className='row  p-1 d-flex justify-content-center align-items-center' style={{ width: '90%', height: '5rem' }} >
                                        <div className="col-12 col-md-12 col-lg-8 d-flex justify-content-center " style={{ width: '100%', height: '2.5rem' }}>
                                            <div className='row gap-1'>
                                                <input className="form-control input-outline" type="text" placeholder="Search for job" />
                                                <select className="form-select me-2 input-outline" aria-label="Default select example" style={{ width: '100%' }} defaultValue="">
                                                    <option value="" disabled>Location</option>
                                                    <option value="1">Pune</option>
                                                    <option value="2">Bangalore</option>
                                                    <option value="3">Chennai</option>
                                                </select>


                                                <button className="btn btn-primary input-outline">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Content side 2 */}
                            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center mt-5">

                                <img src={Hero_image} style={{ height: '80%', width: '20rem' }} />

                            </div>

                        </div>

                    </div>

                </div>
                {/*  Hero Section End */}

                {/* Jobs section  */}
                <div className='row border mt-5'>
                    <h1 className='text-center'>Jobs</h1>

                    <div className='col-12 col-sm-12 col-md-12  col-lg-8 '>
                        <div className='row p-4 d-flex justify-content-center gap-3'>
                            {/* cards start */}
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />

                            {/* cards end */}
                        </div>
                    </div>
                    <div className='col-3  border'>2</div>


                </div>


            </div>

        </>
    );
}

export default Home;