import { useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"

// import { setJob, setEditJob } from "../../../../slices/jobSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

import { formatDate } from "../../../../services/formatDate"
import {
  deleteJob,
  fetchAdminJobs,
} from "../../../../services/operations/jobDetailsAPI"
import { COURSE_STATUS } from "../../../../utils/constants"
import ConfirmationModal from "../../../common/ConfirmationModal"

export default function CoursesTable({ jobs, setJobs }) {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 30

  const handleJobDelete = async (jobId) => {
    setLoading(true)
    await deleteJob({ jobId: jobId }, token)
    const result = await fetchAdminJobs(token)
    if (result) {
      setJobs(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }
 

 

  return (
    <>
      <Table className="rounded-xl border border-blueMain ">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b bg-white border-b-blueMain px-6 py-2">
            <Th className="flex-1 text-left text-sm font-medium uppercase text-black">
              Jobs
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-black">
              Vaccancy
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-black">
              Salary
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-black">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {jobs?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-richblack-500">
                No Jobs found
              </Td>
            </Tr>
          ) : (

            jobs?.map((job) => (
              <Tr
                key={job._id}
                className="flex gap-x-10 border-b border-blueMain bg-white px-6 py-8"
              >
                <Td className="flex flex-1 gap-x-4">
                  <img
                    src={job?.companyData?.companyLogo}
                    alt={job?.jobTitle}
                    className="h-[148px] w-[220px] border border-blueMain rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold text-richblack-500">
                      {job.jobTitle}
                    </p>
                    <p className="text-xs text-richblack-500">
                      {job.description.split(" ").length >
                      TRUNCATE_LENGTH
                        ? job.description
                            .split(" ")
                            .slice(0, TRUNCATE_LENGTH)
                            .join(" ") + "..."
                        : job.description}
                    </p>
                    <p className="text-[12px] text-richblack-500">
                      Created At: {formatDate(job.createdAt)}
                    </p>
                    {job.status === COURSE_STATUS.DRAFT ? (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-blueMain px-2 py-[2px] text-[12px] font-medium text-pink-100">
                        <HiClock size={14} />
                        Drafted
                      </p>
                    ) : (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-blueMain px-2 py-[2px] text-[12px] font-medium text-white">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-white text-black">
                          <FaCheck size={8} />
                        </div>
                        Published
                      </p>
                    )}
                  </div>
                </Td>
                <Td className="text-sm font-medium text-richblack-500">
                  {job.totalVacancy}
                </Td>
                <Td className="text-sm font-medium text-richblack-500">
                  ₹{job.salary}
                </Td>
                <Td className="text-sm font-medium text-richblack-500 ">
                  <button
                    disabled={loading}
                    onClick={() => {
                      navigate(`/dashboard/edit-course/${job._id}`)
                    }}
                    title="Edit"
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this Job?",
                        text2:
                          "All the data related to this job will be deleted",
                        btn1Text: !loading ? "Delete" : "Loading...  ",
                        btn2Text: "Cancel",
                        btn1Handler: !loading
                          ? () => handleJobDelete(job._id)
                          : () => {},
                        btn2Handler: !loading
                          ? () => setConfirmationModal(null)
                          : () => {},
                      })
                    }}
                    title="Delete"
                    className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
