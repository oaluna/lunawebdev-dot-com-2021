import React from "react";

import SvgIcons from "../SvgIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../pages.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerFirstRow">
          <Link to={"/"} className="footerLogo">
            <SvgIcons
              iconName="oscarArmandoLunaLogo"
              style={{ maxWidth: "100px !important" }}
            />
          </Link>
          <div className="socialBox">
            <a
              href="https://linkedin.com/in/oscar-a-luna"
              className="socialItem"
            >
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faLinkedin}
              />
            </a>
            <a href="https://www.medium.com/@oaluna" className="socialItem">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faMedium}
              />
            </a>

            <a href="https://github.com/oaluna" className="socialItem">
              <FontAwesomeIcon
                style={{ width: "32px", height: "32px" }}
                icon={faGithub}
              />
            </a>
          </div>
        </div>
        <div className="footerMainMenu">
          <h4>
            <Link to="/">Home</Link>
          </h4>
          <h4>
            <Link to="/Projects">Past Projects</Link>
          </h4>
          <h4>
            <Link to="/Services">Services</Link>
          </h4>
          <h4>
            <Link to="/Contacts">Contacts</Link>
          </h4>
          <h4>
            <Link to="/Aboutus">About Us</Link>
          </h4>
        </div>

        <div className="footerEnd">
          <h6>Copyright @ 2021 by Oscar Armando Luna, All rights reserved</h6>
          <div className="footerEndMenu">
            <h6> Terms and conditions </h6>
            <h6> Privacy policy </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
