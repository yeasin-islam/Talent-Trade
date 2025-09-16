import React from "react";
import { NavLink } from "react-router";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import MainLogo from "../shared/MainLogo";
// import logo from "../../../assets/fixmate1.png";

const Footer = () => {

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label:  "Services" },
    { to: "/how-it-works", label:  "How It Works" },
    { to: "/pricing", label:  "Pricing" },
    { to: "/about", label:  "About Us" },
    { to: "/contact", label:  "Contact" },
  ];

  const policyLinks = [
    { to: "/order-procedure", label: "Order Procedure" },
    { to: "/return-refund", label: "Return, Refund & Cancelation" },
    { to: "/payment-method", label: "Payment Method" },
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/cookie", label: "Cookie Policy" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 font-poppins mt-12">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Social */}
        <div>
          <div className="flex items-center gap-2 mb-4 -ml-2">
            <MainLogo />
          </div>
          <p className="mb-4 text-gray-400">TalentTrade unifies learning, career growth, and networking into one ecosystem, solving the inefficiency of using separate platforms.</p>
          <div className="flex gap-3 text-lg mb-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition-colors">
            Complaint Box
          </button>
        </div>

        {/* Column 2: Main Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : "hover:text-green-500"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Policies & Orders */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies & Orders</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            {policyLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "text-green-500 font-semibold" : "hover:text-green-500"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="hover:text-green-500">ডিজিটাল কর্মস নির্দেশিকা ২০২১</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Head Office</p>
          <p>FixMate Limited</p>
          <p>Kusholi Bhaban, 4th Floor, 238/1 Begum Rokeya Sharani, Dhaka-1207</p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhoneAlt /> 16 810, 09609016810
          </p>
          <p className="flex items-center gap-2">
            <FaWhatsapp /> +8801755513900 (Message only)
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt />{" "}
            <a
              href="https://tinyurl.com/ryans-head-office"
              target="_blank"
              className="hover:text-green-500"
            >
              Map Link
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-700">
        Prices are subject to change without any prior notice. Product data is based solely on manufacturer information. © {new Date().getFullYear()} FixMate. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
