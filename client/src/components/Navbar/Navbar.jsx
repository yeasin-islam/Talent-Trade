import React from "react";
import { Link, NavLink } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import ThemeToggle from "../../DarkMode/ThemeToggle";
import MainLogo from "../shared/MainLogo";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const handleLogOut = () => {
    logOut().catch((err) => console.error(err));
  };

  // Main navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/feed", label: "Feed" },
    { to: "/swaps", label: "Swaps" },
    { to: "/courses", label: "Courses" },
    { to: "/jobs", label: "Jobs" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const renderLinks = () =>
    navLinks.map((link) => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `flex items-center gap-2 ${isActive ? 'text-primary font-bold border-b-2 border-primary'
              : ' hover:text-primary'}`
          }
        >
          {link.label}
        </NavLink>
      </li>
    ));

  return (
    <div className="bg-base-100  shadow-md sticky top-0 z-50 transition-colors font-semibold duration-300">
      <div className="navbar container mx-auto px-4">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52"
            >
              {renderLinks()}
              {!user ? (
                <li>
                  <NavLink to="/signin">Login</NavLink>
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
              <Link
                to="/swaps"
                className="btn btn-primary rounded-full px-4 font-semibold shadow-md hover:scale-105 transition-transform duration-200"
              >
                Start Swapping
              </Link>
            </ul>
          </div>
        </div>
        {/* Left: Logo */}
        <div className="navbar-start -ml-4">
          {/* Logo */}
          <MainLogo />
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{renderLinks()}</ul>
        </div>

        {/* Right: Actions */}
        <div className="navbar-end flex items-center gap-3">
          {/* Dark/Light Mode Toggle */}
          <ThemeToggle />

          {/* Auth */}
          {!user ? (
            <Link to="/signin" className="btn btn-ghost hidden lg:flex">
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL || "/default-avatar.png"} alt="User" />
                </div>
              </div>
              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100  rounded-box w-52">
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
          <div className="hidden md:block ">
            <Link
              to="/swaps"
              className="btn btn-primary rounded-full px-4 font-semibold shadow-md hover:scale-105 transition-transform duration-200"
            >
              Start Swapping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
