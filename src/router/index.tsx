import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound, UserList } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/users",
    element: <UserList />,
    errorElement: <NotFound />,
  },
]);
