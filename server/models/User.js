const mongoose=require("mongoose");

const userSchema=new mongoose.Schema ({
            // Define the name field with type String, required, and trimmed
            fullName: {
                type: String,
                required: true,
                trim: true,
            },
            
            // Define the email field with type String, required, and trimmed
            email: {
                type: String,
                required: true,
                trim: true,
            },

            // Define the password field with type String and required
            password: {
                type: String,
                required: true,
            },
            // Define the role field with type String and enum values of "Admin", "Student", or "Visitor"
            accountType: {
                type: String,
                enum: ["Admin","User","Student", "Instructor"],
                // required: true,
            },
            active: {
                type: Boolean,
                default: true,
            },
            approved: {
                type: Boolean,
                default: true,
            },
            additionalDetails: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Profile",
            },
            jobs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "jobDetail",
                },
            ],
            savedJob: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                },
            ],
            token: {
                type: String,
            },
            resetPasswordExpires: {
                type: Date,
            },
            image: {
                type: String,
                required: true,
            },

            // Add timestamps for when the document is created and last modified
        },
        { timestamps: true }
    );

module.exports=mongoose.model("user",userSchema);
