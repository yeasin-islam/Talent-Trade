const TutorRoute = ({ children }) => {
  // 🔴 TEMPORARY bypass (for UI testing only)
  return children;
};

export default TutorRoute;


// import React from "react";
// import { Navigate, useLocation } from "react-router";
// import useAuth from "../hooks/UseAuth";
// import useUserRole from "../hooks/UseUserRole";

// const TutorRoute = ({ children }) => {
//   const { user, loading } = useAuth();
//   const { role, isRoleLoading } = useUserRole();
//   const location = useLocation();

//   if (loading || isRoleLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (!user || role !== "tutor") {
//     return <Navigate to="/forbidden" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default TutorRoute;
