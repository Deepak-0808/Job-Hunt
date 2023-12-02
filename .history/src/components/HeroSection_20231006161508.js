import React from 'react'
import './HeroSection.css';
import templet1 from "../Img/homepage/1.svg";

const HeroSection = () => {
  return (
    <div>

        <div>
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
        </div>
        

    </div>
  )
}

export default HeroSection