import * as React from "react";
import S from "./ProjectCard.module.css";
import {useEffect, useState} from "react";
import 'animate.css'



export const ProjectCard = ({project}) => {
    const [mouseOverId, setMouseOverId] = useState("");



    const onProjectCardHover = () => {
        setMouseOverId(project.id);

    };
    const onProjectLeaveHandler = () => {
        setMouseOverId("");
    };
    const locationCreator = (state, city) => {
        return `${city}, ${state}`
    };
    const onClickHandler = (mouseOverId) => {
        if (mouseOverId) {
            window.location.pathname = `${window.location.pathname}/project_view/${project.id}`;
        }
    };

    return (
        <div className={S.projectCardContainer}
             style={{backgroundImage: `url(${project.mainPhoto})`}}
             onMouseOver={onProjectCardHover}
             onMouseLeave={onProjectLeaveHandler}
             onClick={onClickHandler}
        >
            <div className={S.projectContainerHover}
                 style={{opacity: mouseOverId === project.id ? '80%' : '0%'}}>
            </div>

            <div className={S.titleContainer}>
                <p className={S.projectTitle}>
                    {project.title}
                </p>

                <p className={S.projectText}>
                    {locationCreator(project.locationState, project.locationCity)}
                </p>
            </div>


        </div>
    )
}

