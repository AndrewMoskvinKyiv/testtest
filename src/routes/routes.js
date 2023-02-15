import {createBrowserRouter} from "react-router-dom";
import Root from "../root";
import Contacts from "../pages/Contacts";
import React from "react";
import ErrorPage from "../pages/404";
import {Projects} from "../pages/Projects/Projects";
import {Team} from "../pages/Team/Team";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/team",
        element: <Team />,
    },
    // {
    //     path: "*",
    //     element: <div>404</div>
    // },

]);
