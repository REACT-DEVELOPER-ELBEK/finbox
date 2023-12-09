"use client";
import "./Footer.scss";
import React from "react";
import Image from "next/image";
import { navLogo } from "@/app/assets/img";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  footerTwitter,
  footerFacebook,
  footerTelegram,
  footerInstagram,
} from "../../assets/img/index";
import {
  upay,
  payme,
  masterCard,
  zoodpay,
  zoodpayLogo,
} from "../../assets/img/index";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname()
  const additionalInfos = [
    "Kurs haqida malumot",
    "Lorem ipsum",
    "Trading kurslari",
    "Yetkazib berish",
    "Bepul kurslar",
    "Chegirmalar",
    "Buyurtma",
    "Ustozlar",
  ];
  const socialMediasLogo = [
    footerTwitter,
    footerFacebook,
    footerTelegram,
    footerInstagram,
  ];
  const paymentItems = [upay, payme, masterCard, zoodpayLogo, zoodpay];
  return pathname=="/sign-up"||pathname=="/login"?<></>:(
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__info">
            <Image src={navLogo} alt="logo" className="footer-logo" />
            <p>95 FF3, App Street Avenue NSW 96209</p>
            <p>
              <span>
                <BsFillTelephoneFill /> Telefon:{" "}
              </span>
              8(374) 225 80 00
            </p>
            <p>
              <span>
                <MdEmail /> Email:{" "}
              </span>
              elbeky829@gmail.com
            </p>
          </div>
          <div className="footer__course__info">
            <h1>Qo’shimcha ma’lumot va xizmatlar:</h1>
            <ul>
              {additionalInfos.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="footer__payment">
            <div className="footer__payment__meets">
              <h2>Biz bilan bog`laning</h2>
              <div className="social__media__items">
                {socialMediasLogo.map((item: string, index: number) => (
                  <Image src={item} alt="logo" key={index} />
                ))}
              </div>
            </div>
            <div className="footer__payment__choices">
              <h2>To’lovlar:</h2>
              <div className="footer__payment__choices__items">
                {paymentItems.map((item: string, index: number) => (
                  <Image src={item} alt="logo" key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
