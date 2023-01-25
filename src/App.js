import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import RootLayout from "./shared/pages/RootLayout";
import UserPlaces from "./places/pages/UserPlaces";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/places/new",
        element: <NewPlace />,
      },
      {
        path: "/:userId/places",
        element: <UserPlaces />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
