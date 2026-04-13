import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homepage/HomePage";
import FriendDetails from "../pages/details/FriendDetails";
import TimeLinePage from "../pages/timeline/TimeLinePage";
import StatsPage from "../pages/Stats/StatsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

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
        path: "/home/:id",
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
    Component: NotFoundPage,
  },
]);

export default router;
