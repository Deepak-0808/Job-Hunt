const express = require("express")
const router = express.Router()
const { contactUsController,bookMarkController,subscribeController } = require("../controllers/ContactUs")
const { auth } = require("../middlewares/auth")

router.post("/contact",auth, contactUsController)
router.post("/bookmark",auth, bookMarkController)
router.post("/subscribe",subscribeController)


module.exports = router
