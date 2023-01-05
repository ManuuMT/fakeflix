import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound, UserList } from "../pages";

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
]);
