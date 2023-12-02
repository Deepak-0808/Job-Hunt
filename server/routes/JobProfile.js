const express = require("express")
const router = express.Router()
const { auth, isAdmin } = require("../middlewares/auth")

const{
    updateProfile,
    deleteAccount,
    getAllUserDetails,
    updateDisplayPicture,
    adminDashboard
}=require("../controllers/JobProfile");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/adminDashboard", auth, isAdmin, adminDashboard)

module.exports = router