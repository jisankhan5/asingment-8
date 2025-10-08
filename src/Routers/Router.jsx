import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Error/ErrorPage";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Instal from "../Pages/Instal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader:()=>fetch("/Apps8.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/app",
        Component: Apps,
      },
      {
        path: "/instal",
        Component: Instal,
      },
    ],
  },
]);
