import * as React from "react";
import S from "./Projects.module.css"
import {useEffect, useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {ProjectCard} from "../../components/ProjectCard/ProjectCard";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {useSelector} from "react-redux";

export const Projects = () => {
    const projects = useSelector(state => state.projects);

    const [menuView, setMenuView] = useState(false);
    const [showProjectTypeDropdown, setShowProjectTypeDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState(projects.projects);

    const dropDownProjectTypeHandler = (type) => {
        setShowProjectTypeDropdown(!showProjectTypeDropdown);
    }
    const dropLocationTypeHandler = () => {
        setShowLocationDropdown(!showLocationDropdown);
    }
    const selectTypeHandler = (type) => {
       const FProjects = filteredProjects.filter((el)=> el.tags.includes(type));
       setFilteredProjects(FProjects);
    };
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
                        <div className={S.projectTypeButton}
                             onClick={dropDownProjectTypeHandler}
                        >
                            PROJECT TYPE
                            <div className={`${S.dropdown_content} ${showProjectTypeDropdown && S.show }  animate__animated animate__fadeIn`}>
                                <div className={S.dropDownSelect} onClick={()=>selectTypeHandler('Municipal')}>munitipal</div>
                                <div className={S.dropDownSelect} onClick={()=>selectTypeHandler('Housing')}>Housing</div>
                                <div className={S.dropDownSelect} onClick={()=>selectTypeHandler('Office')}>Office</div>
                                <div className={S.dropDownSelect} onClick={()=>selectTypeHandler('Small project')}>Small project</div>
                            </div>
                        </div>

                        <div className={S.projectTypeButton} onClick={dropLocationTypeHandler}

                        >
                            LOCATION
                            <div className={`${S.dropdown_content} ${showLocationDropdown && S.show }  animate__animated animate__fadeIn`}>
                                <div className={S.dropDownSelect}>chicago, il</div>
                                <div className={S.dropDownSelect}>other</div>

                            </div>
                        </div>
                    </div>
                </div>


                <section className={S.projectBody}>
                    {filteredProjects.map((project) =>
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
