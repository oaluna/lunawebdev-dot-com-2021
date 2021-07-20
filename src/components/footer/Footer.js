import React from "react";

import SvgIcons from "../SvgIcons";

import "../pages.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerFirstRow">
          <Link to={"/"} className="footerLogo">
            <SvgIcons
              dimension="200px"
              iconName="socialflowFullLogo"
              fillColor="#060606"
            />
          </Link>
          <div className="socialBox">
            <a
              href="https://www.instagram.com/socialflowagency"
              className="socialItem"
            >
              <SvgIcons
                dimension="30px"
                iconName="linkedin"
                fillColor="#060606"
              />
            </a>
            <a
              href="https://www.instagram.com/socialflowagency"
              className="socialItem"
            >
              <SvgIcons
                dimension="30px"
                iconName="instagram"
                fillColor="#060606"
              />
            </a>
          </div>
        </div>
        <div className="footerMainMenu">
          <h4>
            <Link to="/">Home</Link>
          </h4>
          <h4>
            <Link to="/Projects">Case History</Link>
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
          <h6>Copyright @ 2021 Socialflow LTD, All rights reserved</h6>
          <div className="footerEndMenu">
            <h6> Terms and conditions </h6>
            <h6> Privacy policy </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
