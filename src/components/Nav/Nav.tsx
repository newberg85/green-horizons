"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from "@/components/Ui/Button"

//images
//import Logo from "public/assets/images/logo.svg";
//import Hamburger from "public/assets/images/icon-hamburger.svg";
//import Close from "public/assets/images/icon-close.svg"


function NavBar() {
  const toggleNavbar = () => {
    setNavbar((prevNavbar) => !prevNavbar);
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuStyle = {
    backgroundColor: scrolling ? "white" : "transparent",
    transition: "background-color 0.3s ease",
  };

  const textStyle = {
    color: scrolling ? "black" : "white",
    borderColor: scrolling ? "black" : "white",
  }

  const buttonStyle = {
    // backgroundColor: scrolling ? "black" : "transparent",
    color: scrolling ? "black": "white",
    borderColor: scrolling ? "black" : "white",
  }

  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 z-10" style={menuStyle}>
        <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-36">
          <div>
            <div className="flex items-center justify-between py-3 py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h1 className='font-bold text-xl text-white' style={textStyle}><span className='text-green'>Green</span>horizons</h1>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                {/* <button
                  className="p-2 text-gray-700 rounded-md outline-none " onClick={toggleNavbar}

                >
                  {navbar ? (
                    <Image src={Close} width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={Hamburger}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none "
                    />
                  )}
                </button> */}
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1  items-center block md:hidden lg:block sm:hidden md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="text-base text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-silver md:hover:bg-transparent md:text-sm" style={textStyle}>
                  <Link href="#about">
                    Pricing
                  </Link>
                </li>
                <li className="text-base text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-silver md:hover:bg-transparent md:text-sm" style={textStyle}>
                  <Link href="#blog">
                    Product
                  </Link>
                </li>
                <li className="text-base text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-silver md:hover:bg-transparent md:text-sm" style={textStyle}>
                  <Link href="#contact">
                    About Us
                  </Link>
                </li>
                <li className="text-base text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-silver  border-purple-900  md:hover:text-silver md:hover:bg-transparent md:text-sm" style={textStyle}>
                  <Link href="#projects">
                    Careers
                  </Link>
                </li>
                <li className="text-base text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-silver  border-purple-900  md:hover:text-silver md:hover:bg-transparent md:text-sm" style={textStyle}>
                  <Link href="#projects">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className='hidden flex items-center  py-3 md:py-5 lg:block md:hidden sm: '>
                <Button style={buttonStyle}>Agendar</Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;