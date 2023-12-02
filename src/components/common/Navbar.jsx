import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo5 from "../../Img/Logo/logo5.png"
import { useSelector } from 'react-redux';
import {NavbarLinks} from "../../data/navbar-links"
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { useEffect } from 'react';
import { categories } from '../../services/apis2';
import { apiConnector } from '../../services/apiConnector';



const Navbar = () => {

  const {token}= useSelector((state)=>state.auth);


  const fetchSublinks=async()=>{
      try{
        const result= await apiConnector("GET",categories.CATEGORIES_API);
        console.log("Printing category list:",result);
      }
      catch(error){
        console.log("Could not fetch the category list",error);
      }
  }
  

  useEffect(()=>{
    fetchSublinks();
  },[])

  return (
    <div>
        <section>
        <nav id="navMain">
            <ul id="navBar">
              <div id="navLeft" className="navLeftClass">
                <Link to={"/"}>
                <img id="searchIcon" className='logoSize' src={logo5} alt="" />
                </Link>
                
                <h4 id="jobSearch" >Job Hunt</h4>
              </div>
              
                <div id="navCenter">  
                    {
                      NavbarLinks.map((link,index)=>(
                        <li key={index}>
                          {
                            <Link to={link?.path} className="navlinkColor">
                            <p>
                              {link.title}
                            </p>
                          </Link>
                          }
                        </li>
                      ))
                    }
                </div>
                
              
              <div id="navRightSide">
                {
                  token === null &&(
                    <Link to="/signin" className="navlinkColor">
                        <button id="signinbtn"  className="signinBtn">
                          Sign In
                        </button>
                    </Link>
                  )
                }
                {
                  token===null&&(
                    <Link to="/signup" className="navlinkColor">
                        <button id="signupbtn"  className="navRightBtn">
                          Sign Up
                        </button>
                    </Link>
                  )
                }
                {
                  token!=null&& <ProfileDropDown/>
                }

              </div>
            </ul>
          </nav>

          
        </section>
    </div>
  )
}

export default Navbar