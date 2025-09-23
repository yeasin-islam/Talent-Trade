import React, { useState } from "react";
import {
  User,
  Settings,
  MessageCircle,
  Activity,
  BookOpen,
  Bell,
} from "lucide-react";
import TopRightPanel from "../TopRightPanel/TopRightPanel";

const TutorProfile = ({ tutor }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [t, setT] = useState(
    tutor || {
      photo: "/defaultDP.jpg",
      name: "John Doe",
      role: "UI Designer",
      email: "john.doe@example.com",
      tutorId: "T12345",
      username: "johndoe",
      address: "123 Main St",
      postCode: "10001",
      city: "New York",
      country: "USA",
      joined: "Jan 15, 2022",
      website: "https://johndoe.com",
      courses: 4,
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setT((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setT((prev) => ({ ...prev, photo: imageUrl }));
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // 🔗 Later: send updated `t` (including photo) to backend
    console.log("Updated tutor profile:", t);
  };

  return (
    <div className="relative p-6 min-h-screen overflow-hidden space-y-12">
      <h2 className="text-3xl font-bold z-10 relative text-blue-600">Tutor Profile</h2>
      {/* Top Right Panel */}
      <div className="absolute top-0 right-0 z-40">
        <TopRightPanel tutor={t} />
      </div>

      {/* Basic Info */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-xl p-6 mt-10">
        <div className="flex flex-col items-center">
          <img
            src={t.photo}
            alt={t.name}
            className="w-32 h-32 rounded-full object-cover border-2"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-3 text-sm  p-2 bg-gray-300"
            />
          )}
        </div>

        <div className="flex-1">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={t.name}
                onChange={handleChange}
                className="border p-1 rounded w-full mb-2"
              />
              <input
                type="text"
                name="role"
                value={t.role}
                onChange={handleChange}
                className="border p-1 rounded w-full mb-2"
              />
              <input
                type="email"
                name="email"
                value={t.email}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold">{t.name}</h2>
              <p className="text-gray-600">{t.role}</p>
              <p className="text-gray-700 mt-1">{t.email}</p>
            </>
          )}
        </div>
      </div>

      {/* Detailed Information */}
      <div className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          ["tutorId", "Tutor ID"],
          ["username", "Username"],
          ["email", "Email"],
          ["address", "Address"],
          ["postCode", "Post Code"],
          ["city", "City"],
          ["country", "Country of Residence"],
          ["joined", "Joined Since"],
          ["website", "Website"],
        ].map(([key, label]) => (
          <div key={key} className="md:col-span-1">
            <p className="font-semibold">{label}:</p>
            {isEditing ? (
              <input
                type="text"
                name={key}
                value={t[key]}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            ) : (
              <p className="text-gray-700">
                {key === "website" ? (
                  <a
                    href={t.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {t.website}
                  </a>
                ) : (
                  t[key]
                )}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <div className="flex gap-4 justify-end">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Functional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => setIsEditing(true)}
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 cursor-pointer hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold">My Profile</h3>
          </div>
          <p className="text-gray-600 text-sm">
            View and edit your profile information
          </p>
        </div>

        {/* <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 cursor-pointer hover:shadow-xl transition">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold">Account Settings</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Manage account, security, and preferences
          </p>
        </div> */}

        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 cursor-pointer hover:shadow-xl transition">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold">My Messages</h3>
          </div>
          <p className="text-gray-600 text-sm">Inbox & Drafts</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 cursor-pointer hover:shadow-xl transition">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-red-600" />
            <h3 className="font-semibold">My Activity</h3>
          </div>
          <p className="text-gray-600 text-sm">Logs & Notifications</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 cursor-pointer hover:shadow-xl transition">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-yellow-600" />
            <h3 className="font-semibold">My Courses</h3>
          </div>
          <p className="text-gray-600 text-sm">{t.courses} Courses</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 cursor-pointer hover:shadow-xl transition">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-pink-600" />
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <p className="text-gray-600 text-sm">View all your notifications</p>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
