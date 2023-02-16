import * as React from "react";
import {Header} from "../../components/common/Header/Header";
import S from "./Team.module.css"
import {PersonBottomDescription, PersonDescription} from "../../data/stringConsts";
import {PersonalCard} from "../../components/PersonalCard/PersonalCard";
import {v4 as uuidv4} from 'uuid';
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {useState} from "react";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {SimpleSlider} from "../../components/slickSlider/SimpleSlider";


export const Team = () => {
    const [menuView, setMenuView] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [showedBio, setShowedBio] = useState({});
    const teamArr = [
        {
            id: uuidv4(),
            name: "Paola Placko",
            position: "Lead Estimator / Architectural Designer",
            aboutPerson: PersonDescription.PaolaPlacko,
            bottomDescription: "",
            photo: "https://apextest12.b-cdn.net/teamFaces/Paola%20Placko.jpeg"
        },
        {
            id: uuidv4(),
            name: "Olga Podoba",
            position: "Human Resource Specialist",
            aboutPerson: PersonDescription.OlgaPodoba,
            bottomDescription: PersonBottomDescription.OlgaPodoba,
            photo: "https://apextest12.b-cdn.net/teamFaces/Olga%20Podoba.jpeg"
        },
        {
            id: uuidv4(),
            name: "Adrian Caushi",
            position: "Vice President",
            aboutPerson: PersonDescription.AdrianCaushi,
            bottomDescription: "",
            photo: "https://apextest12.b-cdn.net/teamFaces/Adrian%20Caushi.jpeg"
        },
        {
            id: uuidv4(),
            name: "Noah Morkunas",
            position: "Estimator/ Pre Construction Manager",
            aboutPerson: PersonDescription.NoahMorkunas,
            bottomDescription: PersonBottomDescription.NoahMorkunas,
            photo: "https://apextest12.b-cdn.net/teamFaces/Noah%20Morkunas.jpeg"
        },
    ];

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

                <div className={S.teamContainer}>
                    <Header setMenuView={setMenuView} menuView={menuView}/>

                    <section className={S.teamTop}>
                        <div className={S.teamTopOverlay}>
                            <div className={S.shadowBar}></div>
                            <h1 className={S.teamTitle}>The Apex team</h1>
                            <p className={S.teamTitleBottom}>
                                We are a team of architects, designers, and planners who
                                value collaboration, innovation, and create impactful
                                environments around the world.
                            </p>
                        </div>
                    </section>

                    <section className={S.teamPhotos}>
                        <picture>
                            <img className={S.generalPhoto}
                                 src={"https://apextest12.b-cdn.net/generalPhotosApex/groupPhoto.jpeg"}
                                 alt={'generalPhoto'}/>
                        </picture>
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

                </div>

    )
}
