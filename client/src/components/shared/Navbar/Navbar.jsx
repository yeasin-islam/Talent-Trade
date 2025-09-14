import React from "react";
import { Link, NavLink } from "react-router";
// import FixMateLogo from "../Logo/FixMateLogo";
import UseAuth from "../../../hooks/UseAuth";
import ThemeToggle from "../../../DarkMode/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const handleLogOut = () => {
    logOut().catch((err) => console.error(err));
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/pricing", label: "Pricing" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const renderLinks = () =>
    navLinks.map((link) => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-primary font-semibold" : ""
            }`
          }
        >
          {link.label}
        </NavLink>
      </li>
    ));

  return (
    <div className="navbar bg-base-100 dark:bg-gray-900 shadow-md sticky top-0 z-9999 font-[Poppins] transition-colors duration-300">
      {/* Left: Logo */}
      <div className="navbar-start">
        {/* <FixMateLogo /> */}
      </div>

      {/* Center: Nav Links (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">{renderLinks()}</ul>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-center lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-56"
          >
            {renderLinks()}
            {!user ? (
              <li>
                <NavLink to="/login">Login / Signup</NavLink>
              </li>
            ) : (
              <>
                <li className="pointer-events-none text-center font-semibold">
                  {user.displayName}
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <button onClick={handleLogOut} className="w-full text-left">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="navbar-end flex items-center gap-1">
        {/* Dark/Light Mode Toggle */}
        <ThemeToggle />

        {/* Auth */}
        {!user ? (
          <Link to="/login" className="btn btn-ghost hidden lg:flex">
            Login / Signup
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "/default-avatar.png"} alt="User" />
              </div>
            </div>
            <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box w-52">
              <li className="pointer-events-none text-center font-semibold">
                {user.displayName}
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <button onClick={handleLogOut} className="w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Call-to-Action */}
        <Link
          to="/book"
          className="btn btn-primary rounded-full px-4 font-semibold shadow-md hover:scale-105 transition-transform duration-200"
        >
          Book a Fixer
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
