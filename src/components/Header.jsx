import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header({ handleLogout}) {

    const isLoggedIn = useSelector(state => state.job.isLoggedIn);

    return (

        <>
          <div className="col-12  mt-4" >
                        <nav className=" navbar  navbar-expand-lg navbar-light">
                            <div className="container-fluid d-flex">
                                <div className="row  w-100 ">
                                    <div className="col-6 d-flex align-items-center">
                                        <Link className="navbar-brand   fs-4" to="/"><b>GetHired</b></Link>
                                    </div>
                                    <div className="col-6 ">
                                        <div className="navbar-nav d-flex flex-row justify-content-end align-items-center gap-2">
                                            <div onClick={handleLogout} className="nav-link  text-primary"><b>Logout</b></div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
        </>
      );
}

export default Header;