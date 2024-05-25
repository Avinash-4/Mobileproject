import React from "react";
import "./index.css";
// import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container" style={{ paddingLeft: "40px" }}>
        <div>
          <small>TOTAL MOBILE CARE SOLUTION</small>
          <h1>
            Your Most Trusted <br />
            Mobile Partner
          </h1>
          <small>
            In fast-paced digital world, seamless connectivity is key. Count on
            us to empower your digital experiences every step of the way.
          </small>
        </div>
        <div className="d-flex justify-content-start gap-2">
          <Button
            className="btn-get-started scrollto "
            style={{ marginRight: "20px" }}
          >
            Get Started
          </Button>
          <Button className="btn-get-started scrollto">
            Track Appointment
          </Button>
          {/* <Button to={"/doctors"} className="btn-get-started scrollto">
            Get Started
          </Link>
          <Link to={"/track-appointment"} className="btn-get-started scrollto">
            Track Appointment
          </Link> */}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
