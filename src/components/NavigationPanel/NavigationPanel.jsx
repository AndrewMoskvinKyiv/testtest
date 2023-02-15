import * as React from "react";
import {NavLink} from "react-router-dom";
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
                    <NavLink
                        className={S.headerLink}
                        to="projects"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="team"
                        className={S.headerLink}
                        style={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        about
                    </NavLink>
                </li>
                <li>
                    <NavLink to="contacts">
                        {({ isActive }) => (
                            <span
                                className={S.headerLink}
                                style={
                                    isActive ? activeClassName : undefined
                                }
                            >
                contacts
              </span>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tasks">
                        {({ isActive }) => (
                            <span
                                className={S.headerLink}
                                style={
                                    isActive ? activeClassName : undefined
                                }
                            >
               news+awards
              </span>
                        )}
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}
