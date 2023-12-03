import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteProfile } from "../../../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      // console.log("Token for Deleting: ",token);
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-[4vw] flex flex-row gap-x-[2vw] rounded-md border-[1px] border-pink-700 bg-pink-900 p-[2vw]">
        <div className="flex aspect-square h-[4vw] w-[4vw] items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-[2vw] text-pink-200 max-text-size-my-profile" />
        </div>
        <div className="flex flex-col space-y-[1vw]">
          <h2 className="text-[4vw] font-bold text-richblack-5 max-text-size-my-profile">
            Delete Account
          </h2>
          <div className="w-fit  text-pink-25">
            <p className="text-[3vw] max-text-size-my-profile">Would you like to delete account?</p>
            <p className="text-[2vw] max-text-size-my-profile">
              This account may contain important data. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit text-[4vw] cursor-pointer italic text-pink-300 max-text-size-my-profile"
            onClick={handleDeleteAccount}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
    </>
  )
}