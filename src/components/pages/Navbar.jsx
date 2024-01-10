import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { TiAdjustBrightness } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="bg-transparent navbar  bg-base-100 position-fixed">
      <div className="navbar-start">
        <div className="position-relative dropdown max-[1027px]:block hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="position-absolute z-20 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 text-white rounded-box w-48"
          >
            <li>
              <a>Register</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About Farm</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
          </ul>
        </div>
        <div className="z-10 min-[1027px]:block hidden  navbar-center lg:flex">
          <ul className=" menu  menu-horizontal text-lg text-white px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details className="position-relative z-10">
                <summary>Service</summary>
                <ul className="p-2 position-absolute ">
                  <li className="hover:bg-green-600 bg-gray-500 text-white">
                    <a>Submenu 1</a>
                  </li>
                  <li className="hover:bg-green-600 bg-gray-500">
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:bg-green-600 ">
              <a>About</a>
            </li>
            <li className="hover:bg-green-600 ">
              <a>Register</a>
            </li>
            <li className="hover:bg-green-600 ">
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="h-[5vw] w-[5vw] max-[600px]:h-[10vw] max-[600px]:w-[10vw] rounded-[50%] bg-cover bg-no-repeat bg-center  bg-[url('/public/assets/images/kisan.jpg')]"></div>
      </div>
      <div className="right navbar-end flex gap-[5%] pr-2">
        <div className="max-sm:hidden">
          <select className="border rounded-md ">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="bg-gray-500 rounded-[50%] w-[1.5rem] h-[1.5]  max-sm:hidden text-2xl cursor-pointer">
          <TiAdjustBrightness />
        </div>
        <div className="text-white  cursor-pointer hidden max-sm:block">
          <CiMenuKebab />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
