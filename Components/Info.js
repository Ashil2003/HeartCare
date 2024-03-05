import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faUserDoctor, faKitMedical } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Cardiac Consultation and Evaluation"
          description="Our experienced cardiologists provide thorough 
          consultations and evaluations using state-of-the-art diagnostic tools such
           as echocardiography, ECG, and stress testing. We offer personalized 
           treatment plans tailored to each patient's unique needs."
          icon={faUserDoctor}
        />

        <InformationCard
          title="Interventional Cardiology"
          description="Our interventional cardiology team specializes in minimally 
          invasive procedures to diagnose and treat heart conditions. With advanced technologies like cardiac catheterization and angioplasty, we ensure precise and effective interventions with
           minimal discomfort and recovery time."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Cardiothoracic Surgery"
          description="SmOur cardiothoracic surgeons perform a wide range of surgical procedures to treat complex heart and chest conditions. With expertise in coronary artery bypass grafting (CABG), valve repair/replacement, and minimally invasive techniques,
           we deliver optimal outcomes with a focus on patient safety and 
           comfort.ile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faKitMedical}
        />
      </div>
    </div>
  );
}

export default Info;
