const JobDetail = require("../models/JobDetail");
const JobCategory= require("../models/Category");
const JobCompany= require("../models/JobCompany");
const JobUser = require("../models/User");


exports.createJob = async(req,res)=>{
    try{
        const userId=req.user.id
        let {
            jobTitle,
            description, 
            location,
            experience,
            jobType,
            responsibilty,
            qualification,
            totalVacancy,
            category,
            salary,
            status,
            tag : _tag,
        }=req.body
        
        // Split the string by commas into an array
        const tag = _tag.split(',').map(tag => tag.trim());

        if (
            !jobTitle ||
            !description ||
            !location ||
            !experience ||
            !jobType ||
            !responsibilty||
            !qualification||
            !totalVacancy||
            !salary||
            !tag.length||
            !category
          ) {
            return res.status(400).json({
              success: false,
              message: "All Fields are Mandatory",
            })
            }

            
          if (!status || status === undefined) {
            status = "Draft"
          }
          // Check if the user is an Admin
          const adminDetails = await JobUser.findById(userId, {
            accountType: "Admin",
          })
      
          if (!adminDetails) {
            return res.status(404).json({
              success: false,
              message: "Admin Details Not Found",
            })
          }

          // Check if the category given is valid
          const categoryDetails = await JobCategory.findById(category)
          if (!categoryDetails) {
            return res.status(404).json({
                success: false,
                message: "Category Details Not Found",
            })
           }

           
        // Create a new course with the given details
        const newJob = await JobDetail.create({
            jobTitle,
            description,
            location,
            experience,
            jobType,
            responsibilty,
            qualification,
            totalVacancy,
            category: categoryDetails._id,
            salary,
            status: status,
            tag,
            admin: adminDetails._id,
        })

        
        // Add the new job to the User Schema of the Admin
        await JobUser.findByIdAndUpdate(
        {
          _id: adminDetails._id,
        },
        {
          $push: {
            jobs: newJob._id,
          },
        },
        { new: true }
        )

        
        // Add the new job to the Categories
        const categoryDetails2 = await JobCategory.findByIdAndUpdate(
            { _id: category },
            {
          $push: {
            jobs: newJob._id,
          },
        },
        { new: true }
      )

        // Return the new course and a success message
        res.status(200).json({
            success: true,
            data: newJob,
            message: "Job Created Successfully",
        })

    }
    catch(error){
        // Handle any errors that occur during the creation of the course
        res.status(500).json({
            success: false,
            message: "Failed to create job",
            error: error.message,
        })

    }
}


// Edit Job Details
exports.editJob = async (req, res) => {
    try {
      const { jobId } = req.body
      // console.log("jobID is:- ", jobId);
      const updates = req.body
      const job = await JobDetail.findById(jobId)
  
      if (!job) {
        return res.status(404).json({ error: "Job not found" })
      }
      // console.log("before saving jobdetails:- ",job);
  
      // Update only the fields that are present in the request body
      for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
          if (key === "tag" || key === "instructions") {
            job[key] = JSON.parse(updates[key])
          } else {
            job[key] = updates[key]
          }
        }
      }
  
      await job.save();
  
      const updatedJob = await JobDetail.findOne({
        _id: jobId,
      })
        .populate({
          path: "admin",
          populate: {
            path: "additionalDetails",
          },
        })
        .populate("category")  // my be occure error
        .populate("companyData")
        .exec()
  
      res.json({
        success: true,
        message: "Job updated successfully",
        data: updatedJob,
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error in edit course",
        error: error.message,
      })
    }
  }


  // Get Job List
exports.getAllJobs = async (req, res) => {
    try {
        const { keywords, location, jobType, experience } = req.query;
        const query = { status: "Published" };
        
        // Adding conditions based on available query parameters
        if (keywords) {
          query.$or = [
            { jobTitle: { $regex: keywords, $options: "i" } },
            { jobDescription: { $regex: keywords, $options: "i" } },
          ];
        }
        if (location) {
          query.location = { $regex: location, $options: "i" };
        }
        if (jobType) {
          query.jobType = jobType;
        }
        if (experience) {
          query.experience = { $gte: experience };
        }

        const allJobs = await JobDetail.find(query, {
          jobTitle: true,
          description: true,
          responsibilty: true,
          qualification: true,
          salary: true,
          location: true,
          jobType: true,
          admin: true,
          userApplied: true,
          totalVacancy: true,
          publishedDate: true,
        })
        .populate("companyData")
          .populate("admin")
          .exec();
  
      return res.status(200).json({
        success: true,
        data: allJobs,
      })
    } catch (error) {
      console.log(error)
      return res.status(404).json({
        success: false,
        message: `Can't fetch job data`,
        error: error.message,
      })
    }
}


exports.getJobDetails = async (req, res) => {
  try {
      const { jobId } = req.body
      const jobDetails = await JobDetail.findOne({
        _id: jobId,
      })
        .populate({
          path: "admin",
          populate: {
            path: "additionalDetails",
          },
        })
        .populate("category")
        .populate("companyData")
        .exec()
  
      if (!jobDetails) {
        return res.status(400).json({
          success: false,
          message: `Could not find job with id: ${jobId}`,
        })
      }
  
      return res.status(200).json({
        success: true,
        data: {
          jobDetails
        },
      })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

exports.getFullJobDetails = async (req, res) => {
  try {
    const { jobId } = req.body
    const userId = req.user.id
    const jobDetails = await JobDetail.findOne({
      _id: jobId,
    })
      .populate({
        path: "admin",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .populate("companyData")
      .exec()

    
    if (!jobDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find course with id: ${jobId}`,
      })
    }

    // if (courseDetails.status === "Draft") {
    //   return res.status(403).json({
    //     success: false,
    //     message: `Accessing a draft course is forbidden`,
    //   });
    // }


    return res.status(200).json({
      success: true,
      data: {
        jobDetails
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

// Get a list of Job for a given Admin
exports.getAdminJobs = async (req, res) => {
  try {
    // Get the Admin ID from the authenticated user or request body
    const adminId = req.user.id

    // Find all jobs belonging to the Admin
    const adminJob = await JobDetail.find({
      admin: adminId,
    })
    .sort({ createdAt: -1 })
    .populate('companyData');
    
    // Return the admin's jobs
    res.status(200).json({
      success: true,
      data: adminJob,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to retrieve admin jobs",
      error: error.message,
    })
  }
}


// Delete the Job
exports.deleteJob = async (req, res) => {
  try {
    const { jobId } = req.body

    // Find the course
    const job = await JobDetail.findById(jobId)
    if (!job) {
      return res.status(404).json({ message: "Job not found" })
    }

    // Delete the company details
    if(job.jobContent){
      await JobCompany.findByIdAndDelete(job.jobContent).exec();
    }

    // Delete the job 
    await JobDetail.findByIdAndDelete(jobId)

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}