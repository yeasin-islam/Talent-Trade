import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    category: "",
    type: "Full-time",
    location: "",
    salaryMin: "",
    salaryMax: "",
    skills: "",
    description: "",
    deadline: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.company) {
      toast.error("Job Title and Company Name are required!");
      return;
    }
    toast.success("Job posted successfully!");
    setShowModal(true); // show modal on success
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen py-10">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Job Title */}
          <div>
            <label className="label font-semibold">Job Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Software Engineer"
              className="input input-bordered w-full"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="label font-semibold">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Stitch Design"
              className="input input-bordered w-full"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Job Category */}
          <div>
            <label className="label font-semibold">Job Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>Product</option>
            </select>
          </div>

          {/* Job Type */}
          <div>
            <label className="label font-semibold">Job Type</label>
            <div className="flex gap-6">
              {["Full-time", "Part-time", "Internship", "Remote"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={formData.type === type}
                    onChange={handleChange}
                    className="radio radio-primary"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. San Francisco, CA"
              className="input input-bordered w-full"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* Salary Range */}
          <div>
            <label className="label font-semibold">Salary Range</label>
            <div className="flex gap-3">
              <input
                type="number"
                name="salaryMin"
                placeholder="Min"
                className="input input-bordered w-full"
                value={formData.salaryMin}
                onChange={handleChange}
              />
              <input
                type="number"
                name="salaryMax"
                placeholder="Max"
                className="input input-bordered w-full"
                value={formData.salaryMax}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Required Skills */}
          <div>
            <label className="label font-semibold">Required Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="e.g. Java, Python, SQL (comma-separated)"
              className="input input-bordered w-full"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="label font-semibold">Job Description</label>
            <textarea
              name="description"
              placeholder="Describe the job responsibilities and requirements"
              className="textarea textarea-bordered w-full h-32"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Application Deadline */}
          <div>
            <label className="label font-semibold">Application Deadline</label>
            <div className="flex items-center gap-3">
              <input
                type="date"
                name="deadline"
                className="input input-bordered w-full"
                value={formData.deadline}
                onChange={handleChange}
              />
              <FaCalendarAlt className="text-gray-500 text-xl" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" className="btn btn-outline">
              Save as Draft
            </button>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="btn btn-secondary"
            >
              Preview Job Post
            </button>
            <button type="submit" className="btn btn-primary">
              Post Job
            </button>
          </div>
        </form>
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-right" />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8 relative">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <div className="text-center">
              <div className="text-green-500 text-4xl mb-3">✔</div>
              <h2 className="text-2xl font-bold mb-2">
                Job Posted Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                Your job posting is now live. Here is a summary of the details.
              </p>
            </div>

            {/* Job Summary */}
            <div className="border rounded-xl p-6 space-y-3 mb-6">
              <h3 className="text-lg font-semibold text-blue-600">
                {formData.title || "Job Title"}
              </h3>
              <p className="text-gray-700">{formData.company || "Company"}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                <span>📂 {formData.category || "Category"}</span>
                <span>⏰ {formData.type}</span>
                <span>📍 {formData.location || "Location"}</span>
                <span>
                  💰 ${formData.salaryMin || "Min"} - $
                  {formData.salaryMax || "Max"}
                </span>
                <span>🛠 {formData.skills || "Skills"}</span>
                <span>
                  📅 Deadline: {formData.deadline || "Not set"}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary">View Job</button>
              <button className="btn btn-outline">Post Another Job</button>
              <button className="btn btn-secondary">Go to Dashboard</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
