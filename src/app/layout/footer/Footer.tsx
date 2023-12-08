import "./Footer.scss";
import React from "react";
import Image from "next/image";
import { navLogo } from "@/app/assets/img";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__info">
            <Image src={navLogo} alt="logo"/>
            <h2>95 FF3, App Street Avenue NSW 96209</h2>
            <h3><span></span></h3>
            <h3><span></span></h3>
          </div>
          <div className="footer__course__info"></div>
          <div className="footer__payment"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
