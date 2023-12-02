import React from 'react'
import './Footer.css';
import templet6 from "../Img/homepage/6.png";
import logo6 from "../Img/Logo/logo6.png"
import {
  fetchJobCategories
} from "../services/operations/jobDetailsAPI"
import { useState } from 'react';  
import { useEffect } from 'react';


const Footer = () => {

  const[jobCategories,setJobCategories] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getCategories = async () => {
          setLoading(true)
          const categories = await fetchJobCategories()
          setLoading(false)
          if (categories.length > 0) {
            setJobCategories(categories.slice(0, 4));
          }
        }
    getCategories()
    
    }, [])  

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
                    <img id="footerIcon" className='logoSize' src={logo6} alt="Search Icon" />
                    <h3 className='footerJobSearch'>Job Hunt</h3>
                  </div>
                  <h2 id="Footerfind" className="footerPara ">Find Your Dream Job</h2>
                  <p className="footerPara">Deepak Kumar</p>
                  <p className="footerPara">+91-9608001778</p>
                  <p className="footerPara">Bihar, India</p>
                </div>
                <div>
                  <h3 className="footerHeading">Category</h3>
                  {jobCategories.slice(0, 4).map((category, index) => (
                    <div key={index}>
                      <p className="footerPara">{category.name}</p>
                    </div>
                  ))}
                </div>
                <div id="footerEmailMainContainer">
                  <h3 className="footerHeading">Subscribe</h3>
                  <div id="footerSubsEmailContainer">
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
        </footer>
    </div>
  )
}

export default Footer