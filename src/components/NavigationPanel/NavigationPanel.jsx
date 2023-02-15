import * as React from "react";
import {NavLink, Route} from "react-router-dom";
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
              {/*  <li>   <Route path={'/'} render={()=><App/>}/></li>*/}
              {/*<li>  <Route exact path={'/team'} render={() => <Team />}/></li>*/}
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
