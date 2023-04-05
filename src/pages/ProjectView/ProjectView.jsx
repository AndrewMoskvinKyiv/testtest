import * as React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import S from "./ProjectView.module.css"
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {PanePanel} from "../../components/PanePanel/PanePanel";
import {ProjectPhoto} from "../Projects/ProjectPhoto/ProjectPhoto";
import {scrollUpFast} from "../Home/Home";
import play1 from "./../../assets/play.png"
import {ProjectVideoModalWindow} from "../../components/ProjectVideoModal/ProjectVideoModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {getAllProjectsTC} from "../../store/projectsReducer/projectsReducer";
import {v4 as uuidv4} from "uuid";


export const ProjectView = () => {
    const projects = useSelector(state => state.projects.projects);
    const dispatch = useDispatch();

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
        if (projects.length < 2) {
            dispatch(getAllProjectsTC()).then((data)=> {
               const currentProgect = data.find((el) => el.id === +id);
                setElement(currentProgect);
            });
        } else {
            const currentProgect = projects.find((el) => el.id === +id);
            setElement(currentProgect);
        }
        }, []);

    return (
        menuView ?
            <div className={S.projectViewContainer}>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :

            <div className={S.projectViewContainer}>

                {Object.keys(element).length > 0 ?
                    <div>
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



                    {element.photos && element.photos.map((photo) => <ProjectPhoto key={uuidv4()} photo={photo}/>)}
                </section>
                {openVideoModal &&

                        <ProjectVideoModalWindow
                            setOpenVideoModal={setOpenVideoModal}
                            videoLink={element.projectVideo}/>

            }
                <FooterBlock/>
                    </div> : <span>PRELOADER!!!</span>}</div>
    )
}
