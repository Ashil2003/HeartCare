import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">HeartCare</p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <Link to="/services#emergency-care">Emergency Care</Link>
            </li>
            <li>
              <Link to="/services#heart-disease">Heart Disease</Link>
            </li>
            <li>
              <Link to="/services#prescription">Prescription</Link>
            </li>
            <li>
              <Link to="/services#doctor-insights">Insights for doctors</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@heartcare.com">support@heartcare.com</a>
            </li>
            <li>
              <a href="mailto:appointment@heartcare.com">
                appointment@heartcare.com
              </a>
            </li>
            <li>
              <a href="tel:+919988776655">+91 99887 76655</a>
            </li>
            <li>
              <a href="tel:+082426232">+0824 26232</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

