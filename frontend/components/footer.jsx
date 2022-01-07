import React from "react";
import { FaGithub, FaLinkedin, FaAngellist} from "react-icons/fa";

const Footer = () => {
  return(
    <div className="footer-content">
      <div className="footer-links">
        <a href="http://www.jameszhong.com/" target="_blank">
          <img src={window.portfolioUrl} id="portfolio-logo"/>
        </a>
        <a href={`https://github.com/jh177`} target="_blank">
          <FaGithub size={36} color="#f7f7f7"/>
        </a>
        <a href={`https://www.linkedin.com/in/zjhong`} target="_blank">
          <FaLinkedin size={36} color="#f7f7f7"/>
        </a>
        <a href={`https://angel.co/u/james-hong-20`} target="_blank">
          <FaAngellist size={36} color="#f7f7f7" />
        </a>
      </div>
    </div>
  )
}

export default Footer;