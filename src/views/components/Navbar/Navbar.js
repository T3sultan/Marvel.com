import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>NEWS</a>
            </li>
            <li>
              <a>COMICS</a>
            </li>
            <li>
              <a>CHARACTERS</a>
            </li>
            <li>
              <a>MOVIES</a>
            </li>{" "}
            <li>
              <a>TV SHOWS</a>
            </li>
            <li>
              <a>GAMES</a>
            </li>{" "}
            <li>
              <a>VIDEOS</a>
            </li>
            <li>
              <a>LIFESTYLE</a>
            </li>
            <li>
              <a>SHOP</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-white lg:hidden">
          MARVEL
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-white text-sm font-bold">NEWS</a>
          </li>

          <li>
            <a className="text-white text-sm font-bold">COMICS</a>
          </li>
          <li>
            <a className="text-white text-sm font-bold">CHARACTERS</a>
          </li>

          <li>
            <a className="text-white text-sm font-bold">MOVIES</a>
          </li>
          <li>
            <a className="text-white text-sm font-bold">TV SHOWS</a>
          </li>

          <li>
            <a className="text-white text-sm font-bold">GAMES</a>
          </li>
          <li>
            <a className="text-white text-sm font-bold">VIDEOS</a>
          </li>

          <li>
            <a className="text-white text-sm font-bold">MORE</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Get started</a> */}
      </div>
    </div>
  );
};

export default Navbar;
