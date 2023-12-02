import React from 'react'
import blackCircle from "../Img/icon/black-circle.png";
import instagram from "../Img/icon/instagram.png";
import templet1 from "../Img/homepage/browseJobtTemplet1.png"
import location from "../Img/icon/location.png"
import { SlArrowLeftCircle } from "react-icons/sl";

const JobViewDetails = ({ companyData,jobData, onClose }) => {
  return (
    <div>
    {/* herosection */}
   <section id="section1">
      <div id="heroSectionImg">
        <img className=" h-[300px] w-full" src={templet1} alt="loading" />
        <div id="innerHeroSection">
          <h3 id="jobListedH3" className="jobListed">
            {
                jobData.jobTitle
            }
          </h3>
        </div>
      </div>
    </section>


    <section>
            <div className='flex bg-richwhite justify-left  pl-[5.5vw]'>
                <SlArrowLeftCircle onClick={onClose} className="cursor-pointer" style={{ fontSize: '3vw' }} />
            </div>
            <div id='mainContainerCompanies' >
                <div id='innerContainerCompanies'>
                    <div id='companyLeftContainer'>
                        <div className='flexBox'>
                            <div>
                                <img id='companyIcon' src={companyData.companyLogo} alt="" />
                            </div>
                            <div>
                                <div id='companyName' className='companyAllTitle'>{jobData.jobTitle}</div>
                                <div className='flexBox lI-LN'>
                                    <img id='locationIcon' className='iconSizeCompanies' src={location} alt="" />
                                    <div id='locationName' className='companyPara'>{companyData.companyLocation}</div>
                                </div>
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='companyAllTitle'>Job Description</div>
                        <p className='companyPara'>{jobData.description}</p>
                        <div className='companyAllTitle'>Responsibility</div>
                        <p className='companyPara'>{jobData.responsibilty}</p>
                        <div className='companyAllTitle'>Qualification</div>
                        <p className='companyPara'>{jobData.qualification}</p>
                    </div>
                    <div id='companyRightContainer'>
                        <div id='companyRightUpperContainer'>
                            <div className='companyAllTitle'>Job Summary</div>
                            <div className='line'></div>
                            <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                <img className='iconSizeCompanies'  src={blackCircle} alt="" />
                                <div className='rightMargin'>Published on:</div>
                                <div>{jobData.publishedDate}</div>
                            </div>
                            <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                <img className='iconSizeCompanies'  src={blackCircle} alt="" />
                                <div className='rightMargin'>Vacancy:</div>
                                <div>{jobData.totalVacancy} Position</div>
                            </div>
                            <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                <img className='iconSizeCompanies'  src={blackCircle} alt="" />
                                <div className='rightMargin'>Salary:</div>
                                <div>{jobData.salary} k/y</div>
                            </div>
                            <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                <img className='iconSizeCompanies'  src={blackCircle} alt="" />
                                <div className='rightMargin'>Location:</div>
                                <div>{jobData.location}</div>
                            </div>
                            <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                <img className='iconSizeCompanies'  src={blackCircle} alt="" />
                                <div className='rightMargin'>Job Type:</div>
                                <div>{jobData.jobType}</div>
                            </div>
                        </div> 
                        <div className='companyRightLowerContainer'>
                            <div className='rightCompanyPara flexBox socialMedia'>
                               <div className='rightMargin'>Media Account:</div>
                               <img className='rightMargin' src={companyData.linkedInUrl} alt="" />
                               <img className='rightMargin' src={instagram} alt="" />
                               <img className='rightMargin' src={companyData.twitterUrl} alt="" />
                            </div>   
                        </div>
                        <button id="applybtn" className=' w-full mt-[1.6vw]'>
                            <a href={companyData.companyUrl} target="_blank" rel="noopener noreferrer ">
                              Apply Now</a>
                          </button>
                    </div>
                    
                </div>
            </div>
        </section>
</div>
  )
}

export default JobViewDetails