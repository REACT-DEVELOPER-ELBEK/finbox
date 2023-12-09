"use client";
import "./SingUp.scss";
import { useState } from "react";
import { inputInputLabel, loginBg, loginWelcome } from "../assets/img";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="signup">
      <div className="signup__wrapper">
        <div className="signup__bg">
          <div className="signup__bg__img">
            <Image src={loginBg} alt="logo" />
          </div>
          <div className="signup__bg__content">
            <h2>Welcome to Finbax my friend</h2>
            <p>just a couple of clicks and we start</p>
          </div>
        </div>
        <div className="signup__fields">
          <div className="signup__header">
            <Image src={loginWelcome} alt="logo" />
            <h2>Xush kelibsiz!</h2>
          </div>
          <div className="signup__fields__inputs">
            <div className="input">
              <label>
                <Image src={inputInputLabel} alt="logo" />
              </label>
              <input type="text" placeholder="Ism" />
            </div>
            <div className="input">
              <label>
                <Image src={inputInputLabel} alt="logo" />
              </label>
              <input type="text" placeholder="Familiya" />
            </div>
            <div className="input">
              <label>
                <MdOutlineMailOutline />
              </label>
              <input type="email" placeholder="Elektron pochta" />
            </div>
            <div className="input">
              <label>
                <BsTelephone />
              </label>
              <input type="text" placeholder="Telefon raqam" />
            </div>
            <div className="input">
              <label>
                <BsTelephone />
              </label>
              <input type={passwordShown?"text":"password"} placeholder="Parol" />
              <span
                onClick={() =>
                  passwordShown
                    ? setPasswordShown(false)
                    : setPasswordShown(true)
                }
              >
                {passwordShown?<FaEyeSlash/>:<FaEye />}
              </span>
            </div>
            <button>Ro’yxatdan o’tish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
