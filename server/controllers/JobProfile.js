const mongoose = require("mongoose")
const Profile = require("../models/Profile")
const Job = require("../models/JobDetail");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader")


exports.updateProfile = async (req, res) => {
    try {
      const {
        fullName = "",
        dateOfBirth = "",
        about = "",
        contactNumber = "",
        gender = "",
      } = req.body
      const id = req.user.id
  
      // Find the profile by id
      const userDetails = await User.findById(id)
      const profile = await Profile.findById(userDetails.additionalDetails)
  
      const user = await User.findByIdAndUpdate(id, {
        fullName
      })
      await user.save()
  
      // Update the profile fields
      profile.dateOfBirth = dateOfBirth
      profile.about = about
      profile.contactNumber = contactNumber
      profile.gender = gender
  
      // Save the updated profile
      await profile.save()
  
      // Find the updated user details
      const updatedUserDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
  
      return res.json({
        success: true,
        message: "Profile updated successfully",
        updatedUserDetails,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      })
    }
  }

  exports.deleteAccount = async (req, res) => {
    try {
      const id = req.user.id
      const user = await User.findById({ _id: id })
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found in database",
        })
      }
      // Delete Assosiated Profile with the User
      await Profile.findByIdAndDelete({
        _id: new mongoose.Types.ObjectId(user.additionalDetails),
      })
      
      // Now Delete User
      await User.findByIdAndDelete({ _id: id })
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
      })
    } catch (error) {
      res.status(500)
        .json({
            success: false,
            message: "User Cannot be deleted successfully"
        })
    }
  }



  
  exports.getAllUserDetails = async (req, res) => {
    try {
      const id = req.user.id
      const userDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
      res.status(200).json({
        success: true,
        message: "User Data fetched successfully",
        data: userDetails,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }

  exports.updateDisplayPicture = async (req, res) => {
    try {
      const displayPicture = req.files.displayPicture
      const userId = req.user.id
      const image = await uploadImageToCloudinary(
        displayPicture,
        process.env.FOLDER_NAME,
        1000,
        1000
      )
      
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: userId },
        { image: image.secure_url },
        { new: true }
      )
      console.log("updated img",updatedProfile);
      res.send({
        success: true,
        message: `Image Updated successfully`,
        data: updatedProfile,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }

  exports.adminDashboard = async (req, res) => {
    try {
      const jobDetails = await Job.find({ admin: req.user.id })
  
      const jobData = jobDetails.map((job) => {
        const totalStudentsApplied = job.userApplied.length
  
        // Create a new object with the additional fields
        const jobDataWithStats = {
          _id: job._id,
          jobTitle: job.jobTitle,
          description: job.description,
          // Include other course properties as needed
          totalStudentsApplied,
        }
  
        return jobDataWithStats
      })
  
      res.status(200).json({ jobs: jobData })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Server Error" })
    }
  }
  