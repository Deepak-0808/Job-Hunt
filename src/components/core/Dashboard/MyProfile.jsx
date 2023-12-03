import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="mb-[3vw] text-[5vw] lg:font-extrabold font-medium text-black max-text-size-my-profile ">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-blueMain bg-white p-[2vw]">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.fullName}`}
            className="aspect-square w-[5vw] rounded-full object-cover max-text-size-my-profile"
          />
          <div className="space-y-[1vw]">
            <p className="text-[2vw] font-bold text-richblack-500 max-text-size-my-profile">
              {user?.fullName}
            </p>
            <p className="text-[2vw] text-richblack-500 max-text-size-my-profile">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-[3vw] flex flex-col gap-y-[2vw] rounded-md border-[1px] border-blueMain bg-white p-[2vw] px-[2vw]">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-bold text-[3vw] text-black max-text-size-my-profile">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-500"
              : "text-richblack-500"
          } text-[2vw] max-text-size-my-profile font-medium`}
        >

          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-[3vw] flex flex-col gap-y-[2vw] rounded-md border-[1px] border-blueMain bg-white p-[2vw] px-[2vw]">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-bold text-[3vw] text-black  lg:text-[150%]">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[60vw] justify-between">
          <div className="flex flex-col gap-y-[2vw] ">
            <div>
              <p className="mb-[1vw] text-[2vw] font-bold text-black max-text-size-my-profile">Full Name</p>
              <p className="text-[2vw] font-medium text-richblack-500 max-text-size-my-profile">
                {user?.fullName}
              </p>
            </div>
            <div>
              <p className="mb-[1vw] text-[2vw] font-bold text-black max-text-size-my-profile">Email</p>
              <p className="text-[2vw] font-medium text-richblack-500 max-text-size-my-profile">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-[1vw] text-[2vw] font-bold text-black max-text-size-my-profile">Gender</p>
              <p className="text-[2vw] font-medium text-richblack-500 max-text-size-my-profile">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 max-text-size-my-profile">
            <div>
              <p className="mb-[1vw] text-[2vw] font-bold text-black max-text-size-my-profile">Phone Number</p>
              <p className="text-[2vw] font-medium text-richblack-500 max-text-size-my-profile">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-[1vw] text-[2vw] font-bold text-black max-text-size-my-profile">Date Of Birth</p>
              <p className="text-[2vw] font-medium text-richblack-500 max-text-size-my-profile">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}