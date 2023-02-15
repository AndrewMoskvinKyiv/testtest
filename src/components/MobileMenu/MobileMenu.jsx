import S from './MobileMenu.module.css'
import {NavLink} from "react-router-dom";
import * as React from "react";

export const MobileMenu = () => {
    return (
        <div className={S.mobileMenuContainer}>
            <ul className={S.linksWrapper}>
                <li>
                    <NavLink className={S.menuLink}
                             to="projects">
                        projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tasks"
                             className={S.menuLink}
                    >
                        about
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tasks">
                        <span className={S.menuLink}>
                contacts
              </span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to="tasks">
                        <span className={S.menuLink}>
               news+awards
              </span>

                    </NavLink>
                </li>

            </ul>
        </div>
    )
}
