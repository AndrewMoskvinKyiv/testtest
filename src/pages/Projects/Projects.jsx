import * as React from "react";
import S from "./Projects.module.css"
import { Turn as Hamburger } from 'hamburger-react'
import {CustomButton} from "../../components/common/CustomButton/CustomButton";
import logo from "../../assets/logo.webp";
import NavigationPanel from "../../components/NavigationPanel/NavigationPanel";
import {useState} from "react";
import {Header} from "../../components/common/Header/Header";

export const Projects = () => {
    const [menuView, setMenuView] = useState(false);

    return (
        <div className={S.projectsContainer}>
            <Header setMenuView={setMenuView} menuView={menuView}/>
            <div className={S.topWrapper}>

                <div className={S.videoWrapper}>
                    <div className={S.overlay}></div>
                <video autoPlay muted loop className={S.projectsBlockVideoBg}>
                    <source src="https://apextest12.b-cdn.net/vid5.mp4" type="video/mp4"/>
                </video>
                    <h1 className={S.projectTitle}>ALL PROJECTS</h1>
                </div>
                <div className={S.buttonsContainer}>
                   <CustomButton name={'PROJECT TYPE'}/>
                   <CustomButton name={'LOCATION'}/>
                </div>
        </div>
        </div>
    )
}
