import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound, UserList } from "../pages";
import { ManageProfiles } from "../pages/ManageProfiles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/ManageProfiles",
    element: <ManageProfiles />,
    errorElement: <NotFound />,
  },
]);
