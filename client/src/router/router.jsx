import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
//   {
//     path: "/",
//     Component: AuthLayout,
//     children: [
//       {
//         path: "login",
//         Component: Login,
//       },
//       {
//         path: "register",
//         Component: Register,
//       },
//     ],
//   },
//   {
//     path: "dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout></DashboardLayout>
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: "profile",
//         Component: MyProfile,
//       },
//       {
//         path: "make-payment",
//         Component: MakePayment,
//       },
//       {
//         path: "payment-history",
//         Component: PaymentHistory,
//       },
//       {
//         path: "admin-profile",
//         // Component: AdminProfile,
//         element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
//       },
//       {
//         path: "manage-members",
//         // Component: ManageMembers,
//         element:<AdminRoute><ManageMembers></ManageMembers></AdminRoute>
//       },
//       {
//         path: "make-announcement",
//         // Component: MakeAnnouncement,
//         element:<AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>
//       },
//       {
//         path: "agreement-requests",
//         // Component: AgreementRequests,
//         element:<AdminRoute><AgreementRequests></AgreementRequests></AdminRoute>
//       },
//       {
//         path: "manage-coupons",
//         // Component: ManageCoupons,
//         element:<AdminRoute><ManageCoupons></ManageCoupons></AdminRoute>
//       },
//       {
//         path: "announcements",
//         Component: Announcements,
//       },
//     ],
//   },
]);
