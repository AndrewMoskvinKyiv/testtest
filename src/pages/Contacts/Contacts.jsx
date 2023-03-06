import S from "./Contacts.module.css";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import * as React from "react";
import {useState} from "react";
import {FooterBlock} from "../../components/common/Footer/Footer";

export default function Contacts() {
    const [menuView, setMenuView] = useState(false);
    return (
        menuView ?
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <div className={S.topWrapper}
                     style={{backgroundImage: `url(https://apextest12.b-cdn.net/projects/Oakbrook%20Office/wasPSD.jpg)`}}
                ></div>
                <h1 className={S.contactsTitle}>contact</h1>
                <FooterBlock/>
            </div>
    );
}
