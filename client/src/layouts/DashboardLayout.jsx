import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaUser,
  FaBook,
  FaHandshake,
  FaBullhorn,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaBriefcase,
  FaUserShield,
  FaUsers,
  FaChartBar,
  FaEnvelope,
  FaPlusCircle,
} from "react-icons/fa";

const DashboardLayout = () => {
  const panels = {
    user: {
      label: "User Panel",
      links: [
        { to: "/dashboard/profile", icon: <FaUser />, text: "My Profile" },
        { to: "/dashboard/swaps", icon: <FaHandshake />, text: "My Swaps" },
        { to: "/dashboard/courses", icon: <FaBook />, text: "My Courses" },
        {
          to: "/dashboard/applications",
          icon: <FaBriefcase />,
          text: "Job Applications",
        },
        {
          to: "/dashboard/announcements",
          icon: <FaBullhorn />,
          text: "Announcements",
        },
      ],
    },
    tutor: {
      label: "Tutor Panel",
      links: [
        {
          to: "/dashboard/tutor-profile",
          icon: <FaChalkboardTeacher />,
          text: "Tutor Profile",
        },
        {
          to: "/dashboard/manage-courses",
          icon: <FaBook />,
          text: "Manage Courses",
        },
        {
          to: "/dashboard/students",
          icon: <FaUsers />,
          text: "Student Progress",
        },
        {
          to: "/dashboard/revenue",
          icon: <FaMoneyBillWave />,
          text: "Revenue",
        },
      ],
    },
    recruiter: {
      label: "Recruiter Panel",
      links: [
        {
          to: "/dashboard/recruiter-dashboard",
          icon: <FaChartBar />,
          text: "Recruiter Dashboard",
        },
        {
          to: "/dashboard/recruiter-profile",
          icon: <FaUserShield />,
          text: "Recruiter Profile",
        },
        {
          to: "/dashboard/manage-jobs",
          icon: <FaBriefcase />,
          text: "Manage Jobs",
        },
        {
          to: "/dashboard/post-job",
          icon: <FaPlusCircle />, 
          text: "Job Post",
        },
        {
          to: "/dashboard/applicants",
          icon: <FaUsers />,
          text: "Applicant Tracking",
        },
        {
          to: "/dashboard/analytics",
          icon: <FaChartBar />,
          text: "Analytics",
        },
        {
          to: "/dashboard/recruiter-messages",
          icon: <FaEnvelope />,
          text: "Messages",
        },
      ],
    },
    admin: {
      label: "Admin Panel",
      links: [
        {
          to: "/dashboard/admin-profile",
          icon: <FaUserShield />,
          text: "Admin Profile",
        },
        {
          to: "/dashboard/manage-users",
          icon: <FaUsers />,
          text: "Manage Users",
        },
        {
          to: "/dashboard/content-moderation",
          icon: <FaEnvelope />,
          text: "Content Moderation",
        },
        {
          to: "/dashboard/system-settings",
          icon: <FaChartBar />,
          text: "System Settings",
        },
        {
          to: "/dashboard/announcements",
          icon: <FaBullhorn />,
          text: "Announcements",
        },
      ],
    },
  };

  // Show all panels at once
  const panelsToShow = Object.keys(panels);

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
            TalentTrade Dashboard
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
          <div className="text-2xl font-extrabold text-primary mb-4">
            TalentTrade
          </div>

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
