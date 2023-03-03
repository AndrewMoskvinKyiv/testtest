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
import {scrollUpFast} from "../../App";



export const ProjectView = () => {

    const [menuView, setMenuView] = useState(false);
    const [element, setElement] = useState({});

    const [extendedBlock, setExtendedBlock] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    const { id } = useParams();

   useEffect(() => {
       scrollUpFast();
       let currentProgect = projects.find((el)=> el.id === +id);
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
                <div className={S.detailBlockExtention} onClick={() => setExtendedBlock({ isPaneOpenLeft: true })}>Details</div>
                <section className={S.topWrapper}>

                    <div className={S.topBlock}
                         style={{backgroundImage: `url(${element.mainPhoto})`}}>

                        <p className={S.topLocaton}>{element.locationCity}, {element.locationState}</p>
                        <h1 className={S.topTitle}>{element.title}</h1>
                        <p className={S.topText}>{element.description}</p>
                    </div>

                    <PanePanel state={extendedBlock} setState={setExtendedBlock} element={element}/>
                </section>
                <section className={S.bodyWrapper}>
                    {element.photos && element.photos.map((photo)=> <ProjectPhoto photo={photo}/>)}
                </section>
                <FooterBlock/>
            </div>
    )
}
