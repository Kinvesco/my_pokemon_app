import React from "react";
import {FooterWrap} from "../../components/footer/FooterStyle";
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'
import {SlSocialTwitter} from "react-icons/sl"
import {FaWhatsapp,FaGithub} from "react-icons/fa"
import {TfiEmail, TfiLocationPin} from "react-icons/tfi"
import {BsSendCheck} from "react-icons/bs"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <FooterWrap>
      <div className="foot">
        <div className="foot_flex">
          <Link to="/">
            <div className="foot_item-logo">
              <img src={mainLogo} alt="Logo" className="app-logo" />
              <img src={appName} alt="Logo" className="app-name" />
            </div>
          </Link>
          <a href="https://github.com/kinvesco">
            <div className="foot_item our-portfolio">
              <a target="_blank" href="https://kingsleyajagu.vercel.app/" className="portfolio-link">
                <BsSendCheck className="portfolio" />
                <p>Visit My Website</p>
              </a>
            </div>
          </a>
          <div className="foot_item contact-me">
            <TfiLocationPin className="location-icon" />
            <p>Awka, Anambra State, Nigeria - (+234) 8032914903</p>
          </div>
          <div className="foot_item">
            <div className="social_icons">
              <a target="_blank" href="https://wa.me/2348032914903"><FaWhatsapp className="whatsapp" /></a>
              <a target="_blank" href="https://www.twitter.com/kinvesco"><SlSocialTwitter className="twitter" /></a>
              <a target="_blank" href="https://github.com/kinvesco"><FaGithub className="github" /></a>
              <a target="_blank" href="mailto:ajagu.kingsley.onyeka@gmail.com/"><TfiEmail className="email" /></a>
            </div>
          </div>
        </div>
        <p className="copy">&copy; kinvesco Global Technologies {new Date().getFullYear()}</p>
      </div>
    </FooterWrap>
  );
};

export default Footer;
