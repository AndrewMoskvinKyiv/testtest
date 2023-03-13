import * as React from "react";
import S from "./Projects.module.css"
import {CustomButton} from "../../components/common/CustomButtons/CustomButton/CustomButton";
import {useEffect, useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {ProjectCard} from "../../components/ProjectCard/ProjectCard";
import {projects} from "../../data/projects";
import {FooterBlock} from "../../components/common/Footer/Footer";
import axios from "axios";


export const Projects = () => {
    const [menuView, setMenuView] = useState(false);
    const [showProjectTypeDropdown, setShowProjectTypeDropdown] = useState(false);

    function setAuthHeader() {
        return {
            headers: {
                AccessKey: `67fbf3d6-627c-4475-a1153abb5c81-8690-4880`,
                accept: 'http://localhost:3000/'
            },
        };
    }
    useEffect(() => {
        let password = '083cab0c-b8b8-4e5c-a56d25da9195-e4c7-44ca';
        let readOnlyPasword = 'fec22446-220b-41d4-b0bf612a367c-6144-4c10';
        let apiKey = '1d10dbcb-bbee-40db-a78f-de5e5bc752eff39f74d9-1067-4707-a458-3e83f68c6392'
        let userName = 'apextest'
        const session = axios.create();
        session.get('https://ny.storage.bunnycdn.com/apextest/data.json', setAuthHeader());

    }, [])
    const dropDownHandler = () => {
        setShowProjectTypeDropdown(!showProjectTypeDropdown);
    }
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
                        <CustomButton name={'PROJECT TYPE'} color={'#8d9382'} callback={() => dropDownHandler()}/>
                        {
                            <div className={`${S.dropdown_content} ${showProjectTypeDropdown && S.show }`}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>}
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
