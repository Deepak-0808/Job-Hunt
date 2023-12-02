import React from 'react'
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div>
        <div className=" bg-white p-7 lg:p-14 flex gap-3 flex-col border  border-[blue] rounded-md">
            <h1 className=" text-4xl leading-10 font-semibold">
                Got a Idea? We&apos;ve got the skills. Let&apos;s team up
            </h1>
            <p className="">
                Tell us more about yourself and what you&apos;re got in mind.
            </p>

            <div className="mt-7  ">
                <ContactUsForm />
            </div>
        </div>
    </div>
  )
}

export default ContactForm