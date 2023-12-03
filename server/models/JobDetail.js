const mongoose= require("mongoose");

const jobDetailSchema = new mongoose.Schema({
    jobTitle: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    jobType: {
        type: String
    },
    experience: {
        type: String
    },
    responsibilty: {
        type: String
    },
    qualification: {
        type: String
    },
    publishedDate: {
        type: Date,
        default: Date.now
    },
    totalVacancy: {
        type: Number
    },
    salary: {
        type: String
    },
    tag: {
		type: [String],
		required: true,
	},
    category: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Category",
	},
    companyData: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Company",
	},
    userApplied: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "user",
		},
	],
    admin: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
    status: {
		type: String,
		enum: ["Draft", "Published"],
	},
	createdAt: {
		type: Date,
		default: Date.now
	},

    
})

module.exports=mongoose.model("Job",jobDetailSchema);