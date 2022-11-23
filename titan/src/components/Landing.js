import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Link to="/home">

        <button className="btn btn-dark btn-lg">
          Enter Site
        </button>
      </Link>
      <div></div>
    </>
  );
};

export default Landing;
