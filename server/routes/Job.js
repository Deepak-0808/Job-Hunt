const express = require("express")
const router = express.Router()

const {
    createJob,
    editJob,
    getAllJobs,
    getJobDetails,
    getAdminJobs,
    deleteJob,
    getFullJobDetails
} = require("../controllers/JobDetail")

const{
    createCategory,
    showAllCategories,
    categoryPageDetails
}=require("../controllers/JobCategory")

const{
    addCompanyData,
    updateCompanyData,
    deleteCompanyData,
    showAllCompanies,
}=require("../controllers/JobCompany")



// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")

//**************** 
// JobDetails Route
//****************

// Courses can Only be Created by Admin
router.post("/createJob", auth, isAdmin, createJob)
// Edit Course routes
router.post("/editJob", auth, isAdmin, editJob)
//Add a Section to a Course
router.post("/addCompany", auth, isAdmin, addCompanyData)
// Update a Section
router.post("/updateCompany", auth, isAdmin, updateCompanyData)
router.get("/showAllCompanies", showAllCompanies);
// Delete a Section
router.post("/deleteCompany", auth, isAdmin, deleteCompanyData)
// Get all Courses Under a Specific Instructor
router.get("/getAdminJobs", auth, isAdmin, getAdminJobs)
// Get all Registered Courses
router.get("/getAllJobs", getAllJobs)
// Get Details for a Specific Courses
router.post("/getJobDetails", getJobDetails)
// Get Details for a Specific Courses
router.post("/getFullJobsDetails", auth, getFullJobDetails )
// Delete a Course
router.delete("/deleteJob", deleteJob)

// // Get Details for a Specific Courses
// router.post("/getFullCourseDetails", auth, getFullCourseDetails)

// To get Course Progress
// router.post("/getProgressPercentage", auth, isStudent, getProgressPercentage)


// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategories)
router.post("/categoryPageDetails", categoryPageDetails)


module.exports = router