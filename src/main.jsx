import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./screens/Home.jsx";
import Games from "./screens/Games.jsx";
import Tutorials from "./screens/Tutorials.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tutorials",
    element: <Tutorials />,
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "*",
    element: <div className="main center h-screen !font-normal !font-['JosefinSans'] !text-3xl">404 Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
