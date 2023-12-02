import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  step: 1,
  job: null,
  editJob: false,
}

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setJob: (state, action) => {
      state.job = action.payload
    },
    setEditJob: (state, action) => {
      state.editJob = action.payload
    },
    resetJobState: (state) => {
      state.step = 1
      state.job = null
      state.editJob = false
    },
  },
})

export const {
  setStep,
  setJob,
  setEditJob,
  resetJobState,
} = jobSlice.actions

export default jobSlice.reducer
