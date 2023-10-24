import Hero_image from '../../assets/images/hero-image.png'

function Home() {
    return (
        <>
            <div className="container-fluid ">
                {/* Hero */}
                <div className="row" style={{ height: '100vh' }} >
                    {/* Navbar */}
                    <div className="col-12  mt-4" >
                        <nav class=" navbar  navbar-expand-lg navbar-light">
                            <div class="container-fluid d-flex">
                                <div className="row  w-100 ">
                                    <div className="col-6 d-flex align-items-center">
                                        <a class="navbar-brand   fs-4" href="#"><b>GetHired</b></a>
                                    </div>
                                    <div class="col-6 ">
                                        <div class="navbar-nav d-flex flex-row justify-content-end align-items-center gap-2">
                                            <a class="nav-link " href="#"><b>Login</b></a>
                                            <a class="nav-link  text-primary" href="#"><b>SignUp</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>


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
                                            <input className="form-control input-outline" type="text" placeholder="Search for job"  />
                                            <select className="form-select me-2 input-outline" aria-label="Default select example" style={{width:'100%'}}>
                                                <option value="" disabled selected>Location</option>
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
                        <div className='col-12 col-sm-12 col-md-12 col-lg-10 p-4  input-box-shadow rounded-3'>
                       
                       {/* job and titles */}
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                        <div className='border me-3' style={{height:'4rem', width:'4rem'}}>
                        <img src={Hero_image} style={{height:'4rem', width:'4rem'}}/> 
                        </div> 
                        <div className='job-titles d-flex flex-column'>
                            <span>Job Title</span>
                            <span>Company Name</span>
                            <span>Location</span>
                        </div> 
                        </div>
                        <div className=''style={{fontSize:'0.8rem', color:'gray'}}> 33 min</div> 
                        </div> 

{/* salary and experience */}
                        <div className='mt-3 d-flex justify-content-between  experience ' style={{width:"80%"}}>
                            <span><i class="fa-solid fa-clock me-1"></i>Fulltime</span>
                            <span><i class="fa-solid fa-dollar-sign me-1"></i>1500000/year</span>
                            <span><i class="fa-solid fa-briefcase me-1"></i>2 - 3</span>
                        </div> 
{/* urgent hiring */}
                        <div className='mt-2'>
                            Urgent Hiring
                            </div> 
                        {/* description  */}
                        <div className='description-card-div d-flex flex-column mt-3'>
                        <span>Looking for Frontend Reactjs Developer Having 2 Years of Experience</span>
                        <span>Responsibilty</span>
                        </div> 
                        {/* Applicants and apply button */}
                        <div className='d-flex justify-content-between align-items-center'>
                            <span style={{fontSize:'0.7rem', color:'gray'}}>800 Applicants </span>
                            <div className='d-flex gap-2'>
                                <button className='btn btn-warning'>View</button>
                                <button className='btn btn-primary'>Apply</button>
                           </div>
                            
                        </div> 
                     
                        </div>
{/* cards end */}


       {/* cards start */}
       <div className='col-12 col-sm-12 col-md-12 col-lg-10 p-4  input-box-shadow rounded-3'>
                       
                       {/* job and titles */}
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                        <div className='border me-3' style={{height:'4rem', width:'4rem'}}>
                        <img src={Hero_image} style={{height:'4rem', width:'4rem'}}/> 
                        </div> 
                        <div className='job-titles d-flex flex-column'>
                            <span>Job Title</span>
                            <span>Company Name</span>
                            <span>Location</span>
                        </div> 
                        </div>
                        <div className=''style={{fontSize:'0.8rem', color:'gray'}}>33 min</div> 
                        </div> 

{/* salary and experience */}
                        <div className='mt-3 d-flex justify-content-between  experience ' style={{width:"80%"}}>
                            <span><i class="fa-solid fa-clock me-1"></i>Fulltime</span>
                            <span><i class="fa-solid fa-dollar-sign me-1"></i>1500000/year</span>
                            <span><i class="fa-solid fa-briefcase me-1"></i>2 - 3</span>
                        </div> 
{/* urgent hiring */}
                        <div className='mt-2'>
                            Urgent Hiring
                            </div> 
                        {/* description  */}
                        <div className='description-card-div d-flex flex-column mt-3'>
                        <span>Looking for Frontend Reactjs Developer Having 2 Years of Experience</span>
                        <span>Responsibilty</span>
                        </div> 
                        {/* Applicants and apply button */}
                        <div className='d-flex justify-content-between align-items-center'>
                            <span style={{fontSize:'0.7rem', color:'gray'}}>800 Applicants </span>
                            <div className='d-flex gap-2'>
                                <button className='btn btn-warning'>View</button>
                                <button className='btn btn-primary'>Apply</button>
                           </div>
                            
                        </div> 
                     
                        </div>
{/* cards end */}


       {/* cards start */}
       <div className='col-12 col-sm-12 col-md-12 col-lg-10 p-4  input-box-shadow rounded-3'>
                       
                       {/* job and titles */}
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                        <div className='border me-3' style={{height:'4rem', width:'4rem'}}>
                            <img src={Hero_image} style={{height:'4rem', width:'4rem'}}/> 
                        </div> 
                        <div className='job-titles d-flex flex-column'>
                            <span>Job Title</span>
                            <span>Company Name</span>
                            <span>Location</span>
                        </div> 
                        </div>
                        <div className=''style={{fontSize:'0.8rem', color:'gray'}}>33 min</div> 
                        </div> 

{/* salary and experience */}
                        <div className='mt-3 d-flex justify-content-between  experience ' style={{width:"80%"}}>
                            <span><i class="fa-solid fa-clock me-1"></i>Fulltime</span>
                            <span><i class="fa-solid fa-dollar-sign me-1"></i>1500000/year</span>
                            <span><i class="fa-solid fa-briefcase me-1"></i>2 - 3</span>
                        </div> 
{/* urgent hiring */}
                        <div className='mt-2'>
                            Urgent Hiring
                            </div> 
                        {/* description  */}
                        <div className='description-card-div d-flex flex-column mt-3'>
                        <span>Looking for Frontend Reactjs Developer Having 2 Years of Experience</span>
                        <span>Responsibilty</span>
                        </div> 
                        {/* Applicants and apply button */}
                        <div className='d-flex justify-content-between align-items-center'>
                            <span style={{fontSize:'0.7rem', color:'gray'}}>800 Applicants </span>
                            <div className='d-flex gap-2'>
                                <button className='btn btn-warning'>View</button>
                                <button className='btn btn-primary'>Apply</button>
                           </div>
                            
                        </div> 
                     
                        </div>
{/* cards end */}

       {/* cards start */}
       <div className='col-12 col-sm-12 col-md-12 col-lg-10 p-4  input-box-shadow rounded-3'>
                       
                       {/* job and titles */}
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                        <div className='border me-3' style={{height:'4rem', width:'4rem'}}>
                        <img src={Hero_image} style={{height:'4rem', width:'4rem'}}/> 
                        </div> 
                        <div className='job-titles d-flex flex-column'>
                            <span>Job Title</span>
                            <span>Company Name</span>
                            <span>Location</span>
                        </div> 
                        </div>
                        <div className=''style={{fontSize:'0.8rem', color:'gray'}}>33 min</div> 
                        </div> 

{/* salary and experience */}
                        <div className='mt-3 d-flex justify-content-between  experience ' style={{width:"80%"}}>
                            <span><i class="fa-solid fa-clock me-1"></i>Fulltime</span>
                            <span><i class="fa-solid fa-dollar-sign me-1"></i>1500000/year</span>
                            <span><i class="fa-solid fa-briefcase me-1"></i>2 - 3</span>
                        </div> 
{/* urgent hiring */}
                        <div className='mt-2'>
                            Urgent Hiring
                            </div> 
                        {/* description  */}
                        <div className='description-card-div d-flex flex-column mt-3'>
                        <span>Looking for Frontend Reactjs Developer Having 2 Years of Experience</span>
                        <span>Responsibilty</span>
                        </div> 
                        {/* Applicants and apply button */}
                        <div className='d-flex justify-content-between align-items-center'>
                            <span style={{fontSize:'0.7rem', color:'gray'}}>800 Applicants </span>
                            <div className='d-flex gap-2'>
                                <button className='btn btn-warning'>View</button>
                                <button className='btn btn-primary'>Apply</button>
                           </div>
                            
                        </div> 
                     
                        </div>
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