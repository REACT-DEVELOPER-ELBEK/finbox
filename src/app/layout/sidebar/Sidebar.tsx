"use client";
import Image from "next/image";
import "./Sidebar.scss";
import React from "react";
import {
  sideBarMainLogo,
  dashboardLogo,
  paymentLogo,
  moderatorsLogo,
  usersLogo,
  lidsLogo,
  uploadLogo,
} from "@/app/assets/img";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
    const router = useRouter()
  const sidebarMenu = [
    {
      logo: dashboardLogo,
      name: "Dashboard",
      href: "/admin"
    },
    {
      logo: paymentLogo,
      name: "To’lovlar",
      href: "/admin/payments-history"
    },
    {
      logo: moderatorsLogo,
      name: "Moderatorlar",
      href: "/admin/mods"
    },
    {
      logo: lidsLogo,
      name: "Lidlar",
      href: "/admin/lids"
    },
    {
      logo: uploadLogo,
      name: "Kurslarni yuklash",
      href: "/admin/upload"
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Image src={sideBarMainLogo} alt="logo" />
      </div>
      <div className="sidebar__links">
        {
            sidebarMenu.map((item:any, index:number)=>(
                <Link href={item.href} className="sidebar__links__item active" key={index}>
                    <Image src={item.logo} alt="logo"/>
                    <p>{item.name}</p>
                </Link>
            ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
