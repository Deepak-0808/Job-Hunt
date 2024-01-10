import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast"
import './Home.css'
import FooterHomepage from './FooterHomepage';
import templet1 from "../Img/homepage/1.svg";
import templet2 from "../Img/homepage/2.png";
import templet3 from "../Img/homepage/3.png";
import templet4 from "../Img/homepage/4.png";
// import templet5 from "../Img/homepage/5.png";
// import mainimg from "../Img/candidates/mainImg.jpg";
// import testimonial1 from "../Img/candidates/1.png";
// import testimonial2 from "../Img/candidates/2.png";
// import testimonial3 from "../Img/candidates/3.png";
// import testimonial4 from "../Img/candidates/4.png";
// import testimonial5 from "../Img/candidates/5.png";
// import testimonial6 from "../Img/candidates/6.png";
// import testimonial7 from "../Img/candidates/7.png";
import locationIcon from "../Img/icon/location.png";
import clock from "../Img/icon/clock.png";
import bookMark from "../Img/icon/bookmark.png";
import backward from "../Img/icon/backward.png";
import forward from "../Img/icon/forward.png";
import CompanyDetails from "./CompanyDetails";
import ConfirmationModal from "../components/common/ConfirmationModal"
import { useSelector } from 'react-redux'
import { useNavigate} from "react-router-dom"
import { useState,useEffect } from 'react';

import {
  fetchJobCategories,fetchCompaniesData,getAllJobs
} from "../services/operations/jobDetailsAPI"
import {
  addBookmark
} from "../services/operations/contactUsAPI"



const Home = () => {

  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const[jobCategories,setJobCategories] = useState([])
  const[companiesData,setCompaniesData] = useState([])
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobs, setJobs] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedJob, setSelectedJob]=useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null)



// ****************


const [currentPage, setCurrentPage] = useState(1);
const jobsPerPage = 4;
const totalJobs = jobs.length;
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

  const closeCompanyDetails = () => {
    setSelectedCompany(null);
  };

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true)
      const categories = await fetchJobCategories()
      setLoading(false)
      if (categories.length > 0) {
        // Set only the first four categories to display
        setJobCategories(categories.slice(0, 4));
      }
    }
    const getCompaniesData = async () => {
      setLoading(true)
      const companyData = await fetchCompaniesData()
      setLoading(false)
      if (companyData.length > 0) {
        // Set only the first four company data to display
        setCompaniesData(companyData.slice(0, 4));
      }
    }
    getCategories()
    getCompaniesData()

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
      const filteredJobData = await getAllJobs(queryParams);// Assuming getAllJobs is a function that fetches job data
      setLoading(false);
      setJobs(filteredJobData);  
    } catch (error) {
      toast.error(error);
    }
  };

    
  return (
    <div>
    <div>
      {selectedCompany ? (
        <CompanyDetails
          companyData={selectedCompany}
          jobData={selectedJob}
          onClose={closeCompanyDetails}
        />

      ) : (

        <div id="mainContainerHome">

        {/* herosection */}
         <section id="section1">
          <div id="heroSectionImg">
            <img id="heroimg" src={templet1} alt="loading" />
            <div id="innerHeroSection">
              <h3 id="jobListedH3" className="jobListed">
                100+ Job Listed
              </h3>
              <h2 id="dreamJob" className="jobListed">
                Find Your Dream Job
              </h2>
              <p className="jobListed">
                Find Jobs, Build Futures: Your Journey to Better Opportunities and Success.
              </p>
              <Link to={"/Browse"}>
                <button id="innerHeroSectionBtn">Browse Job</button>
              </Link>
            </div>
          </div>
        </section>

        {/* content section2 */}
        <section id="section2">
          <div id="mainContent">
            <div id="container">
              <div id="inputContainer">
                <input 
                 value={keywords}
                 onChange={(e) => setKeywords(e.target.value)}
                 className="inputClass" 
                 type="text" 
                 placeholder="Job Title"
                />
                <input 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="inputClass" 
                  type="text" 
                  placeholder="Job Location"
                />
                <select 
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)} 
                  className="inputClass">
                  <option>Experience</option>
                  <option>Fresher</option>
                  <option>1 Year</option>
                  <option>2 Year</option>
                  <option>3 Year</option>
                  <option>3 Year+</option>
                </select>
                <select 
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)} 
                  className="inputClass">
                  <option>Job Type</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Work From Home</option>
                </select>
                
                <button id="findBtn" onClick={handleFilter}>Find Job</button>
                
              </div>
              <div id="popularSearch">
                <div id="popularHead">Popular Search:</div>
                <div className="popularSearchItem">Web Developer</div>
                <div className="popularSearchItem">PHP Developer</div>
                <div className="popularSearchItem">UI/UX</div>
              </div>
            </div>

            {/* Job show */}
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
                          <div id="jobTitle">{job.jobTitle}</div>
                          <div>
                            <div className="flexBox marginBox">
                              <img className="filterIconSize" src={locationIcon} alt="" />
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

              {/* Job show */}
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
        </section>

        {/* 2&3 templet/feature section3 */}
        <section id="section3">
          <div id="featureSection">
            <div>
              <img id="tem2img" src={templet2} alt="" />
            </div>
            <div id="innerFeatureSection">
              <div id="leftContent">
                <div>
                  {jobCategories.slice(0, 2).map((category, index) => (
                    <div className="contentBox box" key={index}>
                      <img className="iconSize" src={category.image} alt="" />
                      <h3 className="contentBoxHeading content1">{category.name}</h3>
                      <p className="content1">50+ Available</p>
                    </div>
                  ))}
                </div>
                <div id="leftContentRightBox">
                  {jobCategories.slice(2, 4).map((category, index) => (
                    <div className="contentBox box" key={index}>
                      <img className="iconSize" src={category.image} alt="" />
                      <h3 className="contentBoxHeading content1">{category.name}</h3>
                      <p className="content1">50+ Available</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div id="rightContent">
                <div id="rightContentInnerBox">
                  <h2>Popular Category</h2>
                  <p>
                    Embark on a journey through our Popular Job Categories,
                    where a diverse array of opportunities awaits. From cutting-edge
                    technology to creative pursuits, explore tailored career
                    paths designed to align with your skills and passions.
                    Uncover your next professional adventure with us.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img id="tem3img" src={templet3} alt="error" />
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section>
          <div id="companiesSection">
            <div id="innerCompaniesSection">
              <div id="leftContCompanies">
                <div id="leftContCompaniesInnerBox">
                  <h2>Top Companies</h2>
                  <p>
                    Dive into our curated Top Companies section to access premier career
                    opportunities. These industry leaders offer a compelling blend of growth,
                    innovation, and rewarding workplaces. Find your ideal fit among these
                    influential organizations, and set the stage for a fulfilling and
                    prosperous career journey.
                  </p>
                </div>
              </div>
              <div id="rightConatCompanies">
                <div id="innerRightContentCompanies">
                  <div id="innerLeftCompaniesCard" className="innerCompaniesCard">
                    {companiesData.slice(0, 2).map((company, index) => (
                    <div className="companiesContentBox companiesBox1 cB1 cb" key={index}>
                      <img className="iconSize" src={company.companyLogo} alt="" />
                      <h3 className="contentBoxHeading content1">{company.companyName}</h3>
                      <p className="content1">50+ Available</p>
                    </div>
                    ))}
                  </div>
                  <div id="innerRightCompaniesCard" className="innerCompaniesCard">
                    {companiesData.slice(2, 4).map((company, index) => (
                    <div className="companiesContentBox companiesBox cB1" key={index}>
                      <img className="iconSize" src={company.companyLogo} alt="" />
                      <h3 className="contentBoxHeading content1">{company.companyName}</h3>
                      <p className="content1">50+ Available</p>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 4*/}

        <section>
          <div id="sec4MainContainer">
            <img id="temp4img" src={templet4} alt="" />
            <div id="sec4ContentContainer">
              <div id="sec4LeftContainer">
                <h2 className="sec4HeadMargin">Looking for a Job?</h2>
                <h4 className="sec4Margin">
                  Discover promising career paths with our efficient job search platform—quickly connect with opportunities and streamline your journey toward professional fulfillment.
                </h4>
                <Link to={"/Browse"}>
                <button id="temp4Leftbtn" className="temp4btn">Browse Job</button>
                </Link>
                
              </div>
              <div id="sec4RightContainer">
                <h2 className="sec4HeadMargin">Looking for a Experts</h2>
                <h4 className="sec4Margin">
                  We offer personalized one-on-one career guidance sessions conducted by our expert advisors through our online platform.
                </h4>
                <button id="temp4Rightbtn" className="temp4btn">
                 Career Advice
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* section 6 */}
        </div>
      )}
      
      <FooterHomepage/>
      </div>
        {confirmationModal ? (<ConfirmationModal modalData={confirmationModal} />) : (
        <></>
      )}
    </div>
    
  )
}

export default Home
