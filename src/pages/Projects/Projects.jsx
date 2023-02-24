import * as React from "react";
import S from "./Projects.module.css"
import {CustomButton} from "../../components/common/CustomButtons/CustomButton/CustomButton";
import {useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {ProjectCard} from "../../components/ProjectCard/ProjectCard";
import {projects} from "../../data/projects";


export const Projects = () => {
    const [menuView, setMenuView] = useState(false);

    return (
        menuView ?
            <div className={S.projectsContainer}>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :
        <div className={S.projectsContainer}>
            <Header setMenuView={setMenuView} menuView={menuView}/>
            <section className={S.topWrapper}>

                <div className={S.videoWrapper}>
                    <div className={S.overlay}></div>
                <video autoPlay muted loop className={S.projectsBlockVideoBg}>
                    <source src="https://apextest12.b-cdn.net/vid5%20(1).mp4" type="video/mp4"/>
                </video>
                    <h1 className={S.projectTitle}>ALL PROJECTS</h1>
                </div>
                <div className={S.buttonsContainer}>
                   <CustomButton name={'PROJECT TYPE'}/>
                   <CustomButton name={'LOCATION'}/>
                </div>
        </section>


            <section className={S.projectBody}>
                {projects.map((project) =>
                    <ProjectCard
                        key={project.id}
                        project={project}
                       />)
                }
            </section>
        </div>
    )
}
