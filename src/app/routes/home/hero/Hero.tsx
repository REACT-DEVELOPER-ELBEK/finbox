"use client";
import "./Hero.scss";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { heroChart } from "@/app/assets/img";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <p>Creative mind, creative works</p>
        <h2><span>We’re</span> trading agency.</h2>
        <div className="hero__input">
          <input type="text" spellCheck='false' placeholder="Kursni qidirish" />
          <label>
            <IoSearchOutline />
          </label>
        </div>
      </div>
      <div className="hero__img">
        <Image src={heroChart} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
