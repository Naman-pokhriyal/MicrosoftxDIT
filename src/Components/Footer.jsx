import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="ftop">
        <div className="fleft">
          <p className="footer-text">Follow MLSA DIT</p>
          <ul className="follow-list">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Naman-pokhriyal"
            >
              <li>
                <BsGithub size="35" />
              </li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/microsoftxdit/?hl=en"
            >
              <li>
                <BsInstagram size="35" />
              </li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/microsoft-student-community-x-dit/about/"
            >
              <li>
                <BsLinkedin size="35" />
              </li>
            </a>
          </ul>
        </div>
        <div className="fright">
          <p className="footer-text">Contact Us</p>
          <p>namanpokhriyal03@gmail.com</p>
        </div>
      </div>
      <div className="fbottom">
        © 2021 Microsoft Learn Student Ambassadors DIT
      </div>
    </footer>
  );
}
