import React from 'react'
// import { Outlet } from 'react-router-dom';
import './Home.css'

import searchIcon from "../Img/homepage/searchIcon.svg";
import templet1 from "../Img/homepage/1.svg";
import templet2 from "../Img/homepage/2.png";
import templet3 from "../Img/homepage/3.png";
import templet4 from "../Img/homepage/4.png";
import templet5 from "../Img/homepage/5.png";
// import templet6 from "../Img/homepage/6.png";
import webDesign from "../Img/icon/designer.png";
import programmer from "../Img/icon/programmer.png";
import marketing from "../Img/icon/social-media.png";
import scriptWritter from "../Img/icon/creative-writing.png";
import deribble from "../Img/icon/deribble.png";
import shoppy from "../Img/icon/shoppy.png";
import webtoon from "../Img/icon/webton.png";
import tcs from "../Img/icon/tcs.jpeg";
import mainimg from "../Img/candidates/mainImg.jpg";
import testimonial1 from "../Img/candidates/1.png";
import testimonial2 from "../Img/candidates/2.png";
import testimonial3 from "../Img/candidates/3.png";
import testimonial4 from "../Img/candidates/4.png";
import testimonial5 from "../Img/candidates/5.png";
import testimonial6 from "../Img/candidates/6.png";
import testimonial7 from "../Img/candidates/7.png";


const Home = () => {
    
  return (
    <div>
    <div m>
      <div id="mainContainer">
        {/* Navigation Bar */}
        <section>
          <nav id="navMain">
            <ul id="navBar">
              <div id="navLeft">
                <img id="searchIcon" className="navLeftClass" src={searchIcon} alt="" />
                <h4 id="jobSearch" className="navLeftClass">Job Search</h4>
              </div>
              <div id="navCenter">
                <li id="home">Home</li>
                <li>BrowseJob</li>
                <li>Candidates</li>
                <li>About</li>
              </div>
              <div id="navRightSide">
                <a id="signIn" className="navRightSideClass" href="SignIn.html">
                  Sign In
                </a>
                <button id="navRightBtn" className="navRightSideClass">
                  Post a Job
                </button>
              </div>
            </ul>
          </nav>
        </section>

        {/* herosection */}
        <section id="section1">
          <div id="heroSectionImg">
            <img id="heroimg" src={templet1} alt="loading" />
            <div id="innerHeroSection">
              <h3 id="jobListedH3" className="jobListed">
                7457+ Job Listed
              </h3>
              <h2 id="dreamJob" className="jobListed">
                Find Your Dream Job
              </h2>
              <p className="jobListed">
                We provide online instant cash loans with quick approval that
                suite your team length
              </p>
              <button id="innerHeroSectionBtn">Browser Job</button>
            </div>
          </div>
        </section>

        {/* content section2 */}
        <section id="section2">
          <div id="mainContent">
            <div id="container">
              <div id="inputContainer">
                <input className="inputClass" type="text" placeholder="Search Keyword"/>
                <input className="inputClass" type="text" placeholder="Job Location"/>
                <select className="inputClass">
                  <option>Category</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Work From Home</option>
                </select>
                <select className="inputClass">
                  <option>Experience</option>
                  <option>Fresher</option>
                  <option>1 Year</option>
                  <option>2 Year</option>
                  <option>3 Year</option>
                  <option>3 Year+</option>
                </select>
                <button id="findBtn">Find Job</button>
              </div>
              <div id="popularSearch">
                <div id="popularHead">Popular Search:</div>
                <div className="popularSearchItem">Web Developer</div>
                <div className="popularSearchItem">PHP Developer</div>
                <div className="popularSearchItem">UI/UX</div>
              </div>
            </div>
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
                  <div className="contentBox box">
                    <img className="iconSize" src={webDesign} alt="" />
                    <h3 className="contentBoxHeading content1">Web Design</h3>
                    <p className="content1">50+ Available</p>
                  </div>
                  <div className="contentBox ">
                    <img className="iconSize" src={programmer} alt="" />
                    <h3 className="contentBoxHeading content1">Programmer</h3>
                    <p className="content1">50+ Avilable</p>
                  </div>
                </div>
                <div id="leftContentRightBox">
                  <div className="contentBox box ">
                    <img className="iconSize" src={marketing} alt="" />
                    <h3 className="contentBoxHeading content1">Marketing</h3>
                    <p className="content1">50+ Available</p>
                  </div>
                  <div className="contentBox box4">
                    <img className="iconSize" src={scriptWritter} alt="" />
                    <h3 className="contentBoxHeading content1">
                      Script Writer
                    </h3>
                    <p className="content1">50+ Available</p>
                  </div>
                </div>
              </div>
              <div id="rightContent">
                <div id="rightContentInnerBox">
                  <h2>Popular Category</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor sapiente eos quis non repudiandae aliquam ad quidem
                    veniam quisquam, blanditiis nisi facere qui adipisci
                    doloribus quo? Placeat magni esse iusto? Dolorem sint quasi
                    aut deserunt porro culpa, facilis ab aperiam laboriosam
                    quam.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    debitis ex tempora vero quibusdam rerum, inventore porro,
                    assumenda, temporibus iusto beatae dolores magnam aut eaque
                    ut qui ullam quidem nulla. Nulla temporibus voluptas fugiat
                    et, consequuntur soluta dignissimos, impedit fugit fuga id
                    quaerat cum quidem minima sunt a! Quia culpa sint quos.
                    Saepe eveniet eos, quia id dignissimos corrupti
                    consequuntur?
                  </p>
                </div>
              </div>
              <div id="rightConatCompanies">
                <div id="innerRightContentCompanies">
                  <div id="innerLeftCompaniesCard" className="innerCompaniesCard">
                    <div className="companiesContentBox companiesBox1 cB1 cb">
                      <img className="iconSize" src={webtoon} alt="" />
                      <h3 className="contentBoxHeading content1">Webtoon</h3>
                      <p className="content1">50+ Available</p>
                    </div>
                    <div className="companiesContentBox companiesBox cb">
                      <img className="iconSize" src={shoppy} alt="" />
                      <h3 className="contentBoxHeading content1">Shoppy</h3>
                      <p className="content1">50+ Available</p>
                    </div>
                  </div>
                  <div id="innerRightCompaniesCard" className="innerCompaniesCard">
                    <div className="companiesContentBox companiesBox cB1 companiesBox1">
                      <img className="iconSize" src={deribble} alt="" />
                      <h3 className="contentBoxHeading content1">Dribble</h3>
                      <p className="content1">50+ Available</p>
                    </div>
                    <div className="companiesContentBox companiesBox">
                      <img className="iconSize" src={tcs} alt="" />
                      <h3 className="contentBoxHeading content1">TCS</h3>
                      <p className="content1">50+ Available</p>
                    </div>
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
                  We provide online instant cash loans with quick approval
                </h4>
                <button id="temp4Leftbtn" className="temp4btn">
                  Browser Job
                </button>
              </div>
              <div id="sec4RightContainer">
                <h2 className="sec4HeadMargin">Looking for a Experts</h2>
                <h4 className="sec4Margin">
                  We provide online instant cash loans with quick approval
                </h4>
                <button id="temp4Rightbtn" className="temp4btn">
                  Post A Job
                </button>
              </div>
            </div>
            <img id="temp5img" src={templet5} alt="" />
          </div>
        </section>

        {/* section 5 testimonial */}

        <section>
          <div id="testimonialMainContainer">
            <div className="testimonialContainer testimonialLeftContainer">
              <img id="img1" className="testImg" src={testimonial1} alt="1" />
              <img id="img2" className="testImg" src={testimonial2} alt="2" />
              <img id="img3" className="testImg" src={testimonial3} alt="3" />
              <img id="img4" className="testImg" src={testimonial4} alt="4" />
              <img id="img5" className="testImg" src={testimonial5} alt="5" />
              <img id="img6" className="testImg" src={testimonial6} alt="6" />
              <img id="img7" className="testImg" src={testimonial7} alt="7" />
              <div id="testimonialMainImgContainer">
                <img id="testimonialMainImg" src={mainimg} alt="" />
              </div>
            </div>
            <div className="testimonialContainer testimonialRightContainer">
              <h2>Testimonials</h2>
              <p>
                " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati corrupti harum asperiores minima, accusantium placeat
                dolor nihil adipisci assumenda quaerat nesciunt autem saepe
                earum quis dolorem illo consequatur, pariatur. "
              </p>
            </div>
          </div>
        </section>

        {/* section 6 */}

        {/* <footer>
          <div id="footerMainContainer">
            <div>
              <img id="footertemImg" src={templet6} alt="" />
            </div>
            <div className="innerFooterContainer">
              <div className="innerFooter2Container">
                <div className="FooterLeftContainer">
                  <div className="footerSearchIcon">
                    <img id="searchIcon" src={searchIcon} alt="Search Icon" />
                    <h3>Job Search</h3>
                  </div>
                  <h2 id="find" className="footerPara ">Find Your Dream Job</h2>
                  <p className="footerPara">Deepak Kumar</p>
                  <p className="footerPara">+91-9608001778</p>
                  <p>Bihar, India</p>
                </div>
                <div className="FooterRightContainer">
                  <div>
                    <h3 className="footerHeading">Company</h3>
                    <p className="footerPara">About</p>
                    <p className="footerPara">FAQ</p>
                    <p className="footerPara">Carrier Tips</p>
                    <p>Pricing</p>
                  </div>
                  <div>
                    <h3 className="footerHeading">Category</h3>
                    <p className="footerPara">Marketing</p>
                    <p className="footerPara">UI/UX</p>
                    <p className="footerPara">Programmer</p>
                    <p>Marketing</p>
                  </div>
                  <div id="emailMainContainer">
                    <h3 className="footerHeading">Subscribe</h3>
                    <div id="subsEmailContainer">
                      <input
                        type="email"
                        name="email"
                        id="subscribeEmail"
                        placeholder="Email"
                      />
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
    </div>
    
  )
}

export default Home
