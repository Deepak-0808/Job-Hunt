import React from "react";
import "./Candidates.css";
import backward from "../Img/icon/backward.png";
import forward from "../Img/icon/forward.png";
import candi1 from "../Img/candidates/2.png";
import candi2 from "../Img/candidates/1.png";
import candi3 from "../Img/candidates/3.png";
import candi4 from "../Img/candidates/4.png";

const Candidates = () => {
  return (
    <div>
      <div>
        <section>
          <div id="candiMainContainer">
            <div id="candiInnerContainer">
              <div className="flexClass">
                <div className="card">
                  <img className="CandiIconSize" src={candi1} alt="" />
                  <div class="CandiName">Hritik Raushan</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
                <div className="card">
                  <img className="CandiIconSize" src={candi2} alt="" />
                  <div class="CandiName">Mukul Pratap Singh</div>
                  <div class="CandiProfile">Frontend Developer</div>
                </div>
                <div className="card">
                  <img className="CandiIconSize" src={candi3} alt="" />
                  <div class="CandiName">Manish Kumar</div>
                  <div class="CandiProfile">Software Engineer</div>
                </div>
                <div className="card">
                  <img className="CandiIconSize" src={candi4} alt="" />
                  <div class="CandiName">Deepak Kumar</div>
                  <div class="CandiProfile">FullStack Developer</div>
                </div>
              </div>
              <div className="flexClass">
                <div className="card">
                  <img className="CandiIconSize" src={candi1} alt="" />
                  <div class="CandiName">Hritik Raushan</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
                <div className="card">
                  <img className="CandiIconSize" src={candi2} alt="" />
                  <div class="CandiName">Mukul Pratap Singh</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
                <div className="card">
                  <img className="CandiIconSize" src={candi3} alt="" />
                  <div class="CandiName">Manish Kumar</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
                <div className="card">
                  <img className="iconSize" src={candi4} alt="" />
                  <div class="CandiName">Deepak Kumar</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
              </div>
              <div className="flexClass">
                <div className="card">
                  <img className="iconSize" src={candi1} alt="" />
                  <div class="CandiName">Hritik Raushan</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
                <div className="card">
                  <img className="iconSize" src={candi2} alt="" />
                  <div class="CandiName">Mukul Pratap Singh</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
                <div className="card">
                  <img className="iconSize" src={candi3} alt="" />
                  <div class="CandiName">Manish Kumar</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
                <div className="card">
                  <img className="iconSize" src={candi4} alt="" />
                  <div class="CandiName">Deepak Kumar</div>
                  <div class="CandiProfile">Backend Developer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id="moveMainContainer">
            <div id="moveInnerContainer">
              <div className="circle">
                <img className="moveIcon" src={backward} alt="" />
              </div>
              <div id="page1" className="circle">
                <div>1</div>
              </div>
              <div className="circle">
                <div>2</div>
              </div>
              <div className="circle">
                <div>3</div>
              </div>
              <div className="circle">
                <img className="moveIcon" src={forward} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Candidates;
