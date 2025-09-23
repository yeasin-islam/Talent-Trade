import React, { useState } from "react";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";

const TopRightPanel = ({ tutor = {} }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    "New student registered",
    "Course approved",
    "Payment received",
  ];

  const defaultPhoto = "/default-avatar.png";

  return (
    <div className="flex justify-end items-center gap-6 p-4">
      {/* Bell Icon */}
      <div
        className="relative"
        onMouseEnter={() => setShowNotifications(true)}
        onMouseLeave={() => setShowNotifications(false)}
      >
        <Bell className="w-6 h-6 text-gray-700 cursor-pointer" />
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
          >
            <h4 className="font-semibold mb-2">Notifications</h4>
            <ul className="text-sm text-gray-700">
              {notifications.map((note, idx) => (
                <li key={idx} className="py-1 border-b last:border-b-0">
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      {/* Profile Avatar */}
      <div
        className="relative"
        onMouseEnter={() => setShowProfile(true)}
        onMouseLeave={() => setShowProfile(false)}
      >
        <img
          src={tutor.photo || defaultPhoto}
          alt={tutor.name || "Tutor"}
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        {showProfile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={tutor.photo || defaultPhoto}
                alt={tutor.name || "Tutor"}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{tutor.name || "Tutor Name"}</p>
                <p className="text-sm text-gray-600">{tutor.email || "tutor@example.com"}</p>
              </div>
            </div>
            <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              View Profile
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TopRightPanel;
