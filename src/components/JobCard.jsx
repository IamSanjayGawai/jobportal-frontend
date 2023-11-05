import Hero_image from '../assets/images/hero-image.png'

function JobCard() {
    return (
        <>
            <div className='col-12 col-sm-12 col-md-12 col-lg-10 p-4  input-box-shadow rounded-3'>

                {/* job and titles */}
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div className='border me-3' style={{ height: '4rem', width: '4rem' }}>
                            <img src={Hero_image} style={{ height: '4rem', width: '4rem' }} />
                        </div>
                        <div className='job-titles d-flex flex-column'>
                            <span>Job Title</span>
                            <span>Company Name</span>
                            <span>Location</span>
                        </div>
                    </div>
                    <div className='' style={{ fontSize: '0.8rem', color: 'gray' }}> 33 min</div>
                </div>

                {/* salary and experience */}
                <div className='mt-3 d-flex justify-content-between  experience ' style={{ width: "80%" }}>
                    <span><i className="fa-solid fa-clock me-1"></i>Fulltime</span>
                    <span><i className="fa-solid fa-dollar-sign me-1"></i>1500000/year</span>
                    <span><i className="fa-solid fa-briefcase me-1"></i>2 - 3</span>
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
                    <span style={{ fontSize: '0.7rem', color: 'gray' }}>800 Applicants </span>
                    <div className='d-flex gap-2'>
                        <button className='btn btn-warning'>View</button>
                        <button className='btn btn-primary'>Apply</button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default JobCard;