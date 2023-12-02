import React from 'react'
import './Browse.css'

// import templet1 from "../Img/homepage/1.svg";
import location from "../Img/icon/location.png"
import clock from "../Img/icon/clock.png"
import bookMark from "../Img/icon/bookmark.png"
import shoppy from "../Img/icon/shoppy.png";
// import webDesign from "../Img/icon/designer.png";
// import marketing from "../Img/icon/social-media.png";
// import scriptWritter from "../Img/icon/creative-writing.png";
import deribble from "../Img/icon/deribble.png";
// import webtoon from "../Img/icon/webton.png";
import tcs from "../Img/icon/tcs.jpeg";
import programmer from "../Img/icon/programmer.png";
import backward from "../Img/icon/backward.png"
import forward from "../Img/icon/forward.png"

const Browse = () => {
  return (
    <div>
        <div id="BrowseJobMainContainer">
        

        <section>
          <div id="filterMainContainer">
            <div id="filterInnerContainer">
              <div>
                <div id="filterTitle">Filter Jobs</div>
                <div id="filterInputContainer">
                  <input
                    className="filterInputClass"
                    type="text"
                    placeholder="Search Keyword"
                  />
                  <input
                    className="filterInputClass"
                    type="text"
                    placeholder="Job Location"
                  />
                  <select className="filterInputClass selectItem">
                    <option>Experience</option>
                    <option>Fresher</option>
                    <option>1 Year</option>
                    <option>2 Year</option>
                    <option>3 Year</option>
                    <option>3 Year+</option>
                  </select>
                  <select className="filterInputClass selectItem">
                    <option>Job Type</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Work From Home</option>
                  </select>
                  
                  <button id="filterJo">Filter Job</button>
                </div>
                <div id="line"></div>
                <div id="popularSearch">
                  <div className="popularSearchBox">
                    <div>UI/UX</div>
                    <div className="iconSize">X</div>
                  </div>
                  <div className="popularSearchBox">
                    <div>Noida, India</div>
                    <div className="iconSize">X</div>
                  </div>
                  <div className="popularSearchBox box3-4">
                    <div>1 Year</div>
                    <div className="iconSize">X</div>
                  </div>
                  <div className="popularSearchBox box3-4">
                    <div>Full Time</div>
                    <div className="iconSize">X</div>
                  </div>
                  <div id="clearAll">Clear All</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id="jobMainContainer">
            <div id="jobInnerContainer">
              <div id="JobBoxMainContainer">
                <div id="JobBoxLeftSide" className="flexBox">
                  <div>
                    <img id="jobPic" src={programmer} alt="" />
                  </div>
                  <div>
                    <div id="jobTitle">Web Developer</div>
                    <div>
                      <div className="flexBox marginBox" >
                        <img className="iconSize" src={location} alt="" />
                        <div className="textSize">Chandigarh, India</div>
                      </div>
                      <div className="flexBox">
                        <img className="iconSize" src={clock} alt="" />
                        <div className="textSize">Part Time</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="JobBoxRightSide" >
                  <div className="flexBox rightSideBox">
                    <img id="bookMarkIcon" src={bookMark} alt="" />
                    <button id="applybtn">Apply Now</button>
                  </div>
                  <div className="flexBox date" >
                    <div >Date Line:</div>
                    <div id="date"> 03 Oct 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="jobMainContainer">
            <div id="jobInnerContainer">
              <div id="JobBoxMainContainer">
                <div id="JobBoxLeftSide" className="flexBox">
                  <div>
                    <img id="jobPic" src={shoppy} alt="" />
                  </div>
                  <div>
                    <div id="jobTitle">Android Developer</div>
                    <div>
                      <div className="flexBox marginBox" >
                        <img className="iconSize" src={location} alt="" />
                        <div className="textSize">Delhi, India</div>
                      </div>
                      <div className="flexBox">
                        <img className="iconSize" src={clock} alt="" />
                        <div className="textSize">Full Time</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="JobBoxRightSide" >
                  <div className="flexBox rightSideBox">
                    <img id="bookMarkIcon" src={bookMark} alt="" />
                    <button id="applybtn">Apply Now</button>
                  </div>
                  <div className="flexBox date" >
                    <div >Date Line:</div>
                    <div id="date"> 03 Oct 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="jobMainContainer">
            <div id="jobInnerContainer">
              <div id="JobBoxMainContainer">
                <div id="JobBoxLeftSide" className="flexBox">
                  <div>
                    <img id="jobPic" src={deribble} alt="" />
                  </div>
                  <div>
                    <div id="jobTitle">PHP Developer</div>
                    <div>
                      <div className="flexBox marginBox" >
                        <img className="iconSize" src={location} alt="" />
                        <div className="textSize">Bengaluru, India</div>
                      </div>
                      <div className="flexBox">
                        <img className="iconSize" src={clock} alt="" />
                        <div className="textSize">WFH</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="JobBoxRightSide" >
                  <div className="flexBox rightSideBox">
                    <img id="bookMarkIcon" src={bookMark} alt="" />
                    <button id="applybtn">Apply Now</button>
                  </div>
                  <div className="flexBox date" >
                    <div >Date Line:</div>
                    <div id="date"> 03 Oct 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="jobMainContainer">
            <div id="jobInnerContainer">
              <div id="JobBoxMainContainer">
                <div id="JobBoxLeftSide" className="flexBox">
                  <div>
                    <img id="jobPic" src={tcs} alt="" />
                  </div>
                  <div>
                    <div id="jobTitle">IOS Developer</div>
                    <div>
                      <div className="flexBox marginBox" >
                        <img className="iconSize" src={location} alt="" />
                        <div className="textSize">Gurgaon, India</div>
                      </div>
                      <div className="flexBox">
                        <img className="iconSize" src={clock} alt="" />
                        <div className="textSize">Full Time</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="JobBoxRightSide" >
                  <div className="flexBox rightSideBox">
                    <img id="bookMarkIcon" src={bookMark} alt="" />
                    <button id="applybtn">Apply Now</button>
                  </div>
                  <div className="flexBox date" >
                    <div>Date Line:</div>
                    <div id="date"> 03 Oct 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id="moveMainContainer">
            <div id="moveInnerContainer">
              <div className="circle">
                <img  className="moveIcon" src={backward} alt="" />
              </div>
              <div id="page1" className="circle"><div>1</div></div>
              <div className="circle"><div>2</div></div>
              <div className="circle"><div>3</div></div>
              <div className="circle">
                <img className="moveIcon" src={forward} alt="" />
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}

export default Browse