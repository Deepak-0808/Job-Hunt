import React from 'react'
import './Footer.css';
import footerTemplet from "../Img/homepage/footerTemplet.png";
import logo from "../Img/jobsmelaLogo/png/mainLogo.png"
import { Link } from 'react-router-dom';
import {subscribeUser} from "../services/operations/contactUsAPI"
import { useState } from 'react';

const FooterHomepage = () => {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await subscribeUser(email)
      setLoading(false);
      return
    } catch (error) {
      console.log(error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
        <footer>
          <div id="footerMainContainer">
            <div>
              <img id="footerItemImg" src={footerTemplet} alt="" />
            </div>
            <div className="innerFooterContainer">
                <div className="innerFooter2Container">
                    <div className="FooterLeftContainer">
                        <div className="footerSearchIcon">
                            <img id="footerIcon" className='logoSize' src={logo} alt="Search Icon" />
                        </div>
                        <h2 id="Footerfind" className="footerPara ">Find Your Dream Job</h2>
                        <p className="footerPara">Deepak Kumar</p>
                        <p className="footerPara">+91-9608001778</p>
                        <p className="footerPara">Bihar, India</p>
                    </div>
                    <div>
                        <h3 className="footerHeading">Menu</h3>
                        <Link to={"/"}>
                          <p className="footerPara">Home</p>
                        </Link>
                        <Link to={"/Browse"}>
                          <p className="footerPara">Browse Job</p>
                        </Link>
                        <Link to={"/contactus"}>
                          <p className="footerPara">Contact Us</p>
                        </Link>
                        <Link to={"/PrivacyPolicy"}>
                          <p className="footerPara">Our Privacy Policy</p>
                        </Link>
                    </div>
                    <div id="footerEmailMainContainer">
                      <h3 className="footerHeading">Subscribe</h3>
                      <div id="footerSubsEmailContainer">
                        <input
                          type="email"
                          name="email"
                          id="subscribeEmail"
                          placeholder="Email"   

                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Subscribe</button>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default FooterHomepage