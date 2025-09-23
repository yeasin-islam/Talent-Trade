import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import Animation from "../../../../public/animations/animation.json";
import CountUp from "react-countup";
import { Users, DollarSign, BookOpen, Bell } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

gsap.registerPlugin(ScrollTrigger);

const TutorDashboard = ({ statsData = [], tutor = {} }) => {
  const cardsRef = useRef([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    "New student registered",
    "Course approved",
    "Payment received",
  ];

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const stats = statsData.length
    ? statsData
    : [
        {
          title: "Total Students",
          value: 1200,
          free: 800,
          paid: 400,
          bg: "bg-blue-100 text-blue-900",
          icon: <Users className="w-8 h-8 text-blue-600" />,
        },
        {
          title: "Total Revenue",
          value: 35000,
          bg: "bg-green-100 text-green-900",
          icon: <DollarSign className="w-8 h-8 text-green-600" />,
        },
        {
          title: "Active Courses",
          value: 12,
          free: 7,
          paid: 5,
          bg: "bg-yellow-100 text-yellow-900",
          icon: <BookOpen className="w-8 h-8 text-yellow-600" />,
        },
      ];

  const revenueData = [
    { month: "Jan", earned: 500 },
    { month: "Feb", earned: 700 },
    { month: "Mar", earned: 600 },
    { month: "Apr", earned: 800 },
    { month: "May", earned: 1000 },
    { month: "Jun", earned: 1000 },
  ];

  return (
    <div className="relative p-6 bg-gray-50 min-h-screen overflow-hidden space-y-12">
      {/* Top Right Panel */}
      <div className="absolute top-4 right-4 flex items-center gap-4 z-50">
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
              className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4"
            >
              <h4 className="font-semibold mb-2">Notifications</h4>
              <ul className="text-sm text-gray-700">
                {notifications.map((note, idx) => (
                  <li
                    key={idx}
                    className="py-1 border-b last:border-b-0"
                  >
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
            src={tutor.photo || "/default-avatar.png"}
            alt="Tutor"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          {showProfile && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4"
            >
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={tutor.photo || "/default-avatar.png"}
                  alt="Tutor"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{tutor.name || "Tutor Name"}</p>
                  <p className="text-sm text-gray-600">
                    {tutor.email || "tutor@example.com"}
                  </p>
                </div>
              </div>
              <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                View Profile
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lottie Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Lottie
          animationData={Animation}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <h2 className="text-3xl font-bold z-10 relative text-purple-900">
        Tutor Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`shadow-xl rounded-2xl p-8 text-center ${stat.bg} cursor-pointer`}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "smooth", stiffness: 300 }}
          >
            <div className="flex justify-center items-center mb-4">{stat.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
            <p className="text-2xl font-bold">
              {typeof stat.value === "number" ? (
                <CountUp end={stat.value} duration={1.5} separator="," />
              ) : (
                stat.value
              )}
            </p>

            {/* Sub-details for students/courses */}
            {stat.free !== undefined && stat.paid !== undefined && (
              <div className="mt-4 text-md">
                {stat.title.includes("Student") && (
                  <>
                    <p className="text-black font-semibold">Free Students: {stat.free}</p>
                    <p className="text-black font-semibold">Paid Students: {stat.paid}</p>
                  </>
                )}
                {stat.title.includes("Courses") && (
                  <>
                    <p className="text-black font-semibold">Free Courses: {stat.free}</p>
                    <p className="text-black font-semibold">Paid Courses: {stat.paid}</p>
                  </>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Revenue Bar Chart */}
      <div className="mt-12 z-10 relative">
        <h3 className="text-xl font-semibold mb-4 text-green-800">Monthly Revenue</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={revenueData}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="earned" fill="#16a34a">
              <LabelList
                dataKey="earned"
                position="top"
                formatter={(val) => `$${val}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TutorDashboard;
