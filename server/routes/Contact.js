const express = require("express")
const router = express.Router()
const { contactUsController,bookMarkController } = require("../controllers/ContactUs")
const { auth } = require("../middlewares/auth")

router.post("/contact",auth, contactUsController)
router.post("/bookmark",auth, bookMarkController)


module.exports = router
