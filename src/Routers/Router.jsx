import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Error/ErrorPage";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Instal from "../Pages/Instal";
import AppDetails from "../Pages/AppDetails";
import ErrorPage2 from "../Error/ErrorPage2";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/Apps8.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/app",
        loader: () => fetch("/Apps8.json"),
        Component: Apps,
      },

      {
        path: "/instal",
        Component: Instal,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/Apps8.json"),
        Component: AppDetails,
        errorElement:<ErrorPage2></ErrorPage2>
      },
    ],
  },
]);
