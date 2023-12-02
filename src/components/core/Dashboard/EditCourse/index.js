import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import {getFullDetailsOfJob} from "../../../../services/operations/jobDetailsAPI"
import { setJob, setEditJob } from "../../../../slices/jobSlice"
import RenderSteps from "../AddCourse/RenderSteps"

export default function EditCourse() {
  const dispatch = useDispatch()
  const { jobId } = useParams()
  const { job } = useSelector((state) => state.job)
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)

  // console.log("job id on edit course",jobId);
  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const result = await getFullDetailsOfJob(jobId, token)
      
      if (result?.jobDetails) {
        dispatch(setEditJob(true))
        dispatch(setJob(result?.jobDetails))
      }
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="grid flex-1 place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium">
        Edit Job
      </h1>
      <div className="mx-auto max-w-[600px]">
        {job ? (
          <RenderSteps />
        ) : (
          <p className="mt-14 text-center text-3xl font-semibold">
            Job not found
          </p>
        )}
      </div>
    </div>
  )
}
