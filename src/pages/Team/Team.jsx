import * as React from "react";
import {Header} from "../../components/common/Header/Header";
import S from "./Team.module.css"
import {PersonalCard} from "../../components/PersonalCard/PersonalCard";
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {useState} from "react";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {teamArr} from "../../data/teamMembers";

import {
    PopUpTitleWithSlowUnderline
} from "../../components/common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";


export const Team = () => {
    const [menuView, setMenuView] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [showedBio, setShowedBio] = useState({});
    const [personTitle, setPersonTitle] = useState('')

    const onMouseOver = (person) => {
        setPersonTitle(person);
    };

    return (
        menuView ?
            <div className={S.teamContainer}>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :

            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <section className={S.teamTop}>
                    <div className={S.teamTopOverlay}>
                        <div className={S.shadowBar}></div>
                        <h1 className={S.teamTitle}>The Apex team</h1>
                        <p className={S.teamTitleBottom}>
                            Every APEX project starts with a team of experienced, determined professionals.
                            These individuals are eager to develop their skills and collaborate to create
                            seamless building projects for our clients.
                        </p>
                    </div>
                </section>
                <section className={S.teamPhotos}>
                    <div className={S.joelFinder}
                         onMouseOver={()=>onMouseOver("Joel")}
                         onMouseLeave={()=>onMouseOver("")}
                    >
                        <div className={S.personTitleContainer} style={{opacity: personTitle === 'Joel' && "90%" }}>
                            <div className={S.personTitle}>Joel Spalding</div>
                            <div className={S.personPosition}>President</div>
                        </div>
                    </div>
                    <div className={S.lauraFinder}
                         onMouseOver={()=>onMouseOver("Laura")}
                         onMouseLeave={()=>onMouseOver("")}
                    >
                        <div className={S.personTitleContainer} style={{opacity: personTitle === 'Laura' && "90%" }}>
                            <div className={S.personTitle}>Laura Koronaci</div>
                            <div className={S.personPosition}>Contract Manager</div>
                        </div>
                    </div>
                    <div className={S.paolaFinder}
                         onMouseOver={()=>onMouseOver("Paula")}
                         onMouseLeave={()=>onMouseOver("")}
                    >
                        <div className={S.personTitleContainer} style={{opacity: personTitle === 'Paula' && "90%" }}>
                            <div className={S.personTitle}>Paola Placko</div>
                            <div className={S.personPosition}>Lead Estimator / Architectural Designer</div>
                        </div>
                    </div>
                    <div className={S.valentinoFinder}
                         onMouseOver={()=>onMouseOver("Valentino")}
                         onMouseLeave={()=>onMouseOver("")}
                    >
                        <div className={S.personTitleContainer} style={{opacity: personTitle === 'Valentino' && "90%" }}>
                            <div className={S.personTitle}>Valentino Caushi</div>
                            <div className={S.personPosition}>CEO</div>
                        </div>
                    </div>


                    <picture>
                        <img className={S.generalPhoto}
                             src={"https://apextest12.b-cdn.net/generalPhotosApex/groupPhotoS.jpg"}
                             alt={'generalPhoto'}/>
                    </picture>
                    <div className={S.joinTeamWrapper}>
                            <span className={S.joinTeamBtn}>Join Our Team</span>
                    </div>

                </section>
                <section className={S.teamPhotos}>
                    {teamArr.map((card) =>
                        <PersonalCard
                            key={card.id}
                            card={card}
                            setOpenModal={setOpenModal}
                            setShowedBio={setShowedBio}
                            openModal={openModal}/>)
                    }

                </section>
                {openModal && showedBio &&
                    <ModalWindow
                        setOpenModal={setOpenModal}
                        setShowedBio={setShowedBio}
                        showedBio={showedBio}
                    />}
                <FooterBlock/>
            </div>

    )
}
