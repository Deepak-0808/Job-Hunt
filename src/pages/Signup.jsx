import React from 'react'
import './Signup.css'
import sideImg from '../Img/svg/signupimg.svg';
import {NavLink} from 'react-router-dom';
import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../services/operations/authAPI"
import { setSignupData } from "../slices/authSlice"
import { ACCOUNT_TYPE } from "../utils/constants"
// import Tab from "../components/common/Tab"


const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.USER)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // const { firstName, lastName, email, password, confirmPassword } = formData
  const { fullName, email, password, confirmPassword } = formData
  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password" && value !== "") {
      checkPasswordStrength(value);
    } else {
      setPasswordStrength("");
    }
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.USER)
  }

 
  // const tabData = [
  //   {
  //     id: 1,
  //     tabName: "Student",
  //     type: ACCOUNT_TYPE.STUDENT,
  //   },
  //   {
  //     id: 2,
  //     tabName: "Instructor",
  //     type: ACCOUNT_TYPE.INSTRUCTOR,
  //   },
  // ]


    const [passwordStrength, setPasswordStrength] = useState("")

    const checkPasswordStrength = (password) => {
      let strength = "weak";
      
      if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
        strength = "strong";
      } else if (password.length >= 6 && (/[a-z]/.test(password) || /[A-Z]/.test(password) || /\d/.test(password))) {
        strength = "medium";
      }

      setPasswordStrength(strength);
    };

    



  return (
    <div>
        <div id='signUpMainContainer'>
            <div id='leftContainer'>
               <img id='sideImage' src={sideImg}  alt="error" />
            </div>
            <div id='rightContainer'>
                <div id='rightContainerInnerbox'>
                    <h2><center className=' font-bold text-2xl mb-12'>Create your account</center></h2>
                    {/* <Tab tabData={tabData} field={accountType} setField={setAccountType} /> */}
                    <form onSubmit={handleOnSubmit} action="" id='form'>
                        
                        <label htmlFor="fullName">Full Name <sup className="text-pink-200">*</sup></label>
                        <input onChange={handleOnChange} value={fullName} className='signupInput' placeholder='Name' type="text" name="fullName" id="fullName" required />

                        <label htmlFor="email">Email <sup className="text-pink-200">*</sup></label>
                        <input onChange={handleOnChange} value={email} className='signupInput' placeholder="Email" type="text" name="email" id="email" required/>

                        <label className="relative" htmlFor="password">Password <sup className="text-pink-200">*</sup>
                        
                          <input onChange={handleOnChange} value={password} type={showPassword ? "text" : "password"} className='signupInput' name="password" id="password" placeholder="Password" required/>
                            <span onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute top-[50px] phone:top-[40px] right-3 cursor-pointer">
                                {showPassword ? (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                ) : (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                )}
                            </span>
                          </label>
                        <label className="relative" htmlFor="confirmPassword">Confirm Password <sup className="text-pink-200">*</sup>
                        
                          <input onChange={handleOnChange} value={confirmPassword} type={showConfirmPassword ? "text" : "password"} className='signupInput' placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" required/>
                          <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute top-[50px] phone:top-[40px]  right-3 cursor-pointer">
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                            </span>

                        </label>

                        <div className=' passStrMainContainer'>
                          <div>Password strength</div>
                          <div className="password-strength">
                            <div className={`strength ${passwordStrength === 'weak' && 'weak'}`}></div>
                            <div className={`strength ${passwordStrength === 'medium' && 'medium'}`}></div>
                            <div className={`strength ${passwordStrength === 'strong' && 'strong'}`}></div>
                          </div>
                        </div>
                       
                        
                        <div id='policySignup'>
                            <input type="checkbox" name="policy" id="checkboxSignup"/>
                            <div>I agree the private policy</div>
                        </div>
                        <button id='signupBtn' type="submit">Sign Up</button>
                    </form>
                        <div id='innerfooterSignup'>
                            <div>Do you have account?</div>
                            <NavLink to="/signin" className="navlinkSignin" >
                                <div id='login'>Sign In</div>
                            </NavLink>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup


