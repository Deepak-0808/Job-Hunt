import React from 'react'
import './SignIn.css'
import sideImg from '../Img/svg/signupimg.svg';
import {Link,useNavigate} from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/authAPI";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };



  return (
    <div>
        <div id='mainContainerSignIn'>
            <div id='leftContainerSignIn'>
               <img id='sideImage' src={sideImg}  alt="error" />
            </div>
            <div id='rightContainerSignIn'>
                <div id='rightContainerInnerboxSignIn'>
                    <h2><center className=' font-bold text-2xl mb-12 phone:text-lg tablet:text-xl'>Sign In to your Account</center></h2>
                    <form onSubmit={handleOnSubmit} action="" id='form'>
                        <label htmlFor="email">Email <sup className="text-pink-200">*</sup></label>
                        <input onChange={handleOnChange} value={email} className='signinInput' placeholder='Email' type="email" name="email" id="email" required/>

                        <label className="relative" htmlFor="password">Password <sup className="text-pink-200">*</sup>
                        <input onChange={handleOnChange} type={showPassword ? "text" : "password"} value={password} placeholder="Password" className='signinInput' name="password" id="password" required/>
                            <span onClick={() => setShowPassword((prev) => !prev)}
                                className=" absolute right-3 top-[50px] phone:top-[40px] cursor-pointer">
                                {showPassword ? (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                )}
                            </span>
                        </label>

                        <div id='checkAndForgotContainer'>
                            <div id='checkboxRemember'>
                                <input type="checkbox" name="remember" id="SignInCheckbox"/>
                                <div>Remember me</div>
                            </div>
                            <Link to="/forgot" className="signinLinkDecoration">
                                <div id='forgotbtn' className='blueClass'>Forgot Password</div>
                            </Link>
                            
                        </div>
                        <button id='btnsubmit' type="submit">SignIn</button>
                    </form>
                    <div id='signinfooter'>
                        <div>Don't have an Account? </div>
                        <Link to="/signup" className="signinLinkDecoration">
                            <div id='signupAtag'>Sign Up</div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn
