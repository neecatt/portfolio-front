import { Button } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import axios from "axios";

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const [filename, setFilename] = useState("");

  // const handleClick = (index: number) => {
  //   setSelected(index);
  // };

  // useEffect(() => {
  //   const fetchFilename = async () => {
  //     const response = await axios.get("http://localhost:3000/download");
  //     setFilename(response.data);
  //   };
  //   fetchFilename();
  // }, []);

  // const handleDownload = async () => {
  //   var url = `http://localhost:3000/download/${filename}`;

  //   const response = await axios({
  //     url,
  //     method: "GET",
  //     responseType: "blob",
  //   });

  //   var url = window.URL.createObjectURL(new Blob([response.data]));
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", "Nijat_Abdullazada_resume.pdf");
  //   document.body.appendChild(link);
  //   link.click();
  // };

  return (
    <>
      <nav className="navbar flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="cursor-pointer font-semibold text-xl tracking-tight">
            Nijat's Portfolio
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:bg-green-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/home"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#5F9EA0] hover:border-white mr-4"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#5F9EA0] hover:border-white mr-4"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#5F9EA0] hover:border-white mr-4"
            >
              Projects
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-[#5F9EA0] hover:border-white mr-4"
            >
              Skills
            </a>
            <a
              href="#responsive-header"
              className="object-right block mt-4 lg:inline-block lg:mt-0 hover:text-[#5F9EA0] hover:border-white mr-4"
            >
              Contact
            </a>
          </div>
          {/* <Button
            onClick={handleDownload}
            border="3px"
            padding={"0.5rem"}
            backgroundColor="#5f9ea0"
            borderColor={"gray.200"}
            borderRadius="5px"
            className="text-white inline-flex"
          >
            Resume <DownloadIcon className="m-1" />
          </Button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
