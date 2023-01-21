import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Let's start!</h1>,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/places/new",
    element: <NewPlace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
