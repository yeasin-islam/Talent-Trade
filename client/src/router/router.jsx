import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

import Feed from "../pages/Feed/Feed";
import Swaps from "../pages/Swaps/Swaps";
import Courses from "../pages/Courses/Courses";
import Jobs from "../pages/Jobs/Jobs";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import AuthLayout from "../layouts/AuthLayout";
import Forbidden from "../pages/Forbidden/Forbidden";
import PrivateRoute from "../routes/PrivateRoute";
import UserProfile from "../pages/DashBoard/UserProfile/UserProfile";
import UserApplications from "../pages/DashBoard/UserApplications/UserApplications";
import Announcements from "../pages/DashBoard/Announcements/Announcements";
import AdminRoute from "../routes/AdminRoute";
import AdminProfile from "../pages/DashBoard/AdminProfile/AdminProfile";
import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUsers";
import ContentModeration from "../pages/DashBoard/ContentModeration/ContentModeration";
import SystemSettings from "../pages/DashBoard/SystemSettings/SystemSettings";
import DashboardLayout from "../layouts/DashboardLayout";
import RecruiterRoute from "../routes/RecruiterRoute";
import RecruiterProfile from "../pages/DashBoard/RecruiterProfile/RecruiterProfile";
import ManageJobs from "../pages/DashBoard/ManageJobs/ManageJobs";
import Applications from "../pages/DashBoard/Applicants/Applications";
import Analytics from "../pages/DashBoard/Analytics/Analytics";
import TutorRoute from "../routes/TutorRoute";
import TutorProfile from "../pages/DashBoard/TutorProfile/TutorProfile";
import ManageCourses from "../pages/DashBoard/ManageCourses/ManageCourses";
import Students from "../pages/DashBoard/Students/Students";
import Revenue from "../pages/DashBoard/Revenue/Revenue";
import Signin from "../pages/auth/SignIn/SignIn";
import SignUp from "../pages/auth/Singup/Signup";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "feed",
        Component: Feed,
      },
      {
        path: "swaps",
        Component: Swaps,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "jobs",
        Component: Jobs,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
    errorElement: Forbidden,
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
    errorElement: Forbidden,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        Component: UserProfile,
      },
      {
        path: "swaps",
        Component: Swaps,
      },
      {
        path: "courses",
        Component: Courses,
      },
      {
        path: "applications",
        Component: UserApplications,
      },
      {
        path: "announcements",
        Component: Announcements,
      },
      {
        path: "admin-profile",
        // Component: AdminProfile,
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        // Component: ManageMembers,
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "content-moderation",
        // Component: MakeAnnouncement,
        element: (
          <AdminRoute>
            <ContentModeration />
          </AdminRoute>
        ),
      },
      {
        path: "system-settings",
        // Component: AgreementRequests,
        element: (
          <AdminRoute>
            <SystemSettings />
          </AdminRoute>
        ),
      },
      // {
      //   path: "manage-coupons",
      //   // Component: ManageCoupons,
      //   element:<AdminRoute><ManageCoupons></ManageCoupons></AdminRoute>
      // },
      {
        path: "recruiter-profile",
        element: (
          <RecruiterRoute>
            <RecruiterProfile />
          </RecruiterRoute>
        ),
      },
      {
        path: "manage-jobs",
        element: (
          <RecruiterRoute>
            <ManageJobs />
          </RecruiterRoute>
        ),
      },
      {
        path: "applicants",
        element: (
          <RecruiterRoute>
            <Applications />
          </RecruiterRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <RecruiterRoute>
            <Analytics />
          </RecruiterRoute>
        ),
      },
      {
        path: "tutor-profile",
        element: (
          <TutorRoute>
            <TutorProfile />
          </TutorRoute>
        ),
      },
      {
        path: "manage-courses",
        element: (
          <TutorRoute>
            <ManageCourses />
          </TutorRoute>
        ),
      },
      {
        path: "students",
        element: (
          <TutorRoute>
            <Students />
          </TutorRoute>
        ),
      },
      {
        path: "revenue",
        element: (
          <TutorRoute>
            <Revenue />
          </TutorRoute>
        ),
      },
      {
        path: "announcements",
        Component: Announcements,
      },
    ],
  },
]);
