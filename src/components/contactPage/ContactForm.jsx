import React from 'react'
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div>
        <div className="bg-white p-7 lg:p-14 flex gap-3 flex-col border  border-[blue] rounded-md
                         tablet:p-5 phone:p-3 ">
            <h1 className=" text-4xl leading-10 font-semibold
                             tablet:text-2xl phone:text-lg">
                Got a Idea? We&apos;ve got the skills. Let&apos;s team up
            </h1>
            <p className=" tablet:text-lg phone:text-sm">
                Tell us more about yourself and what you&apos;re got in mind.
            </p>

            <div className="mt-7 tablet:mt-4 phone:mt-2">
                <ContactUsForm/>
            </div>
        </div>
    </div>
  )
}

export default ContactForm