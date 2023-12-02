import React from 'react'
import {  useNavigate } from 'react-router-dom'
// import { Outlet } from 'react-router-dom';


const home = () => {
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/support");
    }



  return (
    <div>
    <div >
      This is My Home Page
    </div>
    <button onClick>move to support page</button>
    </div>
    
  )
}

export default home
