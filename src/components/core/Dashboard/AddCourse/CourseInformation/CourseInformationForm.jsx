import '../../../../../pages/GlobalStyles.css'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';
import {
  addJobDetails,
  editJobDetails,
  fetchJobCategories,
} from "../../../../../services/operations/jobDetailsAPI"
import { setJob, setStep } from "../../../../../slices/jobSlice"
import { COURSE_STATUS } from "../../../../../utils/constants"
import IconBtn from "../../../../common/IconBtn"
import ChipInput from "./ChipInput"

export default function CourseInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const{job,editJob } = useSelector((state) => state.job)
  const [loading, setLoading] = useState(false)
  const[jobCategories,setJobCategories] = useState([])

  useEffect(() => {
    
    const getCategories = async () => {
      setLoading(true)
      const categories = await fetchJobCategories()
      if (categories.length > 0) {
        // console.log("categories", categories)
        setJobCategories(categories)
      }
      setLoading(false)
    }


    // if form is in edit mode
    if (editJob) {
      // console.log("data populated", editJob )
      setValue("jobTitle", job.jobTitle)
      setValue("description", job.description)
      setValue("location", job.location)
      setValue("jobType", job.jobType)
      setValue("experience", job.experience)
      setValue("responsibilty", job.responsibilty)
      setValue("qualification", job.qualification)
      setValue("publishedDate", job.publishedDate)
      setValue("totalVacancy", job.totalVacancy)
      setValue("salary", job.salary)
      setValue("JobTags", job.JobTags)
      setValue("category._id", job.category._id)
    }
    getCategories()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isFormUpdated = () => {
    const currentValues = getValues()
    console.log("changes after editing form values:", currentValues)
    if (
      currentValues.jobTitle !== job.jobTitle ||
      currentValues.description !== job.description ||
      currentValues.location !== job.location||
      currentValues.jobType !== job.jobType||
      currentValues.experience !== job.experience||
      currentValues.responsibilty !== job.responsibilty||
      currentValues.qualification !== job.qualification||
      currentValues.publishedDate !== job.publishedDate||
      currentValues.totalVacancy !== job.totalVacancy||
      currentValues.salary !== job.salary||
      currentValues.JobTags.toString() !== job.tag.toString()||
      currentValues.category._id !== job.category._id
      ) {
      return true
    }
    return false
  }

  //   handle next button click
  const onSubmit = async (data) => {
    // console.log(data)

    if (editJob) {
      // const currentValues = getValues()
      // console.log("changes after editing form values:", currentValues)
      // console.log("now course:", course)
      // console.log("Has Form Changed:", isFormUpdated())
      if (isFormUpdated()) {
        const currentValues = getValues()
        const formData = new FormData()
        // console.log(data)
        formData.append("jobId", job._id)
        if (currentValues.jobTitle !== job.jobTitle) {
          formData.append("jobTitle", data.jobTitle)
        }
        if (currentValues.description !== job.description) {
          formData.append("description", data.description)
        }
        if (currentValues.location !== job.location) {
          formData.append("location", data.location)
        }
        if (currentValues.jobType !== job.jobType) {
          formData.append("jobType", data.jobType)
        }
        if (currentValues.experience !== job.experience) {
          formData.append("experience", data.experience)
        }
        if (currentValues.responsibilty !== job.responsibilty) {
          formData.append("responsibilty", data.responsibilty)
        }
        if (currentValues.qualification !== job.qualification) {
          formData.append("qualification", data.qualification)
        }
        if (currentValues.publishedDate !== job.publishedDate) {
          formData.append("publishedDate", data.publishedDate)
        }
        if (currentValues.totalVacancy !== job.totalVacancy) {
          formData.append("totalVacancy", data.totalVacancy)
        }
        if (currentValues.salary !== job.salary) {
          formData.append("salary", data.salary)
        }
        if (currentValues.JobTags.toString() !== job.tag.toString()) {
          formData.append("tag", JSON.stringify(data.JobTags))
        }
        if (currentValues.category._id !== job.category._id) {
          formData.append("category", data.category)
        }
        
        
        // console.log("Edit Form data: ", formData)
        setLoading(true)
        const result = await editJobDetails(formData, token)
        setLoading(false)
        if (result) {
          dispatch(setStep(2))
          dispatch(setJob(result))
        }
      } else {
        toast.error("No changes made to the form")
      }
      return
    }

    const formData = new FormData()
    formData.append("jobTitle", data.jobTitle)
    formData.append("description", data.description)
    formData.append("location", data.location)
    formData.append("jobType", data.jobType)
    formData.append("experience", data.experience)
    formData.append("responsibilty", data.responsibilty)
    formData.append("qualification", data.qualification)
    formData.append("publishedDate", data.publishedDate)
    formData.append("totalVacancy", data.totalVacancy)
    formData.append("salary", data.salary)
    formData.append("tag", JSON.stringify(data.JobTags))
    formData.append("category", data.category)
    formData.append("status", COURSE_STATUS.DRAFT)

    setLoading(true)
    
    console.log("addJobDetails Form data: ", formData)
    const result = await addJobDetails(formData, token)
    if (result) {
      dispatch(setStep(2))
      dispatch(setJob(result))
    }
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border-[1px] border-black bg-white p-6"
      >
      {/* Job Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="jobTitle">
          Job Title <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="jobTitle"
          placeholder="Enter Job Title"
          {...register("jobTitle", { required: true })}
          className="form-style border w-full"
        />
        {errors.jobTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Job title is required
          </span>
        )}
      </div>

      

      {/* Job Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="description">
          Job Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="description"
          placeholder="Enter Description for Job"
          {...register("description", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.description && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Job Description is required
          </span>
        )}
      </div>

      {/* Job Location  */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="location">
          Job Location <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="location"
          placeholder="Enter Job Location"
          {...register("location", { required: true })}
          className="form-style w-full"
        />
        {errors.location && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Job location is required
          </span>
        )}
      </div>

      {/* Job Type */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="jobType">
          Job Type <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("jobType", { required: true })}
          defaultValue=""
          id="jobType"
          className="form-style w-full"
        >
          <option value="" disabled>Choose Job Type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Work From Home</option>
        </select>
        {errors.jobType && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Job type is required
          </span>
        )}
      </div>

      {/* Job Experience */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="experience">
          Experience <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("experience", { required: true })}
          defaultValue=""
          id="experience"
          className="form-style w-full"
        >
          <option value="" disabled>Choose Experience</option>
          <option>Fresher</option>
          <option>1 Year</option>
          <option>2 Year</option>
          <option>3 Year</option>
          <option>3 Year+</option>
        </select>
        {errors.experience && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Experience is required
          </span>
        )}
      </div>

       {/* Job Category */}
       <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="category">
          Job Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("category", { required: true })}
          defaultValue=""
          id="category"
          className="form-style w-full"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            jobCategories?.map((category, index) => (
              <option key={index} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.jobCategories && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Job category is required
          </span>
        )}
      </div>


      {/* Responsibilty of job */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="responsibilty">
          Responsibilty of job <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="responsibilty"
          placeholder="Enter responsibilty of job"
          {...register("responsibilty", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.responsibilty && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Responsibilty of job is required
          </span>
        )}
      </div>

      {/* Qualification for job */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="qualification">
          Qualification for job <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="qualification"
          placeholder="Enter qualification for job"
          {...register("qualification", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.qualification && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Qualification for job required
          </span>
        )}
      </div>


      {/* publishedDate */}

      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="publishedDate">
        Job Published Date <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="publishedDate"
          type="date"
          placeholder="Enter Published Date"
          {...register("publishedDate")}
          className="form-style w-full"
        />
        {errors.publishedDate && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Job published date required
          </span>
        )}
      </div>

      {/* Number of Vacancy */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="totalVacancy">
        Number of Vacancy <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="totalVacancy"
            placeholder="Enter Number of Vacancy"
            type="number"
            {...register("totalVacancy", {
              required: true,
            })}
            className="form-style w-full"
          />
        </div>
        {errors.totalVacancy && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Number of vacancy is required
          </span>
        )}
      </div>

      {/* Job Salary */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="salary">
          Salary <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="salary"
            type="string"
            placeholder="Enter Job Salary"
            {...register("salary",{
              required: true,
            })}
            className="form-style w-full "
          />
          {/* <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" /> */}
        </div>
        {errors.salary && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Salary is required
          </span>
        )}
      </div>

      {/* Job Tags */}
      <ChipInput
        label="Tags"
        name="JobTags"
        placeholder="Enter Tags and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      /> 

     


      {/* Next Button */}
      <div className="flex justify-end gap-x-2">
        {editJob && (
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Continue Wihout Saving
          </button>
        )}
        <IconBtn
          disabled={loading}
          text={!editJob ? "Next" : "Save Changes"}
        >
          <MdNavigateNext />
        </IconBtn>
      </div>

    </form>
  )
}
