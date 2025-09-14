import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaUser,
  FaCreditCard,
  FaHistory,
  FaBullhorn,
  FaUserShield,
  FaUsers,
  FaNewspaper,
  FaHandshake,
  FaGift,
} from "react-icons/fa";
import DomexiosLogo from "../pages/shared/domexisLogo/DomexiosLogo";
import UseUserRole from "../hooks/UseUserRole";

const DashboardLayout = () => {
  const { role, isRoleLoading } = UseUserRole();

  if (isRoleLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const panels = {
    user: {
      label: "User Panel",
      links: [
        {
          to: "/dashboard/profile",
          icon: <FaUser className="inline-block mr-2" />,
          text: "My Profile",
        },
        {
          to: "/dashboard/announcements",
          icon: <FaBullhorn className="inline-block mr-2" />,
          text: "Announcements",
        },
      ],
    },
    member: {
      label: "Member Panel",
      links: [
        {
          to: "/dashboard/profile",
          icon: <FaUser className="inline-block mr-2" />,
          text: "Member Profile",
        },
        {
          to: "/dashboard/make-payment",
          icon: <FaCreditCard className="inline-block mr-2" />,
          text: "Make Payment",
        },
        {
          to: "/dashboard/payment-history",
          icon: <FaHistory className="inline-block mr-2" />,
          text: "Payment History",
        },
        {
          to: "/dashboard/announcements",
          icon: <FaBullhorn className="inline-block mr-2" />,
          text: "Announcements",
        },
      ],
    },
    admin: {
      label: "Admin Panel",
      links: [
        {
          to: "/dashboard/admin-profile",
          icon: <FaUserShield className="inline-block mr-2" />,
          text: "Admin Profile",
        },
        {
          to: "/dashboard/manage-members",
          icon: <FaUsers className="inline-block mr-2" />,
          text: "Manage Members",
        },
        {
          to: "/dashboard/make-announcement",
          icon: <FaNewspaper className="inline-block mr-2" />,
          text: "Make Announcement",
        },
        {
          to: "/dashboard/agreement-requests",
          icon: <FaHandshake className="inline-block mr-2" />,
          text: "Agreement Requests",
        },
        {
          to: "/dashboard/manage-coupons",
          icon: <FaGift className="inline-block mr-2" />,
          text: "Manage Coupons",
        },
      ],
    },
  };

  const panelsToShow =
    role === "admin"
      ? ["user", "member", "admin"]
      : role === "member"
      ? ["member"]
      : role === "user"
      ? ["user"]
      : [];

  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle (for mobile & tablet) */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-bold text-lg">
            Domexios Dashboard
          </div>
        </div>

        {/* Main content area */}
        <div className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 sm:w-80 min-h-full bg-base-200 text-base-content space-y-2">
          <DomexiosLogo />

          {panelsToShow.map((panelKey) => {
            const panel = panels[panelKey];
            return (
              <React.Fragment key={panelKey}>
                <li className="text-gray-500 uppercase text-xs font-bold mt-6">
                  {panel.label}
                </li>
                {panel.links.map(({ to, icon, text }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-md font-medium"
                          : "flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md font-medium"
                      }
                    >
                      {icon}
                      <span>{text}</span>
                    </NavLink>
                  </li>
                ))}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
