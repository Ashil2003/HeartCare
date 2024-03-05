import React from "react";
import DoctorCard from "./DoctorCard";
import dps from "../Assets/dps.jpg";
import dsc from "../Assets/dsc.jpg";
import ddg from "../Assets/ddg.jpg";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Heart Care. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={dps}
          name="Dr. Devi Prasad Shetty"
          title="Cardiologist"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={dsc}
          name="Dr. Subash Chandra"
          title="Cardiologist"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={ddg}
          name="Dr.Debasish Gosh "
          title="Cardiologist"
          stars="4.7"
          reviews="450"
        />
      </div>
    </div>
  );
}

export default Doctors;
