const mongoose= require("mongoose");

const jobCompanySchema = new mongoose.Schema({
    companyName: {
        type: String
    },
    companyLocation: {
        type: String
    },
    companyDescription: {
        type: String
    },
    totalEmployees: {
        type: Number
    },
    companyProduct: {
        type: String
    },
    companyEmail: {
        type: String
    },
    companyContactNumber: {
        type: Number
    },
    companyLogo: {
        type: String
    },
    companyUrl: {
        type: String
    },
    twitterUrl: {
        type: String
    },
    linkedInUrl: {
        type: String
    },

});

module.exports = mongoose.model("Company", jobCompanySchema);
