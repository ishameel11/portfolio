"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/ishame.png";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMenu,
  AiOutlineTwitter,
} from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed w-full h-16 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 ">
        <Link href="/">
          <h1 className="cursor-pointer">ISHA MEEL</h1>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/projects">
              <li className="ml-10 hover:border-b text-lg">PROJECTS</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 hover:border-b text-lg">CONTACT ME</li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 hover:border-b text-lg">SKILLS</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div onClick={handleNav} className="flex justify-end cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
          <div className="flex-col w-full ">
            <div className="flex-col py-4">
              <ul>
                <Link href="/projects">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    PROJECTS
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    CONTACT ME
                  </li>
                </Link>
                <Link href="/skills">
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="py-4 cursor-pointer"
                  >
                    SKILLS
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-row justify-around pt-10 items-center">
              <AiOutlineInstagram size={30} className="cursor-pointer" />
              <AiOutlineLinkedin size={30} className="cursor-pointer" />
              <AiOutlineTwitter size={30} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
