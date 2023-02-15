import S from "./Header.module.css";
import logo from "../../../assets/logo.webp";
import NavigationPanel from "../../NavigationPanel/NavigationPanel";
import Hamburger from 'hamburger-react'
import React, {useState} from "react";

export const Header = ({setMenuView, menuView}) => {
    const [isOpen, setOpen] = useState(false)

    const onMenuBarsHandler = () => {
        setMenuView(!menuView);
        setOpen(!isOpen);
    }
    return (
        <section className={S.header}>
            <picture>
                <img className={S.headerImg} src={logo} alt='ApexLogo'/>
            </picture>
            <div className={S.menuNav}> <NavigationPanel/></div>
            <div className={S.menuBars}>
                <Hamburger toggled={isOpen} toggle={onMenuBarsHandler} size={40} direction="right" color="#d70329"/>
            </div>
        </section>
    )
}
