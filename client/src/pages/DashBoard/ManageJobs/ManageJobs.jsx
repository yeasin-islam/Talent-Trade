import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function ManageJobs() {
  const [jobs] = useState([
    {
      title: "Senior Software Engineer",
      status: "Active",
      applicants: 25,
      date: "2023-08-15",
    },
    {
      title: "Product Manager",
      status: "Active",
      applicants: 18,
      date: "2023-08-10",
    },
    {
      title: "UX/UI Designer",
      status: "Draft",
      applicants: 0,
      date: "2023-08-05",
    },
    {
      title: "Data Analyst",
      status: "Closed",
      applicants: 32,
      date: "2023-07-20",
    },
    {
      title: "Marketing Specialist",
      status: "Active",
      applicants: 12,
      date: "2023-07-15",
    },
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return (
          <span className="badge badge-success badge-outline">{status}</span>
        );
      case "Draft":
        return (
          <span className="badge badge-warning badge-outline">{status}</span>
        );
      case "Closed":
        return (
          <span className="badge badge-error badge-outline">{status}</span>
        );
      default:
        return <span className="badge">{status}</span>;
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Manage Job Listings</h1>
        <p className="text-gray-500">
          View, edit, and manage all your job listings.
        </p>
      </div>

      {/* Search + Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by job title or status"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-outline">Filter</button>
          <button className="btn btn-outline">Sort</button>
          <button className="btn btn-primary">+ Create New Job</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs border-b">
        <a className="tab tab-bordered tab-active">All (342)</a>
        <a className="tab tab-bordered">Active (210)</a>
        <a className="tab tab-bordered">Draft (32)</a>
        <a className="tab tab-bordered">Closed (100)</a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow-sm">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Status</th>
              <th>Applicants</th>
              <th>Posted Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, i) => (
              <tr key={i}>
                <td>{job.title}</td>
                <td>{getStatusBadge(job.status)}</td>
                <td>{job.applicants}</td>
                <td>{job.date}</td>
                <td>
                  <div className="flex justify-center gap-3 text-lg">
                    <FaEye className="cursor-pointer text-gray-600 hover:text-primary" />
                    <FaEdit className="cursor-pointer text-gray-600 hover:text-primary" />
                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <p>Showing 1 to 5 of 342 results</p>
        <div className="join">
          <button className="join-item btn btn-sm">Previous</button>
          <button className="join-item btn btn-sm btn-active">1</button>
          <button className="join-item btn btn-sm">2</button>
          <button className="join-item btn btn-sm">3</button>
          <button className="join-item btn btn-sm">Next</button>
        </div>
      </div>
    </div>
  );
}
