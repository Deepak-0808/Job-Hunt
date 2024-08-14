const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_ADMIN_DATA_API: BASE_URL + "/profile/adminDashboard",
}


export const jobEndpoints = {
  GET_ALL_JOB_API: BASE_URL + "/job/getAllJobs",
  JOB_DETAILS_API: BASE_URL + "/job/getJobDetails",
  EDIT_JOB_API: BASE_URL + "/job/editJob",
  JOB_CATEGORIES_API: BASE_URL + "/job/showAllCategories",
  CREATE_JOB_API: BASE_URL + "/job/createJob",
  CREATE_COMPANY_API: BASE_URL + "/job/addCompany",
  UPDATE_COMPANY_API: BASE_URL + "/job/updateCompany",
  COMPANY_DATA_API: BASE_URL + "/job/showAllCompanies",
  GET_ALL_ADMIN_JOBS_API: BASE_URL + "/job/getAdminJobs",
  DELETE_COMPANY_API: BASE_URL + "/job/deleteCompany",
  DELETE_JOB_API: BASE_URL + "/job/deleteJob",
  GET_FULL_JOB_DETAILS_AUTHENTICATED: BASE_URL + "/job/getFullJobsDetails",
}


// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/job/showAllCategories",
  CREATE_CATEGORIES_API: BASE_URL + "/job/createCategory"
}



// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
  BOOKMARK_API: BASE_URL + "/save/bookmark",
  SUBSCRIBE_USER_US_API: BASE_URL + "/user/subscribe" 
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
