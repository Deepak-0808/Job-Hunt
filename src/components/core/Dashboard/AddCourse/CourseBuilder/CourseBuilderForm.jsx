import '../../../../../pages/GlobalStyles.css'
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Upload from "../Upload"
import {createCompany, updateCompany} from "../../../../../services/operations/jobDetailsAPI"
import {setEditJob, setJob, setStep} from "../../../../../slices/jobSlice"
import IconBtn from "../../../../common/IconBtn"

export default function CourseBuilderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const { token } = useSelector((state) => state.auth)
  const { job , editJob } = useSelector((state) => state.job)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  // const [editCompanyData, setEditCompanyData] = useState(null)

  // *********


  useEffect(() => {
    // if form is in edit mode
    if (editJob) {
      // console.log("in edit mode",editJob)

      setValue("companyName",job.companyName)
      setValue("companyLocation", job.companyLocation)
      setValue("companyDescription", job.companyDescription)
      setValue("totalEmployees", job.totalEmployees)
      setValue("companyProduct", job.companyProduct)
      setValue("companyEmail", job.companyEmail)
      setValue("companyContactNumber", job.companyContactNumber)
      setValue("companyLogo", job.companyLogo)
      setValue("companyUrl", job.companyUrl)
      setValue("twitterUrl", job.twitterUrl)
      setValue("linkedInUrl", job.linkedInUrl)
    }
    
  }, [])

  const isFormUpdated = () => {
    const currentValues = getValues()
    
    // console.log("changes after editing form values:", currentValues)
    if (
      currentValues.companyName !== job.companyName ||
      currentValues.companyLocation !== job.companyLocation ||
      currentValues.companyDescription !== job.companyDescription ||
      currentValues.totalEmployees !== job.totalEmployees ||
      currentValues.companyProduct !== job.companyProduct||
      currentValues.companyEmail !== job.companyEmail||
      currentValues.companyContactNumber !== job.companyContactNumber||
      currentValues.companyLogo !== job.companyLogo||
      currentValues.companyUrl !== job.companyUrl||
      currentValues.twitterUrl !== job.twitterUrl||
      currentValues.linkedInUrl !== job.linkedInUrl
    ) {
      return true
    }
    return false
  }

  // **********

  // handle form submission
  const onSubmit = async (data) => {


    // *********************
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
        if (currentValues.companyName !== job.companyName) {
          formData.append("companyName", data.companyName)
        }
        if (currentValues.companyLocation !== job.companyLocation) {
          formData.append("companyLocation", data.companyLocation)
        }
        if (currentValues.companyDescription !== job.companyDescription) {
          formData.append("companyDescription", data.companyDescription)
        }
        if (currentValues.totalEmployees !== job.totalEmployees) {
          formData.append("totalEmployees", data.totalEmployees)
        }
        if (currentValues.companyProduct !== job.companyProduct) {
          formData.append("companyProduct", data.companyProduct)
        }
        if (currentValues.companyEmail !== job.companyEmail) {
          formData.append("companyEmail", data.companyEmail)
        }
        if (currentValues.companyContactNumber !== job.companyContactNumber) {
          formData.append("companyContactNumber", data.companyContactNumber)
        }
        if (currentValues.companyLogo !== job.companyLogo) {
          formData.append("companyLogo", data.companyLogo)
        }
        if (currentValues.companyUrl !== job.companyUrl) {
          formData.append("companyUrl", data.companyUrl)
        }
        if (currentValues.twitterUrl !== job.twitterUrl) {
          formData.append("twitterUrl", data.twitterUrl)
        }
        if (currentValues.linkedInUrl !== job.linkedInUrl) {
          formData.append("linkedInUrl", data.linkedInUrl)
        }
        
        setLoading(true)
        const result = await updateCompany(formData, token)
        setLoading(false)
        if (result) {
          dispatch(setStep(3))
          dispatch(setJob(result))
        }
      } else {
        toast.error("No changes made to the form")
      }
      return
    }

    // ***********************



    // ************
    const formData = new FormData()
    formData.append("jobId", job._id)
    formData.append("companyName", data.companyName)
    formData.append("companyLocation", data.companyLocation)
    formData.append("companyDescription", data.companyDescription)
    formData.append("totalEmployees", data.totalEmployees)
    formData.append("companyProduct", data.companyProduct)
    formData.append("companyEmail", data.companyEmail)
    formData.append("companyContactNumber", data.companyContactNumber)
    formData.append("companyLogo", data.companyLogo)
    formData.append("companyUrl", data.companyUrl)
    formData.append("twitterUrl", data.twitterUrl)
    formData.append("linkedInUrl", data.linkedInUrl)
    

    
    setLoading(true)
    const result = await createCompany(formData, token)
    if (result) {
      dispatch(setStep(3))
      dispatch(setJob(result))
    }
    setLoading(false)
    // ************
  }

    

  const goBack = () => {
    dispatch(setStep(1))
    dispatch(setEditJob(true))
  }

  return (
    <div className="space-y-8 rounded-md border-[1px] border-black bg-white p-6">
      <p className="text-2xl font-semibold text-black">Company Data</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* company Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-md text-black" htmlFor="companyName">
           Company Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="companyName"
            disabled={loading}
            placeholder="Company Name"
            {...register("companyName", { required: true })}
            className="form-style w-full"
          />
          {errors.companyName && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Company name is required
            </span>
          )}
        </div>

        {/* Company Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="companyDescription">
          Company Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="companyDescription"
          placeholder="Enter Description for Company"
          {...register("companyDescription", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.companyDescription && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Company Description is required
          </span>
        )}
      </div>

      {/* Course Thumbnail Image */}
      <Upload
        name="companyLogo"
        label="Company Logo"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editJob ? job?.companyData?.companyLogo : null}
      />

        
        {/* company Location */}
        <div className="flex flex-col space-y-2">
          <label className="text-md text-black" htmlFor="companyLocation">
           Company Location <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="companyLocation"
            disabled={loading}
            placeholder="Company Location"
            {...register("companyLocation", { required: true })}
            className="form-style w-full"
          />
          {errors.companyLocation && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Company location is required
            </span>
          )}
        </div>


        {/* total Employees */}
      <div className="flex flex-col space-y-2">
        <label className="text-md text-black" htmlFor="totalEmployees">
        Number of Employees in company
        </label>
        <div className="relative">
          <input
            id="totalEmployees"
            placeholder="Enter Number of totalEmployees"
            type="number"
            {...register("totalEmployees")}
            className="form-style w-full"
          />
        </div>   
      </div>

      {/*  company Product */}
      <div className="flex flex-col space-y-2">
          <label className="text-md text-black" htmlFor="companyProduct">
           Companies Product
          </label>
          <input
            id="companyProduct"
            disabled={loading}
            placeholder="Companies Product"
            {...register("companyProduct")}
            className="form-style w-full"
          />
        </div>

        {/*  company Email */}
      <div className="flex flex-col space-y-2">
          <label className="text-md text-black" htmlFor="companyEmail">
           Company Email
          </label>
          <input
            id="companyEmail"
            disabled={loading}
            placeholder="Company Email"
            {...register("companyEmail")}
            className="form-style w-full"
          />
        </div>

        {/*  company Number */}
      <div className="flex flex-col space-y-2">
          <label className="text-md text-black" htmlFor="companyContactNumber">
          Company Contact Number
          </label>
          <input
            id="companyContactNumber"
            disabled={loading}
            type="number"
            placeholder="Company Contact Number"
            {...register("companyContactNumber")}
            className="form-style w-full"
          />
        </div>

        

      {/* Company Url */}
      <div className="flex flex-col space-y-2">
          <label className="text-md text-black" htmlFor="companyUrl">
           Company URL <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="companyUrl"
            disabled={loading}
            type="string"
            placeholder="Company URL"
            {...register("companyUrl", { required: true })}
            className="form-style w-full"
          />
          {errors.companyUrl && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Company URL is required
            </span>
          )}
        </div>

        {/* company twitter Url */}
      <div className="flex flex-col space-y-2">
          <label className="text-md text-black" htmlFor="twitterUrl">
           Company twitter URL
          </label>
          <input
            id="twitterUrl"
            disabled={loading}
            type="string"
            placeholder="Company URL"
            {...register("twitterUrl")}
            className="form-style w-full"
          />
        </div>

        {/* company linkedIn Url */}
      <div className="flex flex-col space-y-2">
          <label className="text-md text-black" htmlFor="linkedInUrl">
           Company linkedIn URL
          </label>
          <input
            id="linkedInUrl"
            disabled={loading}
            type="string"
            placeholder="Company linkedIn Url"
            {...register("linkedInUrl")}
            className="form-style w-full"
          />
        </div>

        



       {/* Next Button */}
      <div className="flex justify-end gap-x-2">
        {
          editJob&&(
            <button
            onClick={goBack}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
            >
            Back
          </button>
          )
        }

        {editJob && (
          <button
            onClick={() => dispatch(setStep(3))}
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

    </div>
  )
}

