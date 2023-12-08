import "./Nav.scss"
import { navLogo } from '@/app/assets/img'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <Link href='/'><Image src={navLogo} alt='logo' title='Home'/></Link>
                </div>
                <div className="nav__links">
                    <Link href='all-courses'>Barcha kurslar</Link>
                    <Link href='about'>Biz haqimizda</Link>
                    <Link href='news'>Yangiliklar</Link>
                    <Link href='/login'><button>Kirish</button></Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav