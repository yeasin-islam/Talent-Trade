// RecruiterProfile.jsx
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function RecruiterProfile() {
  const [formData, setFormData] = useState({
    recruiterName: "",
    phoneNumber: "",
    companyName: "",
    email: "",
    bio: "",
  });

  const [jobs] = useState([
    { title: "Senior Frontend Developer", status: "Active", color: "bg-green-500" },
    { title: "UX/UI Designer", status: "Paused", color: "bg-yellow-500" },
    { title: "Backend Engineer", status: "Closed", color: "bg-red-500" },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto py-10 space-y-8">
      {/* Profile Info */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Profile Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="recruiterName"
              placeholder="e.g. Jane Doe"
              value={formData.recruiterName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="e.g. +1 234 567 890"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <input
            type="text"
            name="companyName"
            placeholder="e.g. Acme Corporation"
            value={formData.companyName}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="recruiter@example.com"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          {/* File Upload */}
          <div className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-gray-500">
            <FaCloudUploadAlt className="text-3xl mb-2" />
            <p>
              <span className="text-primary cursor-pointer">Upload a file</span> or drag and drop
            </p>
            <p className="text-sm">PNG, JPG, GIF up to 10MB</p>
          </div>

          {/* Bio */}
          <textarea
            name="bio"
            placeholder="Tell us about your company..."
            value={formData.bio}
            onChange={handleChange}
            className="textarea textarea-bordered w-full h-28"
          />
        </div>
      </div>

      {/* Linked Job Postings */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Linked Job Postings</h2>
          <div className="space-y-3">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="flex justify-between items-center border rounded-xl p-3 hover:shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${job.color}`} />
                  <span>{job.title}</span>
                </div>
                <button className="btn btn-outline btn-sm flex items-center gap-1">
                  <MdEdit /> View/Edit
                </button>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 pt-2">
              <button className="btn btn-outline btn-sm">{"<"}</button>
              <button className="btn btn-primary btn-sm">1</button>
              <button className="btn btn-outline btn-sm">2</button>
              <button className="btn btn-outline btn-sm">{">"}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body space-y-3">
          <h2 className="card-title">Account Settings</h2>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Change Password</p>
              <p className="text-sm text-gray-500">Last changed 3 months ago</p>
            </div>
            <button className="btn btn-outline btn-sm">Change</button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Notification Preferences</p>
              <p className="text-sm text-gray-500">Receive updates on new candidates</p>
            </div>
            <input type="checkbox" className="toggle toggle-primary" defaultChecked />
          </div>
        </div>
      </div>

      {/* Save Changes */}
      <div className="flex justify-end">
        <button onClick={handleSave} className="btn btn-primary px-6">
          Save Changes
        </button>
      </div>
    </div>
  );
}
