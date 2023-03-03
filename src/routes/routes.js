import {createBrowserRouter, createHashRouter} from "react-router-dom";

import Contacts from "../pages/Contacts";
import React from "react";
import ErrorPage from "../pages/404";
import {Projects} from "../pages/Projects/Projects";
import {Team} from "../pages/Team/Team";
import App from "../App";
import {ProjectView} from "../pages/ProjectView/ProjectView";

export const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    },
    {
        path: "/projects/project_view/:id",
        element: <ProjectView/>,
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
