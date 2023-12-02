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
      <h1 className="mb-14 text-3xl font-medium text-black">
        My Profile
      </h1>
      <div className="flex items-center justify-between rounded-md border-[1px] border-blueMain bg-white p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.fullName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-bold text-richblack-500">
              {user?.fullName}
            </p>
            <p className="text-sm text-richblack-500">{user?.email}</p>
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
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-blueMain bg-white p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-bold text-black">About</p>
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
          } text-sm font-medium`}
        >

          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-blueMain bg-white p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-bold text-black">
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
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm font-bold text-black">Full Name</p>
              <p className="text-sm font-medium text-richblack-500">
                {user?.fullName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-black">Email</p>
              <p className="text-sm font-medium text-richblack-500">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-black">Gender</p>
              <p className="text-sm font-medium text-richblack-500">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm font-bold text-black">Phone Number</p>
              <p className="text-sm font-medium text-richblack-500">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-black">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-500">
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