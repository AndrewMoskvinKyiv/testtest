import * as React from "react";
import {useParams} from "react-router-dom";
import {projects} from "../../data/projects";
import {useEffect, useState} from "react";
import S from "./ProjectView.module.css"
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";

export const ProjectView = () => {
    const [menuView, setMenuView] = useState(false);
    const [element, setElement] = useState({})
    const { id } = useParams();

   useEffect(() => {
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
                <section className={S.topWrapper}>

                    {/*<div className={S.overlay}></div>*/}

                    <div className={S.topBlock}
                         style={{backgroundImage: `url(${element.mainPhoto})`}}>

                        <p className={S.topLocaton}>{element.locationCity}, {element.locationState}</p>
                        <h1 className={S.topTitle}>{element.title}</h1>
                        <p className={S.topText}>{element.description}</p>
                    </div>

                </section>
        </div>
    )
}
