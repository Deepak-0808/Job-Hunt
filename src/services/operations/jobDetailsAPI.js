import { toast } from "react-hot-toast"

// import { updateCompletedLectures } from "../../slices/viewCourseSlice"
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { jobEndpoints } from "../apis2"

const {
    GET_ALL_JOB_API,
    JOB_DETAILS_API,
    EDIT_JOB_API,
    JOB_CATEGORIES_API,
    CREATE_JOB_API,
    CREATE_COMPANY_API,
    UPDATE_COMPANY_API,
    COMPANY_DATA_API,
    GET_ALL_ADMIN_JOBS_API,
    DELETE_COMPANY_API,
    DELETE_JOB_API,
    GET_FULL_JOB_DETAILS_AUTHENTICATED,
}= jobEndpoints


export const getAllJobs = async (queryParams) => {
  const toastId = toast.loading("Loading...")
  // console.log("jobDetailsAPI frontend",queryParams)
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_JOB_API,null, null, queryParams)
    if (!response?.data?.success) {
      throw new Error("Could not fetch jobs")
    }
    result = response?.data?.data
  } catch (error) {
    // console.log("GET_ALL_JOB_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const fetchJobDetails = async (jobId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", JOB_DETAILS_API, {
      jobId,
    })
    // console.log("JOB_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    // console.log("JOB_DETAILS_API ERROR............", error)
    result = error.response.data
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// fetching the available job categories
export const fetchJobCategories = async () => {
  let result = []
  try {
    const response = await apiConnector("GET", JOB_CATEGORIES_API)
    // console.log("JOB_CATEGORIES_API API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Job Categories")
    }
    result = response?.data?.data
  } catch (error) {
    // console.log("JOB_CATEGORIES_API API ERROR............", error)
    toast.error(error.message)
  }
  return result
}

// add the course details
export const addJobDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    
    const response = await apiConnector("POST", CREATE_JOB_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    // console.log("CREATE_JOB_API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Job Details")
    }
    toast.success("Job details added successfully")
    result = response?.data?.data
  } catch (error) {
    // console.log("CREATE_JOB_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// edit the course details
export const editJobDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_JOB_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    // console.log("EDIT_JOB_API............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Job Details")
    }
    toast.success("Job Details Updated Successfully")
    result = response?.data?.data
  } catch (error) {
    // console.log("EDIT_JOB_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// create a section
export const createCompany = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_COMPANY_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("CREATE_COMPANY_API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Company")
    }
    toast.success("Job company data created")
    result = response?.data?.updatedJob
  } catch (error) {
    // console.log("CREATE_COMPANY_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// update a section
export const updateCompany = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_COMPANY_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("UPDATE_COMPANY_API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Company Data")
    }
    toast.success("Job Company Data Updated")
    result = response?.data?.data
  } catch (error) {
    // console.log("UPDATE_COMPANY_API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// fetching the available course categories
export const fetchCompaniesData = async () => {
  let result = []
  try {
    const response = await apiConnector("GET", COMPANY_DATA_API)
    // console.log("COMPANY_DATA_API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Company Data")
    }
    result = response?.data?.data
  } catch (error) {
    // console.log("COMPANY_DATA_API ERROR............", error)
    toast.error(error.message)
  }
  return result
}

// delete a Company
export const deleteCompany = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", DELETE_COMPANY_API, data, {
        Authorization: `Bearer ${token}`,
      })
      // console.log("DELETE_COMPANY_API API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Company")
      }
      toast.success("Job Company Deleted")
      result = response?.data?.data
    } catch (error) {
      // console.log("DELETE SECTION API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }


// fetching all Jobs under a specific Admin
export const fetchAdminJobs = async (token) => {
  let result = []
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("GET",GET_ALL_ADMIN_JOBS_API,null,{
        Authorization: `Bearer ${token}`,
      }
    )
    // console.log("ADMIN JOBS API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch ADMIN JOBS")
    }
    result = response?.data?.data
  } catch (error) {
    // console.log("ADMIN JOBS API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// delete a job
export const deleteJob = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", DELETE_JOB_API, data, {
      Authorization: `Bearer ${token}`,
    })
    // console.log("DELETE JOB API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Job")
    }
    toast.success("Job Deleted")
  } catch (error) {
    // console.log("DELETE JOB API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

// get full details of a job
export const getFullDetailsOfJob = async (jobId, token) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST",GET_FULL_JOB_DETAILS_AUTHENTICATED,{jobId},
      {
        Authorization: `Bearer ${token}`,
      }
    )
    // console.log("JOB_FULL_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
  } catch (error) {
    // console.log("JOB_FULL_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

