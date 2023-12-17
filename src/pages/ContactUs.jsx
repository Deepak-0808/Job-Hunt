import React from 'react'
import './ContactUs.css'
import templet1 from "../Img/homepage/browseJobtTemplet1.png"
import contactus from "../Img/svg/contactus.svg"
import ContactForm from '../components/contactPage/ContactForm';
import Footer from "./Footer"


const ContactUs = () => {
  return (
    <div>
        <section id="section1">
          <div id="heroSectionImg">
            <img className="temp1ContactUs" src={templet1} alt="loading" />
            <div id="innerHeroSection">
              <h3 id="jobListedH3" className="jobListed">
                Get in Touch
              </h3>
              <p className="jobListed">
                Connect with Us: Your Questions, Our Solutions.
              </p>
            </div>
          </div>
        </section>
        <div className=' w-[100vw] flex bg-richwhite contactFormMainContainer'>
          <div className=' w-[50%] pb-[20px] flex justify-center align-middle contactFormImgContainer'>
            <img src={contactus} alt="error" className='w-[85%]'/>
          </div>
          <div className=' w-[50%] pl-[3vw] pr-[3vw] contactFormInputContainer'>
            <ContactForm/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs