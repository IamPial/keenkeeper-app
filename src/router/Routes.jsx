import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homepage/HomePage";
import FriendDetails from "../pages/details/FriendDetails";
import TimeLinePage from "../pages/timeline/TimeLinePage";
import StatsPage from "../pages/stats/StatsPage";
import ErrorPage from "../pages/notFoundPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "details/:id",
        Component: FriendDetails,
      },
      {
        path: "/timeline",
        Component: TimeLinePage,
      },
      {
        path: "/stats",
        Component: StatsPage,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
