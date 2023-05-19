import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#152238", paddingTop: "2%", marginTop: "2%" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h3 style={{ color: " #0095b6" }}>About Us</h3>
            <p style={{ color: "white" }}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h3 style={{ color: " #0095b6" }}>Contact</h3>
            <p style={{ color: "white" }}>Email: info@example.com</p>
            <p style={{ color: "white" }}>Phone: 123-456-7890</p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h3 style={{ color: " #0095b6" }}>Follow Us</h3>
            <div
              className="social-media"
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingRight: "30%",
              }}
            >
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} color="white" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} color="white" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
