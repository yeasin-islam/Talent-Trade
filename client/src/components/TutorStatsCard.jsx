import React from "react";

const TutorStatsCard = ({ title, value }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 mt-2">{value}</p>
    </div>
  );
};

export default TutorStatsCard;
