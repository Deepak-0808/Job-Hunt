const mongoose = require("mongoose");

// Define the Category schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { type: String },
	image:{
		type: String
	},
	jobs: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Job",
		},
	],
});

// Export the Category model
module.exports = mongoose.model("Category", categorySchema);