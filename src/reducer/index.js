import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import jobReducer from "../slices/jobSlice"
// import companySlice from "../slices/companySlice";


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    job: jobReducer,
    // company: companySlice,
})

export default rootReducer