import {createBrowserRouter} from "react-router-dom";

import Contacts from "../pages/Contacts";
import React from "react";
import ErrorPage from "../pages/404";
import {Projects} from "../pages/Projects/Projects";
import {Team} from "../pages/Team/Team";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/testtest",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/testtest/contacts",
        element: <Contacts />,
    },
    {
        path: "/testtest/projects",
        element: <Projects />,
    },
    {
        path: "/testtest/team",
        element: <Team />,
    },
    // {
    //     path: "*",
    //     element: <div>404</div>
    // },

]);