import S from './MobileMenu.module.css'
import {Link, NavLink} from "react-router-dom";
import * as React from "react";

export const MobileMenu = () => {
    return (
        <div className={S.mobileMenuContainer}>
            <ul className={S.linksWrapper}>
                <li>
                    <Link className={S.menuLink} to={`/testtest/projects`}>projects</Link>
                </li>
                <li>
                    <Link className={S.menuLink} to={`/testtest/team`}>about</Link>
                </li>
                <li>
                    <Link className={S.menuLink} to={`/testtest/contacts`}>contacts</Link>
                </li>
                <li>
                    <Link className={S.menuLink} to={`/testtest/tasks`}>news+awards</Link>
                </li>

            </ul>
        </div>
    )
}
