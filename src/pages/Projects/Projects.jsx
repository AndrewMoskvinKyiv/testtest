import * as React from "react";
import S from "./Projects.module.css"
import {CustomButton} from "../../components/common/CustomButtons/CustomButton/CustomButton";
import {useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {ProjectCard} from "../../components/ProjectCard/ProjectCard";
import {projects} from "../../data/projects";
import {FooterBlock} from "../../components/common/Footer/Footer";


export const Projects = () => {
    const [menuView, setMenuView] = useState(false);

    return (
        menuView ?
            <div className={S.projectsContainer}>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <div className={S.topWrapper}>
                    <div className={S.videoBlockWrapper}>
                        <div className={S.videoBlockOverlayWrapper}></div>
                        <video autoPlay muted loop className={S.projectsBlockVideoBg}>
                            <source src="https://apextest12.b-cdn.net/newEnglandstreched.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <h1 className={S.projectTitle}>ALL PROJECTS</h1>


                    <div className={S.buttonsContainer}>
                        <CustomButton name={'PROJECT TYPE'} color={'#8d9382'}/>
                        <CustomButton name={'LOCATION'} color={'#8d9382'}/>
                    </div>
                </div>


                <section className={S.projectBody}>
                    {projects.map((project) =>
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />)
                    }
                </section>
                <FooterBlock/>
            </div>
    )
}
