"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCloudDownloadAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";

const MainPage = () => {
  const [email] = useState("ishameel97@gmail.com");
  const [contact] = useState("+91 6376673084");
  const [isOpenMail, setIsOpenMail] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCLoseMail = () => {
    setIsOpenMail(false);
    setCopied(false); // Reset copied state when closing
  };

  const handleCopyMail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  const handleCLoseContact = () => {
    setIsOpenContact(false);
    setCopied(false); // Reset copied state when closing
  };

  const handleCopyContact = () => {
    navigator.clipboard
      .writeText(contact)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1>
            Hi, I'm <span className="text-[#660066]">Isha Meel</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end developer specializing in creating responsive and
            user friendly web and mobile applications.
          </p>
          <div className="flex items-center gap-10 justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/isha-meel-3a3050286/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/ishameel11"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaGithub />
              </div>
            </a>
            <div
              onClick={() => setIsOpenMail(true)}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500"
            >
              <AiOutlineMail />
            </div>
            <div
              onClick={() => setIsOpenContact(true)}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500"
            >
              <BsFillPersonFill />
            </div>
          </div>
          {isOpenMail && (
            <div className="flex flex-col w-fit justify-center items-center rounded-xl shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <div className="flex justify-between items-center gap-2">
                <p className="text-sm">
                  Email: <a href={`mailto:${email}`}>{email}</a>
                </p>
                <div
                  className="rounded-full p-2 shadow-xl shadow-gray-400 bg-[#301934] text-white hover:bg-[#AEA5B3] cursor-pointer"
                  onClick={handleCopyMail}
                >
                  <FaRegCopy />
                </div>
                <div
                  onClick={handleCLoseMail}
                  className="rounded-full p-2 shadow-xl shadow-gray-400 hover:bg-[#AEA5B3] hover:text-white cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              {copied && <p className="text-sm">Email copied to clipboard!</p>}
            </div>
          )}
          {isOpenContact && (
            <div className="flex flex-col w-fit justify-center items-center rounded-xl shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <div className="flex justify-between items-center gap-2">
                <p className="text-sm">
                  Contact: <a href={`mailto:${contact}`}>{contact}</a>
                </p>
                <div
                  className="rounded-full p-2 shadow-xl shadow-gray-400 bg-[#301934] text-white hover:bg-[#AEA5B3] cursor-pointer"
                  onClick={handleCopyContact}
                >
                  <FaRegCopy />
                </div>
                <div
                  onClick={handleCLoseContact}
                  className="rounded-full p-2 shadow-xl shadow-gray-400 hover:bg-[#AEA5B3] hover:text-white cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              {copied && <p className="text-sm">Email copied to clipboard!</p>}
            </div>
          )}
          <div className="rounded-full py-3 px-6 my-4 shadow-xl shadow-gray-400 bg-[#301934] text-white hover:bg-[#AEA5B3] cursor-pointer">
            <a
              className="flex justify-between items-center gap-2"
              href="/resume.pdf"
              download
            >
              <p>Download CV</p>
              <FaCloudDownloadAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
