"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/portfolio.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaContao, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonFill, BsPersonFillDown } from "react-icons/bs";

const NavBar1 = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Image
          width={120}
          height={80}
          alt="profile"
          className="rounded-3xl p-2"
          src={Logo}
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 hover:border-b text-sm">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:border-b text-sm">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:border-b text-sm">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:border-b text-sm">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:border-b text-sm">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNavbar} className="md:hidden">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      <div
        className={
          navbar
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navbar
              ? "fixed left-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full justify-between items-center">
            <Image
              width={100}
              height={60}
              alt="profile"
              className="rounded-3xl p-2"
              src={Logo}
            />
            <div
              onClick={handleNavbar}
              className="rounded-full p-3 shadow-xl shadow-gray-400 hover:bg-[#AEA5B3] hover:text-white cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="">
              <Link href="/">
                <li className="py-4 hover:border-b text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 hover:border-b text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 hover:border-b text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 hover:border-b text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 hover:border-b text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="tracking-widest text-[#660066]">Let's Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar1;
