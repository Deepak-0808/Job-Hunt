import React from 'react'
import './CareerAdvice.css'
import Footer from "./Footer";
import templet1 from "../Img/homepage/browseJobtTemplet1.png"
import backward from "../Img/icon/backward.png";
import forward from "../Img/icon/forward.png";
import candi1 from "../Img/candidates/2.png";
import candi2 from "../Img/candidates/1.png";
import candi3 from "../Img/candidates/3.png";
import candi4 from "../Img/candidates/4.png";

const CareerAdvice = () => {
  return (
    <div>
      <div>
      <section id="section1">
          <div id="heroSectionImg">
            <img className=" h-[300px] w-full" src={templet1} alt="loading" />
            <div id="innerHeroSection">
              <h3 id="jobListedH3" className="jobListed">
                Your Career, Your Way!
              </h3>
              <p className="jobListed">
                Shape Your Career with Personalized Advice for Your Journey Ahead
              </p>
            </div>
          </div>
        </section>
        <section>
          <div id="candiMainContainer">
            <div id="candiInnerContainer">
              <div className="candiFlexClass">
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi1} alt="" />
                  <div class="CandiName">Hritik Raushan</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi2} alt="" />
                  <div class="CandiName">Mukul Pratap Singh</div>
                  <div class="CandiProfile">Frontend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi3} alt="" />
                  <div class="CandiName">Manish Kumar</div>
                  <div class="CandiProfile">Software Engineer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi4} alt="" />
                  <div class="CandiName">Deepak Kumar</div>
                  <div class="CandiProfile">FullStack Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
              </div>
              <div className="candiFlexClass">
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi1} alt="" />
                  <div class="CandiName">Hritik Raushan</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi2} alt="" />
                  <div class="CandiName">Mukul Pratap Singh</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi3} alt="" />
                  <div class="CandiName">Manish Kumar</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi4} alt="" />
                  <div class="CandiName">Deepak Kumar</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
              </div>
              <div className="candiFlexClass">
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi1} alt="" />
                  <div class="CandiName">Hritik Raushan</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi2} alt="" />
                  <div class="CandiName">Mukul Pratap Singh</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi3} alt="" />
                  <div class="CandiName">Manish Kumar</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
                <div className="candiCard">
                  <img className="CandiIconSize" src={candi4} alt="" />
                  <div class="CandiName">Deepak Kumar</div>
                  <div class="CandiProfile">Backend Developer</div>
                  <button className='bookApointment'>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mainContainerPageNumber">
            <div className="innerContainerPageNumber">
              <div className=" pageNumberCircle">
                <img className="moveIcon" src={backward} alt="" />
              </div>
              <div  className="currentPage pageNumberCircle">
                <div>1</div>
              </div>
              <div className="pageNumberCircle">
                <div>2</div>
              </div>
              <div className="pageNumberCircle">
                <div>3</div>
              </div>
              <div className="pageNumberCircle">
                <img className="moveIcon" src={forward} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>


      <Footer/>
    </div>
  )
}

export default CareerAdvice