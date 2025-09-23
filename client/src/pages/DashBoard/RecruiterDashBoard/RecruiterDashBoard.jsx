import React, { useEffect } from "react";
import {
  FaPlus,
  FaTasks,
  FaPaperPlane,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

// Recharts imports
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Demo chart data
const applicantData = [
  { month: "Jan", applicants: 40, hires: 10 },
  { month: "Feb", applicants: 30, hires: 15 },
  { month: "Mar", applicants: 60, hires: 25 },
  { month: "Apr", applicants: 50, hires: 20 },
  { month: "May", applicants: 70, hires: 30 },
  { month: "Jun", applicants: 90, hires: 35 },
];

const jobData = [
  { job: "Frontend Dev", applicants: 35 },
  { job: "Backend Dev", applicants: 50 },
  { job: "UI/UX Designer", applicants: 20 },
  { job: "Project Manager", applicants: 15 },
];

const RecruiterDashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleAction = (msg) => {
    toast.success(msg);
  };

  return (
    <div className="min-h-screen bg-base-100 p-6 lg:p-10 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Overview</h1>
        <button className="btn btn-primary">Customize</button>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        data-aos="fade-up"
      >
        <div className="card bg-base-200 shadow p-4">
          <h3 className="text-gray-500">Active Jobs</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="card bg-base-200 shadow p-4">
          <h3 className="text-gray-500">Total Applicants</h3>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="card bg-base-200 shadow p-4">
          <h3 className="text-gray-500">Messages</h3>
          <p className="text-2xl font-bold">32</p>
        </div>
        <div className="card bg-base-200 shadow p-4">
          <h3 className="text-gray-500">Recent Activity</h3>
          <p className="text-2xl font-bold">15</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        data-aos="fade-up"
      >
        <button
          onClick={() => handleAction("New Job Posted!")}
          className="btn btn-outline flex items-center gap-2"
        >
          <FaPlus /> Post New Job
        </button>
        <button
          onClick={() => handleAction("Reviewing Pending Applications")}
          className="btn btn-outline flex items-center gap-2"
        >
          <FaTasks /> Review Applications
        </button>
        <button
          onClick={() => handleAction("Message Sent to All Applicants")}
          className="btn btn-outline flex items-center gap-2"
        >
          <FaPaperPlane /> Send Message
        </button>
      </div>

      {/* Applicant Trends (Line Chart) */}
      <div
        className="card bg-base-200 shadow p-6"
        data-aos="fade-up"
      >
        <h3 className="font-bold mb-4">Applicant Trends</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={applicantData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="applicants"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="hires"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Applicants per Job (Bar Chart) */}
      <div
        className="card bg-base-200 shadow p-6"
        data-aos="fade-up"
      >
        <h3 className="font-bold mb-4">Applicants per Job</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={jobData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="job" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applicants" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div
        className="card bg-base-200 shadow p-6"
        data-aos="fade-up"
      >
        <h3 className="font-bold mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-sm">
          <li>✅ Candidate Application Received</li>
          <li>📅 Interview Scheduled</li>
          <li>✔ Candidate Screening Completed</li>
          <li>📌 Job Posting Updated</li>
          <li>🆕 New Job Opening Created</li>
        </ul>
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default RecruiterDashboard;
