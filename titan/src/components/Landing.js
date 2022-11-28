import React from "react";
import { Link } from "react-router-dom";
import space from "./Space.mp4";
import "./Landing.css";

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <video
        src={space}
        autoPlay={"autoplay"}
        loop
        id="video"
        type="video/mp4"
      />
      <Link to="/home">
        <button className="btn btn-dark btn-lg">Get Started</button>
      </Link>
    </div>
  );
};

export default Landing;
