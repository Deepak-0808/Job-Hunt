import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import { useSelector } from 'react-redux'
import CountryCode from "../../data/countrycode.json"
import ConfirmationModal from "../common/ConfirmationModal"
import { useNavigate} from "react-router-dom"
import {addUserIdea} from "../../services/operations/contactUsAPI"




const ContactUsForm = () => {

    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    

    const [loading, setLoading] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(null)
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async(data) => {
        console.log("Logging Data" , data);
        try{
            
            // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
            if (token) {
                // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
                //   BuyCourse(token, user, navigate, dispatch)
                setLoading(true);
                console.log("add user idea api before response ");
                const result = await addUserIdea(data,token)
                setLoading(false);
                console.log("add user idea api response", result);
                  return
                }

                setConfirmationModal({
                    text1: "You are not logged in!",
                    text2: "Please login to submit",
                    btn1Text: "Login",
                    btn2Text: "Cancel",
                    btn1Handler: () => navigate("/signin"),
                    btn2Handler: () => setConfirmationModal(null),
                  }) 
            
        }
        catch(error) {
            console.log("Error:" , error.message);
            setLoading(false);
        }
    }

    useEffect( () => {
        if(isSubmitSuccessful) {
            reset({
                email:"",
                fullname:"",
                message:"",
                phoneNo:"",
            })
        }
    },[reset, isSubmitSuccessful] );

    
  return (

    <div className=''>
        <form 
            className="flex flex-col gap-7 "
            onSubmit={handleSubmit(submitContactForm)}>

            <div className='flex flex-col gap-2'>
                {/* Full Name */}
                <label htmlFor='fullname'>Full Name <sup className="text-pink-200">*</sup></label>
                <input  
                    type='text'
                    name='fullname'
                    id='fullname'
                    placeholder='Enter full name'
                    className="block p-[14px] text-black outline-none border  border-[blue] rounded-md"
                    {...register("fullname", {required:true})}
                />
                {
                    errors.fullname && (
                    <span>
                        Please enter Your name
                    </span>
                    )
                }
            </div>
            {/* email */}
            <div className='flex flex-col gap-2'>
                <label htmlFor='email'>Email <sup className="text-pink-200">*</sup></label>
                <input 
                    type='email'
                    name='email'
                    id='email'
                    className='block p-[14px] text-black outline-none border border-[blue] rounded-md'
                    placeholder='Enter email Address'
                    {...register("email", {required:true})}
                />
                {
                    errors.email && (
                        <span>
                            Please enter your email address
                        </span>
                    )
                }
            </div>

                    {/* phoneNo */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='phonenumber'>Phone Number <sup className="text-pink-200">*</sup></label>
                        <div className='flex flex-row gap-2'>
                            {/* dropdown */}
                        
                                <select
                                    name='dropdown'
                                    id="dropdown"
                                    className='w-[25%] cursor-pointer block p-[14px] text-black outline-none border  border-[blue] rounded-md'
                                    {...register("countrycode", {required:true})}
                                >
                                    {
                                        CountryCode.map( (element , index) => {
                                            return (
                                                <option key={index} value={element.code}>
                                                    {element.code} -{element.country}
                                                </option>
                                            )
                                        } )
                                    }
                                </select>
                                
                                <input
                                    type='number'
                                    name='phonenumber'
                                    id='phonenumber'
                                    placeholder='12345 67890'
                                    className='w-[75%] block p-[14px] text-black outline-none border  border-[blue] rounded-md'
                                    {...register("phoneNo",  
                                    {
                                        required:{value:true, message:"Please enter Phone Number"},
                                        maxLength: {value:10, message:"Invalid Phone Number"},
                                        minLength:{value:8, message:"Invalid Phone Number"} })}
                                />
                        
                        </div>
                        {
                            errors.phoneNo && (
                                <span>
                                    {errors.phoneNo.message}
                                </span>
                            )
                        }

                    </div>

                    {/* message */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='message'>Message <sup className="text-pink-200">*</sup></label>
                        <textarea 
                            name='message'
                            id='message'
                            cols="30"
                            className='text-black block p-[14px] outline-none border  border-[blue] rounded-md'
                            rows="5"
                            placeholder='Enter Your message here'
                            {...register("message", {required:true})}
                        />
                        {
                            errors.message && (
                                <span>
                                    Please enter your message.
                                </span>
                            )
                        }
                    </div>
                        
                    <button type='submit'
                        className='rounded-md  bg-black text-white text-center p-[11px] cursor-pointer font-bold'
                    >
                        Send Message
                    </button>

        </form>
        {confirmationModal ? (<ConfirmationModal modalData={confirmationModal} />) : (
        <></>
      )}
    </div>
    
   
  )
}

export default ContactUsForm
