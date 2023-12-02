import React from 'react'
import './Navbar.css';
import searchIcon from "../Img/homepage/searchIcon.svg";

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar