import {createHashRouter} from "react-router-dom";
import Contacts from "../pages/Contacts/Contacts";
import React from "react";
import ErrorPage from "../pages/NotFound/404";
import {Projects} from "../pages/Projects/Projects";
import {Team} from "../pages/Team/Team";
import {ProjectView} from "../pages/ProjectView/ProjectView";
import Home from "../pages/Home/Home";

export const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
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
