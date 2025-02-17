import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { fetchAdminJobs } from "../../../services/operations/jobDetailsAPI"
import { getAdminData } from "../../../services/operations/profileAPI"
import InstructorChart from "./InstructorDashboard/InstructorChart"
import { fetchJobCategories } from "../../../services/operations/jobDetailsAPI"

export default function Instructor() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])
  const [job, setJob]=useState([])
  const [categories, setCategories]=useState([]);


  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const instructorApiData = await getAdminData(token)
      const result = await fetchAdminJobs(token)
      // console.log(result)
      if (instructorApiData.length) setInstructorData(instructorApiData)
      if (result) {
        setCourses(result)
        setJob(result);
      }
      setLoading(false)
    })()
  },[])

  useEffect(()=>{
    const getCategories = async () => {
      setLoading(true);
      const categoriesResponse = await fetchJobCategories();
      setCategories(categoriesResponse);
      setLoading(false);
    };
    getCategories();
  },[])

// i can uncomment this after connection from backend **********

  // const totalAmount = instructorData?.reduce(
  //   (acc, curr) => acc + curr.totalAmountGenerated,
  //   0
  // )

  // const totalStudents = instructorData?.reduce(
  //   (acc, curr) => acc + curr.totalStudentsEnrolled,
  //   0
  // )
  const totalAmount=5000;
  const totalStudents=10;


  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-black">
          Hi {user?.fullName} 👋 Welcome to Admin Dashboard
        </h1>
        <p className="font-medium text-richblack-500">
          Let's start something new
        </p>
      </div>
      { loading ? (
        <div className="spinner"></div>
      ) : job.length > 0 ? (
        <div>
          <div className="my-4 flex h-[450px] space-x-4">
            {/* Render chart / graph */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorChart job={instructorData} />
            ) : (
              <div className="flex-1 rounded-md bg-richwhite border border-blueMain p-6">
                <p className="text-lg font-bold text-black">Visualize</p>
                <p className="mt-4 text-xl font-medium text-richblack-500">
                  Not Enough Data To Visualize
                </p>
              </div>
            )}
            {/* Total Statistics */}
            <div className="flex min-w-[250px] flex-col rounded-md bg-white border border-blueMain p-6">
              <p className="text-lg font-bold text-black">Statistics</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg text-black">Total Categories</p>
                  <p className="text-3xl font-semibold text-richblack-500">
                    {categories.length}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-black">Total Jobs</p>
                  <p className="text-3xl font-semibold text-richblack-500">
                    {job.length}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="rounded-md bg-white border border-blueMain p-6">
            {/* Render 3 courses */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-black">Your Jobs</p>
              <Link to="/dashboard/my-courses">
                <p className="text-xs font-semibold text-black">View All</p>
              </Link>
            </div>
            <div className="my-4 flex items-start space-x-6">
              {job.slice(0, 3).map((course) => (
                <div key={course._id} className="w-1/3">
                    <img
                        src={course?.companyData?.companyLogo}
                        alt={course?.jobTitle}
                        className="h-[201px] w-full border border-blueMain rounded-md object-cover"
                      />
                  <div className="mt-3 w-full">
                    <p className="text-sm font-medium text-richblack-500">
                      {course.jobTitle}
                    </p>
                    <div className="mt-1 flex items-center space-x-2">
                      <p className="text-xs font-medium text-richblack-500">
                        {course.totalVacancy} Vacancy
                      </p>
                      <p className="text-xs font-medium text-richblack-500">
                        |
                      </p>
                      <p className="text-xs font-medium text-richblack-500">
                        {course.salary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">
            You have not posted any jobs yet
          </p>
          <Link to="/dashboard/add-course">
            <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
              Post a job
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}
