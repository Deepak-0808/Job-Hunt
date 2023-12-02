import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchAdminJobs } from "../../../services/operations/jobDetailsAPI"
// import IconBtn from "../../Common/IconBtn"
import IconBtn from "../../common/IconBtn"
import CoursesTable from "./InstructorCourses/CoursesTable"

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const[jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      const result = await fetchAdminJobs(token)
      if (result) {
        setJobs(result)
      }
    }
    fetchJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className=" bg-richwhite" >
      <div className="mb-14 flex items-center justify-between ">
        <h1 className="text-3xl font-medium  text-black">My Jobs</h1>
        <IconBtn
          text="Add Job"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>
      {jobs && <CoursesTable jobs={jobs} setJobs={setJobs} />}
    </div>
  )
}
