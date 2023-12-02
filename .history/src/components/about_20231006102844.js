import React from "react";
import { useNavigate } from "react-router-dom";

const about = () => {

  const navigate = useNavigate();
  function clickHandler() {
    navigate("/labs");
  }

// //   to move back 1 step
//   function backHandler(){
//     navigate(-1);
//   }

  return (
    <div>
      <div>
        About Us Page
      </div>
      <button onClick={clickHandler}>move to labs Page</button>
      <button onClick={backHandler}>go back</button>
    </div>
  )
};

export default about;
