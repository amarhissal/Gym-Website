import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Components/Routes/Register";
import Blogs from "./Components/Blogs";
import RootLayout from "./Components/Routes/RootLayout";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import AdminPage from "./Components/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/about", element: <AboutUs></AboutUs> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
