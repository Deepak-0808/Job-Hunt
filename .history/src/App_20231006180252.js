import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom';
import  Home  from "./components/Home";
import  Footer  from "./components/Footer";
import HeroSection from "./components/HeroSection";
import  Candidates  from "./components/Candidates";
import  NotFound  from "./components/NotFound";
import Browse from './components/Browse';
import MainHeader from './components/MainHeader';
import searchIcon from "./Img/homepage/searchIcon.svg";


function App() {
  return (
    <div className="App">
      {/* <nav >
        <ul id='navbar'>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/Browse">Browsejob</NavLink>
          </li>
          <li>
          <NavLink to="/Candidates">Candidates</NavLink>
          </li>
        </ul> 
      </nav> */}

      <section>
        <nav id="navMain">
            <ul id="navBar">
              <div id="navLeft">
                <img id="searchIcon" className="navLeftClass" src={searchIcon} alt="" />
                <h4 id="jobSearch" className="navLeftClass">Job Search</h4>
              </div>
              <div id="navCenter">
                <li id="home">
                <NavLink className="c" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink style={{ listStyle: 'circle' }} className="c" to="/Browse">Browsejob</NavLink>
                </li>
                <li>
                  <NavLink className="c" to="/Candidates">Candidates</NavLink>
                </li>
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

        <HeroSection/>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route index element={<Home/>}/>
        <Route path="/browse" element={<Browse/>} />
        <Route path="/candidates" element={<Candidates/>} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      

      <Footer/>
    </div>
  );
}

export default App;
