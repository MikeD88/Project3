import React from "react";
import { Link, Outlet } from "react-router-dom";
import space from "./Space.mp4";
import getData from "../rest/getData";
import "./Landing.css";


export async function loader() {
  const data = await getData();
  return { data };
}

const Landing = () => {
  return (

    <>
      <video
        important
        src={space}
        autoPlay={"autoplay"}
        loop
        id="video"
        type="video/mp4"
      />
      <div className="Landing"
        style={{
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column"
        }}
      >
        <Link style={{ textDecoration: 'none' }} to="/home">
          <button id="button">
            <img width="200" src="https://user-images.githubusercontent.com/110724575/203436958-6b2292fb-89cd-4736-9c69-bc8e5c936922.png" alt="TITAN" />
            <h1 className="text">ENTER TITAN</h1>
          </button>
        </Link>
        <footer className="text2">Created by Active Duty Military for Active Duty Military to track training & certification currency</footer>
        <Outlet />
      </div>
    </>
  );
};

export default Landing;
