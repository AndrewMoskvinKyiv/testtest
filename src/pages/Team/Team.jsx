import * as React from "react";
import {Header} from "../../components/common/Header/Header";
import S from "./Team.module.css"
import {PersonalCard} from "../../components/PersonalCard/PersonalCard";
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {useState} from "react";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {teamArr} from "../../data/teamMembers";



export const Team = () => {
    const [menuView, setMenuView] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [showedBio, setShowedBio] = useState({});


    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const screenHeight = window.screen.height
    const modalPosition = screenHeight / 100 * 10 + winScroll


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
                        <h1 className={S.teamTitle} >The Apex team</h1>
                        <p className={S.teamTitleBottom}>
                            Every APEX project starts with a team of experienced, determined professionals.
                            These individuals are eager to develop their skills and collaborate to create
                            seamless building projects for our clients.
                        </p>
                    </div>
                </section>
                <section className={S.teamPhotos}>
                    <div className={S.joelFinder}></div>
                    <picture>
                        <img className={S.generalPhoto}
                             src={"https://apextest12.b-cdn.net/generalPhotosApex/groupPhotoS.jpg"}
                             alt={'generalPhoto'}/>
                    </picture>
                </section>
                <section className={S.teamPhotos}
                         // style={{height: `${Math.ceil(teamArr.length / 3) * 500 + 600}px`}}
                >
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
                    <div className={S.overlay}>
                        <ModalWindow
                            setOpenModal={setOpenModal}
                            setShowedBio={setShowedBio}
                            showedBio={showedBio}
                            topPosition={modalPosition}
                            winScroll={winScroll}
                            screenHeight={screenHeight}
                        /></div>}
                <FooterBlock/>
            </div>

    )
}
