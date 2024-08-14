const { contactUsEmail } = require("../mail/templates/contactFormRes")
const mailSender = require("../utils/mailSender")
const Contact = require("../models/Contact");
const User = require("../models/User");
const Subscribe = require("../models/Subscribe");

exports.contactUsController = async (req, res) => {
  // console.log(req.body)
  const userId=req.user.id
  const { email, fullname, message, phoneNo, countrycode } = req.body
  
  try {

    // console.log("userID",userId)
    const userData = await User.findById(userId)
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User Data Not Found",
      })
    }
    const newContact = await Contact.create({
      fullname,
      email,
      phoneNo,
      countrycode,
      message,
      user: userId,

    })

    if (!newContact) {
      return res.status(404).json({
        success: false,
        message: "Data not added to Database",
      })
    }


    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, fullname, message, phoneNo, countrycode)
    )
    // console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}


// bookMarkController

exports.bookMarkController = async (req, res) => {
  const jobID= req.body.jobData
  const userId=req.user.id
  try {
    const userData = await User.findById(userId)
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User Data Not Found",
      })
    }

    // Check if the jobID already exists in the savedJob array
    if (userData.savedJob.includes(jobID)) {
      return res.status(400).json({
        success: false,
        message: "Job already saved",
      });
    }


    userData.savedJob.push(jobID); // Push the new jobID into the 'savedJob' array
    
    const updatedUser = await userData.save(); // Save the updated user data
    
    if (!updatedUser) {
      return res.status(500).json({
        success: false,
        message: "Failed to save job to user profile",
      });
    }

    return res.json({
      success: true,
      message: "Job Saved successfully",
    })
  } catch (error) {
    return res.json({
      success: false,
      error: error,
      message: error.message,
    })
  }
}

// subscribe user

exports.subscribeController = async (req, res) => {
  // console.log(req.body)
  const { email} = req.body
  
  
  try {

    // Check if user already exists
		const existingEmail = await Subscribe.findOne({email});

		if (existingEmail) {
			return res.status(400).json({
				success: false,
				message: "You have already subscribed!",
			});
		}
    const user = await Subscribe.create({
      email
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not added",
      })
    }

    return res.json({
      success: true,
      message: "Subscribed successfully",
    })
  } catch (error) {
    // console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
