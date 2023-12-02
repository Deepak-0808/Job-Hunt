const mongoose= require("mongoose");

// email, fullname, message, phoneNo, countrycode

const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		// required: true,
	},
	email: { 
        type: String 
    },
	phoneNo:{
		type: String
	},
    countrycode: {
        type: String
    },
    message: {
        type: String
    },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
});

// Export the Category model
module.exports = mongoose.model("Contact", contactSchema);