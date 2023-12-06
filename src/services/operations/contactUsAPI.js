import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { contactusEndpoint } from "../apis2"



const {
  CONTACT_US_API,
  BOOKMARK_API
  } = contactusEndpoint


  // add the add user Idea details
export const addUserIdea = async (data,token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      
      const response = await apiConnector("POST",CONTACT_US_API, data,{
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      // console.log("CREATE_USER_IDEA_API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add User Idea")
      }
      toast.success("User Idea Submitted")
      result = response?.data?.data
    } catch (error) {
      // console.log("CREATE_USER_IDEA_API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }



  // addBookmark


export const addBookmark = async (data,token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    
    const response = await apiConnector("POST",BOOKMARK_API, data,{
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    // console.log("BOOKMARK_API_RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could not saved job")
    }
    toast.success("Job added to your profile")
    result = response?.data?.data
  } catch (error) {
    // console.log("BOOKMARK_API ERROR............", error)
    // toast.error(error.message)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId)
  return result
}
