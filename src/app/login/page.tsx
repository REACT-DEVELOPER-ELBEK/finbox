"use client";
import "./Login.scss";
import { useState } from "react";
import { inputInputLabel, loginBg, loginWelcome } from "../assets/img";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import Link from "next/link";

const Login = () => {
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
                <MdOutlineMailOutline />
              </label>
              <input
                type="text"
                spellCheck="false"
                placeholder="Elektron pochta"
              />
            </div>
            <div className="input">
              <label>
                <CiLock />
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Parol"
              />
              <span
                onClick={() =>
                  passwordShown
                    ? setPasswordShown(false)
                    : setPasswordShown(true)
                }
              >
                {passwordShown ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button>Platformaga kirish</button>
            <div className="to-signup">
              <p>Akkauntingiz yo’qmi?</p>
              <Link href="/sign-up">Unda Ro’yxatdan o’ting!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
