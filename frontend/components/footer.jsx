import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return(
    <div className="footer-content">
      <div className="footer-links">
        <a href={`https://github.com/jh177`} target="_blank">
          <FaGithub size={36} color="#f7f7f7"/>
        </a>
        <a href={`https://www.linkedin.com/in/zjhong`} target="_blank">
          <FaLinkedin size={36} color="#f7f7f7"/>
        </a>
      </div>
    </div>
  )
}

export default Footer;