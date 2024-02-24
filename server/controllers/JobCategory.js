const Category = require("../models/Category")
const { uploadImageToCloudinary } = require("../utils/imageUploader")

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

exports.createCategory = async (req, res) => {
    try {
      const { name, description } = req.body
      const image = req.files.image

      if (!name||!image) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" })
      }
      // Upload the image to Cloudinary
      const categoryPhoto = await uploadImageToCloudinary(
        image,
        process.env.FOLDER_NAME
    )
      const CategorysDetails = await Category.create({
        name: name,
        description: description,
        image: categoryPhoto.secure_url,
      })
      console.log("CategorysDetails: ",CategorysDetails);
      return res.status(200).json({
        success: true,
        message: "Category Created Successfully",
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
}

exports.showAllCategories = async (req, res) => {
    try {
      const allCategorys = await Category.find()
      res.status(200).json({
        success: true,
        data: allCategorys,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
}


exports.categoryPageDetails = async (req, res) => {
    try {
      const { categoryId } = req.body
  
      // Get jobs for the specified category
      const selectedCategory = await Category.findById(categoryId)
        .populate({
          path: "jobs",
          match: { status: "Published" }
        })
        .exec()
  
    //   console.log("SELECTED JOB", selectedCategory)
      // Handle the case when the category is not found
      if (!selectedCategory) {
        console.log("Category not found.")
        return res
          .status(404)
          .json({ 
            success: false,
            message: "Category not found"
        })
      }
      // Handle the case when there are no jobs
      if (selectedCategory.jobs.length === 0) {
        console.log("No jobs found for the selected category.")
        return res.status(404).json({
          success: false,
          message: "No jobs found for the selected category.",
        })
      }
  
      // Get jobs for other categories
      const categoriesExceptSelected = await Category.find({
        _id: { $ne: categoryId },
      })
      let differentCategory = await Category.findOne(
        categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
          ._id
      )
        .populate({
          path: "jobs",
          match: { status: "Published" },
        })
        .exec()
    //   console.log()
      // Get top-search jobs across all categories
      const allCategories = await Category.find()
        .populate({
          path: "jobs",
          match: { status: "Published" },
          populate: {
            path: "admin",
          },
        })
        .exec()
    //   const allCourses = allCategories.flatMap((category) => category.jobs)
    //   const mostSellingCourses = allCourses
    //     .sort((a, b) => b.sold - a.sold)
    //     .slice(0, 10)
  
      res.status(200).json({
        success: true,
        data: {
          selectedCategory,
          differentCategory,
        //   mostSellingCourses,
        },
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
}
  