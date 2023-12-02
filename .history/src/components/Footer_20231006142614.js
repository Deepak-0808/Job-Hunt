import React from 'react'
import './Footer.css';
import templet6 from "../Img/homepage/6.png";
import searchIcon from "../Img/homepage/searchIcon.svg";

const Footer = () => {
  return (
    <div>
        <footer>
          <div id="footerMainContainer">
            <div>
              <img id="footerItemImg" src={templet6} alt="" />
            </div>
            <div className="innerFooterContainer">
              <div className="innerFooter2Container">
                <div className="FooterLeftContainer">
                  <div className="footerSearchIcon">
                    <img id="footerIcon" src={searchIcon} alt="Search Icon" />
                    <h3>Job Search</h3>
                  </div>
                  <h2 id="Footerfind" className="footerPara ">Find Your Dream Job</h2>
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
                  <div id="footeremailMainContainer">
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
        </footer>
    </div>
  )
}

export default Footer