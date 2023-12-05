import React from "react";
import "./Browse.css";
import Footer from "./Footer";
import templet1 from "../Img/homepage/browseJobtTemplet1.png"
import clock from "../Img/icon/clock.png";
import bookMark from "../Img/icon/bookmark.png";
import backward from "../Img/icon/backward.png";
import forward from "../Img/icon/forward.png";
import locationIcon from "../Img/icon/location.png";
import CompanyDetails from "./CompanyDetails";
import JobViewDetails from "./JobViewDetails";
import { useSelector } from 'react-redux'
import { useNavigate} from "react-router-dom"
import { useState,useEffect } from 'react';
import { getAllJobs } from "../services/operations/jobDetailsAPI"
import { addBookmark } from "../services/operations/contactUsAPI"
import toast from "react-hot-toast";


const Browse = () => {

  const { token } = useSelector((state) => state.auth)
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [jobType, setJobType] = useState('');
  const [loading, setLoading] = useState(false)
  const[jobs,setJobs] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedJob, setSelectedJob]=useState(null);
  const [selectedCompanyData, setSelectedCompanyData] = useState(null);
  const [selectedJobData, setSelectedJobData]=useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null)
  const navigate = useNavigate()
  




  // ****************


  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  const totalJobs = jobs.length; /* Get the total number of jobs */
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  const handleForwardClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBackwardClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const jobsToShow = jobs.slice(startIndex, endIndex);



  // ****************






  const handleBookmarkClick = async(jobId) => {
    const data= {
      jobData: jobId,
    }
    
    try{
        
        if (token) {
            setLoading(true);
            await addBookmark(data,token)
            setLoading(false);
              return
            }

            setConfirmationModal({
                text1: "You are not logged in!",
                text2: "Please login to save this job",
                btn1Text: "Login",
                btn2Text: "Cancel",
                btn1Handler: () => navigate("/signin"),
                btn2Handler: () => setConfirmationModal(null),
              }) 
        
    }
    catch(error) {
        // console.log("Error:" , error.message);
        toast.error(error.message);
        setLoading(false);
    }
  }

  const handleCompanyClick = (companyData,job) => {
    setSelectedCompany(companyData);
    setSelectedJob(job);
    
  };
  const handleJobViewClick = (companyData,job) => {
    setSelectedCompanyData(companyData);
    setSelectedJobData(job);
    
  };

  const closeCompanyDetails = () => {
    setSelectedCompany(null);
  };
  const closeCompanyDetailsData = () => {
    setSelectedCompanyData(null);
  };


  useEffect(() => {
      const getJobsData = async () => {
      setLoading(true)
      const jobData = await getAllJobs()
      setLoading(false)
      if (jobData.length > 0) {
        setJobs(jobData);
        
      }
    }
    getJobsData()
  }, [])


  const handleFilter = async () => {

    const queryParams = {
      keywords,
      location,
      experience,
      jobType,
    };


    try {
      setLoading(true)
      // console.log("filter data",queryParams)
      const filteredJobData = await getAllJobs(queryParams);
      setLoading(false);
      setJobs(filteredJobData);  
      // Handle jobData or update state with jobData here
      // console.log(filteredJobData);
    } catch (error) {
      // Handle errors if any
      console.error(error);
    }
  };



  return (
    <div>
        {selectedCompany || selectedCompanyData? (

          <div>
            {
              selectedCompany? 
              <CompanyDetails
                companyData={selectedCompany}
                jobData={selectedJob}
                onClose={closeCompanyDetails}
              />: 
              <JobViewDetails
                companyData={selectedCompanyData}
                jobData={selectedJobData}
                onClose={closeCompanyDetailsData}
              />
            }

          </div>

      ) : (
        
        <div>
          <section id="section1">
            <div id="heroSectionImg">
              <img className="temp1ContactUs" src={templet1} alt="loading" />
              <div id="innerHeroSection">
                <h3 id="jobListedH3" className="jobListed">
                  100+ Job Listed
                </h3>
                <p className="jobListed">Explore Opportunities: Your Next Job Awaits.</p>
              </div>
            </div>
          </section>

          <div id="BrowseJobMainContainer">
          <section>
          <div id="filterMainContainer">
            <div id="filterInnerContainer">
              <div>
                <div id="filterTitle">Filter Jobs</div>
                <div id="filterInputContainer">
                  <input
                    className="filterInputClass"
                    type="text"
                    placeholder="Search Keyword"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                  <input
                    className="filterInputClass"
                    type="text"
                    placeholder="Job Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <select className="filterInputClass selectItem" value={experience}
                    onChange={(e) => setExperience(e.target.value)}>
                    <option>Experience</option>
                    <option>Fresher</option>
                    <option>1 Year</option>
                    <option>2 Year</option>
                    <option>3 Year</option>
                    <option>3 Year+</option>
                  </select>
                  <select className="filterInputClass selectItem" value={jobType}
                    onChange={(e) => setJobType(e.target.value)}>
                    <option>Job Type</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Work From Home</option>
                  </select>

                  <button id="filterJobBtn" onClick={handleFilter}>Filter Job</button>
                </div>
                <div id="line"></div>
                <div id="filterPopularSearch">
                  <div className="filterPopularSearchBox">
                    <div>UI/UX</div>
                    <div className="filterIconSize">X</div>
                  </div>
                  <div className="filterPopularSearchBox">
                    <div>Noida, India</div>
                    <div className="filterIconSize">X</div>
                  </div>
                  <div className="filterPopularSearchBox box3-4">
                    <div>1 Year</div>
                    <div className="filterIconSize">X</div>
                  </div>
                  <div className="filterPopularSearchBox box3-4">
                    <div>Full Time</div>
                    <div className="filterIconSize">X</div>
                  </div>
                  <div id="clearAll">Clear All</div>
                </div>
              </div>
            </div>
          </div>
          </section>

         {/* job show */}
          <section>
            <div id="jobMainContainer">
              <div id="jobInnerContainer">
                {
                  jobsToShow.map((job,index)=>(
                    <div id="JobBoxMainContainer"  key={index} className="jobContainer bg-white p-[20px]" style={{ margin: '20px' }}>
                      <div id="JobBoxLeftSide" className="flexBox">
                        <div className=" cursor-pointer"
                          onClick={() => handleCompanyClick(job.companyData,job)}
                          >
                          <img id="jobPic" src={job.companyData.companyLogo} alt="" />
                        </div>
                        
                        <div>
                          <div className=" cursor-pointer"
                           onClick={() => handleJobViewClick(job.companyData,job)} 
                           id="jobTitle">{job.jobTitle}</div>
                          <div>
                            <div className="flexBox marginBox">
                              <img  className="filterIconSize" src={locationIcon} alt="" />
                              <div className="textSize">{job.location}</div>
                            </div>
                            <div className="flexBox">
                              <img className="filterIconSize" src={clock} alt="" />
                              <div className="textSize">{job.jobType}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="JobBoxRightSide">
                        <div className="flexBox rightSideBox">
                          <img onClick={() => handleBookmarkClick(job._id)}
                           id="bookMarkIcon" src={bookMark} alt="" />
                          <button id="applybtn">
                            <a href={job.companyData.companyUrl} target="_blank" rel="noopener noreferrer" className="">
                              Apply Now</a>
                          </button>
                        </div>
                        <div className="flexBox date">
                          <div >Date Line:</div>
                          <div id="date" > 10 Dec 2023</div>
                        </div>
                      </div>
                    </div> 
                  ))
                }

              </div>
            </div>
          </section>

            {/* Job page number */}
            <section>
          <div className="mainContainerPageNumberBrowse">
            <div className="innerContainerPageNumberBrowse">
              <div className=" pageNumberCircleBrowse">
                <img onClick={handleBackwardClick}
                className="moveIconBrowse" src={backward} alt="" />
              </div>
                {[...Array(totalPages)].map((_, index) => (
                  <div
                    key={index}
                    className={`pageNumberCircleBrowse ${currentPage === index + 1 ? 'currentPageBrowse' : ''}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                  <div>{index + 1}</div>
                  </div>
                ))}
              <div className="pageNumberCircleBrowse">
                <img onClick={handleForwardClick}
                 className="moveIconBrowse" src={forward} alt="" />
              </div>
            </div>
          </div>
           </section>
        </div>
        </div>
      )}


        <Footer/>
    </div>

  );
};

export default Browse;
