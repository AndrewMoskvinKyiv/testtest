import * as React from "react";
import {Link, NavLink, Route} from "react-router-dom";
import S from "./NavigationPanel.module.css"
import {Team} from "../../pages/Team/Team";
import App from "../../App";

export default function  NavigationPanel() {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <nav className={S.navContainer}>

            <ul>
                <li>
                    <Link className={S.headerLink} to={`/testtest/projects`}>projects</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/testtest/team`}>team</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/testtest/contacts`}>contacts</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/testtest/tasks`}>news+awards</Link>
                </li>

            </ul>
        </nav>
    )
}
