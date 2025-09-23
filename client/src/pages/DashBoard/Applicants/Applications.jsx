// Applicants.jsx
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";

export default function Applications() {
  const [tab, setTab] = useState("Pending");

  const applicants = [
    {
      name: "Sophia Clark",
      applied: "2 days ago",
      experience: "5+ years experience",
      role: "Product Management",
      skills: ["Product Strategy", "Market Analysis", "Agile Methodologies", "User Research", "Roadmapping"],
      bio: "Sophia is a seasoned product manager with a proven track record of successfully launching and scaling digital products. She excels at translating market needs into innovative solutions and driving cross-functional teams to achieve business objectives.",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "Ethan Bennett",
      applied: "3 days ago",
      experience: "4+ years experience",
      role: "Product Management",
      skills: ["Product Strategy", "Market Analysis", "Agile Methodologies", "User Research", "Roadmapping"],
      bio: "Ethan is a results-oriented product manager with a strong analytical background and a passion for creating user-centric products. He has a knack for identifying opportunities, defining product vision, and leading teams to deliver impactful solutions.",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Senior Product Manager</h1>
        <p className="text-gray-500">Applicants</p>
      </div>

      {/* Tabs */}
      <div className="tabs border-b">
        {["Pending", "Shortlisted", "Interviewed", "Rejected"].map((t) => (
          <a
            key={t}
            onClick={() => setTab(t)}
            className={`tab tab-bordered ${tab === t ? "tab-active" : ""}`}
          >
            {t} {t === "Pending" ? <span className="ml-1 text-blue-600 font-medium">2</span> : ""}
          </a>
        ))}
      </div>

      {/* Applicants List */}
      <div className="space-y-4">
        {applicants.map((applicant, i) => (
          <div key={i} className="card bg-base-100 shadow-sm border">
            <div className="card-body">
              <div className="flex justify-between items-start">
                {/* Left: Avatar + Info */}
                <div className="flex gap-4">
                  <img
                    src={applicant.avatar}
                    alt={applicant.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-400">Applied {applicant.applied}</p>
                    <h2 className="font-semibold">{applicant.name}</h2>
                    <p className="text-gray-500">
                      {applicant.role} · {applicant.experience}
                    </p>
                  </div>
                </div>
                {/* Resume link */}
                <a href="#" className="text-blue-600 flex items-center gap-1 text-sm">
                  <FaFileDownload /> View Resume
                </a>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {applicant.skills.map((skill, idx) => (
                  <span key={idx} className="badge badge-outline">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="mt-3 text-gray-600 text-sm">{applicant.bio}</p>

              {/* Actions */}
              <div className="mt-4 flex gap-3">
                <button className="btn btn-primary btn-sm">Shortlist</button>
                <button className="btn btn-outline btn-sm">Reject</button>
                <button className="btn btn-outline btn-sm">Message</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
