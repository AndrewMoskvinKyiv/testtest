import React, {useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import S from "./Services.module.css"
import ST from "./../../styles/title.module.css"
import {FooterBlock} from "../../components/common/Footer/Footer";

export const Services = () => {
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
                 style={{backgroundImage: `url(https://apextest12.b-cdn.net/projects/Oakbrook%20Office/wasPSD.jpg)`}}>
                <div className={S.textTitleContainer}>
                    <h1 className={S.servicesTitle}>services</h1>
                <div className={S.topWrapper_servicesTitle}>
                    <div className={S.topBlockHr}></div>
                    <p className={S.servicesInnerTitle}>Value-added services on every project!</p>
                    <div className={S.topBlockHr}></div>
                </div>
                <p className={S.servicesText}>Whether serving as a General Contractor, Construction Manager or Design-Builder,
                    APEX Construction Group offers full-service construction capabilities through all phases of development,
                    from feasibility to commissioning.

                    Verticle construction projects typically involve structures that house a wide range of functions and
                    facilities. Our innovated approach allows us to provide value-design, value-engineering and lean construction
                    of your building.

                    Our hard-won reputation for successful project completions is a direct outcome of our superior ability
                    to manage the schedule, the scope, the contractors and the total quality of the project.
                </p>
                </div>
            </div>

            <FooterBlock/>
    </div>
   )
}
