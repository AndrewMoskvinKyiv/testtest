import S from './MobileMenu.module.css'
import {Link} from "react-router-dom";
import * as React from "react";

export const MobileMenu = ({setMenuView}) => {
    const onClickHandler = () => {
        setMenuView(false);
    }
    return (
        <div className={S.mobileMenuContainer}>
            <ul className={S.linksWrapper}>
                <li>
                    <Link className={S.menuLink} onClick={onClickHandler} to={`/`}>home</Link>
                </li>
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
                    <Link className={S.menuLink} to={`/services`}>services</Link>
                </li>

            </ul>
        </div>
    )
}
