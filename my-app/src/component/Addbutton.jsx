import React from "react";
import { Link } from "react-router-dom";
// import notepic from "../assets/addfile.svg"
import { ReactComponent as AddBut } from "../assets/newnote.svg";
const Addbutton = () => {
  return (
    <Link to="/notes/new" className="floating-button">
      <AddBut />
      {/* <img src={require(notepic)}/> */}
      {/* <p>meow</p> */}
    </Link>
  );
};

export default Addbutton;
