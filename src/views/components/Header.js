import React from "react";
import logo from "../../assets/Marvel_Logo.ce377fd37227dd680d0b06449a5bcc4c.svg";
import icon from "../../assets/icon.png";

const Header = () => {
  return (
    <div className="navbar bg-gray-900 border ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="flex gap-4 ml-56 ">
              <div>
                <a className="text-white" href="">
                  SIGNIN
                </a>
              </div>
              <div>
                <a className="text-white" href="">
                  JOIN
                </a>
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-28" src={logo} alt="" />
        </a>
      </div>

      <div className="navbar-end mr-5">
        <div className="flex gap-4 items-center">
          <div>
            <img className="w-5" src={icon} alt="" />
          </div>
          <div>
            <h1 className="text-white  font-bold">MARVEL UNLIMITED</h1>
            <p className="text-white text-sm  flex items-center justify-center">
              SUBSCRIBE
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
