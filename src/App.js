import './App.css';
import { Routes,Route, useNavigate} from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Home  from "./pages/Home";
import NotFound  from "./pages/NotFound";
import Browse from './pages/Browse';
import MainHeader from './pages/MainHeader';
import React from 'react';
import Navbar from './components/common/Navbar';
import CareerAdvice from './pages/CareerAdvice';
import OpenRoute from "./components/core/Auth/OpenRoute"
import UpdatePassword from './pages/UpdatePassword';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import ContactUs from './pages/ContactUs';
import MyProfile from './components/core/Dashboard/MyProfile';
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/core/Auth/PrivateRoute';
import Settings from "./components/core/Dashboard/Settings";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./components/core/Dashboard/AddCourse"
import Instructor from "./components/core/Dashboard/Instructor"
import MyCourses from "./components/core/Dashboard/MyCourses"
import EditCourse from "./components/core/Dashboard/EditCourse"
import { getUserDetails } from "./services/operations/profileAPI"



function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className="App">
        <Navbar/>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/browse" element={<Browse/>} />
          <Route path="/careeradvice" element={<CareerAdvice/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/signin" element={<OpenRoute><SignIn/></OpenRoute>} />
          <Route path="/signup" element={ <OpenRoute><SignUp/></OpenRoute> } />
          <Route path="/forgot" element={<OpenRoute><ForgotPassword/></OpenRoute>} />
          <Route path="/update-password/:id" element={<OpenRoute><UpdatePassword/></OpenRoute>} />
          <Route path="/verify-email" element={<OpenRoute><VerifyEmail/></OpenRoute>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
              {
                user?.accountType === ACCOUNT_TYPE.USER && (
                  <>
                  {/* <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} /> */}
                  </>
                )
              }
              {
                user?.accountType === ACCOUNT_TYPE.ADMIN && (
                  <>
                  <Route path="dashboard/admin" element={<Instructor />} />
                  <Route path="dashboard/my-courses" element={<MyCourses />} />
                  <Route path="dashboard/add-course" element={<AddCourse/>} />
                  <Route path="dashboard/edit-course/:jobId" element={<EditCourse />} />
                  </>
                )
              }
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
