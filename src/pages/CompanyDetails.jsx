import React from 'react'
import templet1 from "../Img/homepage/browseJobtTemplet1.png"
import location from "../Img/icon/location.png"
import blackCircle from "../Img/icon/black-circle.png";
import instagram from "../Img/icon/instagram.png";
import "./CompanyDetails.css"
import { SlArrowLeftCircle } from "react-icons/sl";

const CompanyDetails = ({ companyData,jobData, onClose }) => {
  return (
    <div>
        {/* herosection */}
       <section id="section1">
          <div id="heroSectionImg">
            <img className=" h-[300px] w-full" src={templet1} alt="loading" />
            <div id="innerHeroSection">
              <h3 id="jobListedH3" className="jobListed">
                {
                    companyData.companyName
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
                                    <div id='companyName' className='companyAllTitle'>{companyData.companyName}</div>
                                    <div className='flexBox lI-LN'>
                                        <img id='locationIcon' className='iconSizeCompanies' src={location} alt="" />
                                        <div id='locationName' className='companyPara'>{companyData.companyLocation}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='companyAllTitle'>Company Description</div>
                            <p className='companyPara'>{companyData.companyDescription}</p>
                            <div className='companyAllTitle'>Job Description</div>
                            <p className='companyPara'>{jobData.description}</p>
                            <div className='companyAllTitle'>Responsibilty</div>
                            <p className='companyPara'>{jobData.responsibilty}</p>
                        </div>
                        <div id='companyRightContainer'>
                            <div id='companyRightUpperContainer'>
                                <div className='companyAllTitle'>Company Summary</div>
                                <div className='line'></div>
                                <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                    <img className='iconSizeCompanies'  src={blackCircle} alt="" />
                                    <div className='rightMargin'>Address:</div>
                                    <div>{companyData.companyLocation}</div>
                                </div>
                                <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                    <img className='iconSizeCompanies' src={blackCircle} alt="" />
                                    <div className='rightMargin'>Email:</div>
                                    <div>{companyData.companyEmail}</div>
                                </div>
                                <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                    <img className='iconSizeCompanies' src={blackCircle} alt="" />
                                    <div className='rightMargin'>Phone No:</div>
                                    <div>+91-{companyData.companyContactNumber}</div>
                                </div>
                                <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                    <img className='iconSizeCompanies' src={blackCircle} alt="" />
                                    <div className='rightMargin'>Website URL:</div>
                                    <div className=' overflow-scroll'>{companyData.companyUrl}</div>
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
                        </div>
                        
                    </div>
                </div>
            </section>
    </div>
    
  )
}

export default CompanyDetails