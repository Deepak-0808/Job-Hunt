import React from "react";
import { useNavigate } from "react-router-dom";

const about = () => {


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
