import * as React from "react";
import {useParams} from "react-router-dom";
import {projects} from "../../data/projects";
import {useEffect, useState} from "react";
import S from "./ProjectView.module.css"
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {PanePanel} from "../../components/PanePanel/PanePanel";
import {ProjectPhoto} from "../Projects/ProjectPhoto/ProjectPhoto";
import {scrollUpFast} from "../Home/Home";
import play1 from "./../../assets/play.png"
import play2 from "./../../assets/play (1).png"
import play3 from "./../../assets/play (2).png"
import {ModalWindow} from "../../components/ModalWindow/ModalWindow";
import {ProjectVideoModalWindow} from "../../components/ProjectVideoModal/ProjectVideoModalWindow";


export const ProjectView = () => {
    const [menuView, setMenuView] = useState(false);
    const [element, setElement] = useState({});
    const [openVideoModal, setOpenVideoModal] = useState(false);

    const [extendedBlock, setExtendedBlock] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    const {id} = useParams();


    const onPlayClickHandler = () => {
        setOpenVideoModal(true);
    }


    useEffect(() => {
        scrollUpFast();
        let currentProgect = projects.find((el) => el.id === +id);
        setElement(currentProgect)
    }, [])


    return (
        menuView ?
            <div className={S.projectViewContainer}>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :
            <div className={S.projectViewContainer}>

                <Header setMenuView={setMenuView} menuView={menuView}/>
                <div className={S.detailBlockExtention}
                     onClick={() => setExtendedBlock({isPaneOpenLeft: true})}>Details
                </div>



                <section className={S.topWrapper}
                style={{backgroundImage: `url(${element.mainPhoto})`}}>
                    <div className={S.topBlockTextWrapper}>
                        <div className={S.topWrapper_cityContainer}>
                            <div className={S.topBlockHr}></div>
                            <p className={S.topLocaton}>{element.locationCity}, {element.locationState}</p>
                            <div className={S.topBlockHr}></div>
                        </div>

                        <h1 className={S.topTitle}>{element.title}</h1>
                        <p className={S.topText}>{element.description}</p>
                    </div>
                    <PanePanel state={extendedBlock} setState={setExtendedBlock} element={element}/>
                </section>


                <section className={S.bodyWrapper}>
                    {element.projectVideo &&

                        <div className={S.projectVideo}>
                            <img className={S.playBtnOverlay}
                                 src={play1} alt={"playBtn"}
                                 onClick={onPlayClickHandler}
                                 />
                            <h2 className={S.projectVideoPlayerOverlayTitle}>VIEW PROJECT OVERVIEW</h2>
                            <div className={S.projectVideoPlayerOverlay}></div>
                        <video autoPlay muted loop className={S.projectVideoPlayer}>
                            <source src={element.projectVideo} type="video/mp4"/>
                        </video>
                    </div>}



                    {element.photos && element.photos.map((photo) => <ProjectPhoto photo={photo}/>)}
                </section>
                {openVideoModal &&
                    // <div className={S.modalVideoOverlay}>
                        <ProjectVideoModalWindow
                            setOpenVideoModal={setOpenVideoModal}
                            videoLink={element.projectVideo}/>
                    // </div>
            }
                <FooterBlock/>
            </div>
    )
}
