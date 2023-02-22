import * as React from "react";
import S from "./root.module.css"
import {SimpleSlider} from "./components/slickSlider/SimpleSlider";
import {MobileMenu} from "./components/MobileMenu/MobileMenu";
import {Header} from "./components/common/Header/Header";
import {useState} from "react";

export default function App() {
    const [menuView, setMenuView] = useState(false);


    return (
        <div className={S.root}>
            <Header setMenuView={setMenuView} menuView={menuView}/>
            {menuView ? <MobileMenu/> : <SimpleSlider/> }
        </div>)


}
