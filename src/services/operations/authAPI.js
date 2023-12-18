import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis2"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints



export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      })
      // console.log("SENDOTP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      if(response.data.success===true){
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }

      navigate("/verify-email")
    } catch (error) {
      // console.log("SENDOTP API ERROR............", error)
      toast.error(error.response.data.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function signUp(
  accountType,
  fullName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        fullName,
        email,
        password,
        confirmPassword,
        otp,
      })

      // console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      if(response.data.success===true){
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }

      navigate("/signin")
    } catch (error) {
      // console.log("SIGNUP API ERROR............", error)
      toast.error(error.response.data.message)
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

// export function accountTypeCheck(email){
//   return async (dispatch)=>{
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", ACCOUNT_TYPE_CHECK_API, {
//         email,
//       })
      
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   }
// }

export function login(email, password, accountType, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
        accountType,
      })

      // console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      if(response.data.success===true){
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }

      dispatch(setToken(response.data.token))
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.fullName} ${response.data.user.fullName}`
      dispatch(setUser({ ...response.data.user, image: userImage }))
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/dashboard/my-profile")
    } catch (error) {
      // console.log("LOGIN API ERROR............", error)
       toast.error(error.response.data.message);
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      })

      // console.log("RESET PASS TOKEN RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      if(response.data.success===true){
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }

      setEmailSent(true)
    } catch (error) {
      // console.log("RESET PASS TOKEN ERROR............", error)
      toast.error(error.response.data.message)
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      })

      // console.log("RESET PASSWORD RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      if(response.data.success===true){
        toast.success(response.data.message)
      }
      else{
        toast.error(response.data.message)
      }

      navigate("/signin")
    } catch (error) {
      // console.log("RESET PASSWORD ERROR............", error)
      toast.error(error.response.data.message)
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}