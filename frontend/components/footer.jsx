import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return(
    <div className="footer">
      <div className="footer-links">
        <a href={`https://github.com/jh177`} target="_blank">
          <FaGithub size={36}/>
        </a>
        <a href={`https://www.linkedin.com/in/zjhong`} target="_blank">
          <FaLinkedin size={36}/>
        </a>
      </div>
    </div>
  )
}

export default Footer;