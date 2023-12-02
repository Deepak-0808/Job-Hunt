const Company = require("../models/JobCompany")
const Job = require("../models/JobDetail")
const { uploadImageToCloudinary } = require("../utils/imageUploader")

exports.addCompanyData = async (req, res) => {
    try {
      // Extract the required properties from the request body
      const { 
        companyName,
        jobId,
        companyLocation,
        companyDescription,
        totalEmployees,
        companyProduct,
        companyEmail,
        companyContactNumber,
        companyUrl,
        twitterUrl,
        linkedInUrl,
        } = req.body

        const companyLogo = req.files.companyLogo

      // Validate the input
      if (!companyName || 
          !jobId ||
          !companyLocation||
          !companyDescription||
          !companyEmail||
          !companyContactNumber||
          !companyLogo||
          !companyUrl
          ) {
        return res.status(400).json({
          success: false,
          message: "Missing required properties",
        })
      }
  
       // Upload the Thumbnail to Cloudinary
        const companyPhoto = await uploadImageToCloudinary(
            companyLogo,
            process.env.FOLDER_NAME
        )

        // console.log("companyPhoto",companyPhoto.secure_url);
      // add company data with the given details
    const companyData = await Company.create({
        companyName,
        companyLocation,
        companyDescription,
        totalEmployees,
        companyProduct,
        companyEmail,
        companyContactNumber,
        companyUrl,
        twitterUrl,
        linkedInUrl,
        companyLogo: companyPhoto.secure_url
      })
  
      // Add the company data to the jobs content array
      const updatedJob = await Job.findByIdAndUpdate(
        jobId,
        {
          $push: {
            companyData: companyData._id,
          },
        },
        { new: true }
      )
        .populate({
          path: "companyData"
        })
        .exec()
  
      // Return the updated job object in the response
      res.status(200).json({
        success: true,
        message: "Company Data Added successfully",
        updatedJob,
      })
    } catch (error) {
      // Handle errors
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
}


// UPDATE a CompanyData

exports.updateCompanyData = async (req, res) => {
    try {
      const {
        jobId,
        companyId,
        companyName,
        companyLocation,
        companyDescription,
        totalEmployees,
        companyProduct,
        companyEmail,
        companyContactNumber,
        companyUrl,
        twitterUrl,
        linkedInUrl
    } = req.body

    // const updates = req.body
    const companyData = await Company.findById(companyId)
    if (!companyData) {
        return res.status(404).json({
          success: false,
          message: "companyData not found",
        })
      }
        // If company logo is found, update it
    if (req.files) {
        const thumbnail = req.files.companyLogo
        const thumbnailImage = await uploadImageToCloudinary(
          thumbnail,
          process.env.FOLDER_NAME
        )
        companyData.companyLogo = thumbnailImage.secure_url
      }
  
      const fieldsToUpdate = {
        companyName,
        companyLocation,
        companyDescription,
        totalEmployees,
        companyProduct,
        companyEmail,
        companyContactNumber,
        companyUrl,
        twitterUrl,
        linkedInUrl
      };
      
      for (const field in fieldsToUpdate) {
        if (fieldsToUpdate[field] !== undefined) {
          companyData[field] = fieldsToUpdate[field];
        }
      }
    //   // Update only the fields that are present in the request body
    //   for (const key in updates) {
    //     if (updates.hasOwnProperty(key)) {
    //       if (key === "tag" || key === "instructions") {
    //         course[key] = JSON.parse(updates[key])
    //       } else {
    //         course[key] = updates[key]
    //       }
    //     }
    //   }
  
      await companyData.save();

      const companyUpdatedData = await Company.findById(jobId)
        .populate({
          path: "courseContent",
        })
        .exec()
        
      // console.log(companyUpdatedData)
      res.status(200).json({
        success: true,
        message: companyData,
        data: companyUpdatedData,
      })
    } catch (error) {
      console.error("Error while updating company data :", error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
}  

exports.showAllCompanies = async (req, res) => {
  try {
    const allCompanies = await Company.find();
    res.status(200).json({
      success: true,
      data: allCompanies,
    })
  } catch (error) {
    console.log("error in companies data fetching");
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


// DELETE a Company Data

exports.deleteCompanyData = async (req, res) => {
  try {
    const { companyId, jobId } = req.body
    await Job.findByIdAndUpdate(jobId, {
      $pull: {
        companyData: companyId,
      },
    })
    const company = await Company.findById(companyId)
    console.log(companyId, jobId)
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "company not found",
      })
    }

    await Company.findByIdAndDelete(companyId)

    // find the updated job and return it
    const job = await Job.findById(jobId)
      .populate({
        path: "companyData",
      })
      .exec()

    res.status(200).json({
      success: true,
      message: "Company deleted",
      data: job,
    })
  } catch (error) {
    console.error("Error while deleting company:", error)
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}
