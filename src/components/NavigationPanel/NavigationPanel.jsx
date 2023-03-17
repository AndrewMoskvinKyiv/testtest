import * as React from "react";
import {Link} from "react-router-dom";
import S from "./NavigationPanel.module.css"

export default function  NavigationPanel() {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <nav className={S.navContainer}>

            <ul>
                <li>
                    <Link className={S.headerLink} to={`/projects`}>projects</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/team`}>about</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/contacts`}>contacts</Link>
                </li>
                <li>
                    <Link className={S.headerLink} to={`/services`}>services</Link>
                </li>

            </ul>
        </nav>
    )
}
