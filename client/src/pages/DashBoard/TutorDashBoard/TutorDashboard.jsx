import React, { useEffect, useRef} from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react"
import Animation from '../../../../public/animations/animation.json'
import CountUp from "react-countup";
import { Users, DollarSign, BookOpen, Star } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const TutorProfile = ({ statsData = [], profileData = {} }) => {
  const cardsRef = useRef([]);
  

  // GSAP ScrollTrigger for cards
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
        { title: "Total Students", value: 1200, bg: "bg-blue-100 text-blue-900", icon: <Users className="w-8 h-8 text-blue-600" /> },
        { title: "Total Revenue", value: 35000, bg: "bg-green-100 text-green-900", icon: <DollarSign className="w-8 h-8 text-green-600" /> },
        { title: "Active Courses", value: 12, bg: "bg-yellow-100 text-yellow-900", icon: <BookOpen className="w-8 h-8 text-yellow-600" /> },
      ];


  return (
   <div className="relative p-6 bg-gray-50 min-h-screen overflow-hidden space-y-8">
  {/* Lottie Background */}
  <div className="absolute inset-0 z-50 opacity-30 pointer-events-none">
    <Lottie
      animationData={Animation}
      loop={true}
      style={{ width: "100%", height: "100%" }}
    />
  </div>

  <h2 className="text-3xl font-bold z-10 relative text-purple-900">Tutor Dashboard</h2>

  {/* Stats Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        ref={(el) => (cardsRef.current[index] = el)}
        className={`shadow-xl rounded-2xl p-8 text-center ${stat.bg} cursor-pointer`}
        whileHover={{ scale: 1.20 , rotate: 2 }}
        transition={{ type: "smooth", stiffness: 300 }}
      >
        <div className="flex justify-center items-center mb-4">
              {stat.icon}
            </div>
        <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
        <p className="text-2xl font-bold">
          {typeof stat.value === "number" ? (
            <CountUp end={stat.value} duration={1.5} separator="," />
          ) : (
            stat.value
          )}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Profile Insights */}
  {/* <motion.div
    className="bg-white shadow rounded-lg p-6 z-10 relative"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-xl font-semibold mb-4">Profile Insights</h3>
    <p className="mb-2">Ratings: {profileData.rating || "★★★★☆"}</p>
    <p className="mb-2">Student Reviews: {profileData.reviews || 0}</p>
    <p>Course Analytics: Coming soon</p>
  </motion.div> */}
</div>

  );
};

export default TutorProfile;
