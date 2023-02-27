import S from './MobileMenu.module.css'
import {Link, NavLink} from "react-router-dom";
import * as React from "react";

export const MobileMenu = () => {
    return (
        <div className={S.mobileMenuContainer}>
            <ul className={S.linksWrapper}>
                <li>
                    <Link className={S.menuLink} to={`/projects`}>projects</Link>
                </li>
                <li>
                    <Link className={S.menuLink} to={`/team`}>about</Link>
                </li>
                <li>
                    <Link className={S.menuLink} to={`/contacts`}>contacts</Link>
                </li>
                <li>
                    <Link className={S.menuLink} to={`/tasks`}>news+awards</Link>
                </li>

            </ul>
        </div>
    )
}
