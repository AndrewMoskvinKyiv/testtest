import * as React from "react";
import S from "./ProjectCard.module.css";
import {useState} from "react";
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
        const shortState = state.split('').slice(0, 2).join('').toUpperCase();
        return `${city}, ${shortState}`
    };
    return (
        <div className={S.projectCardContainer}
             style={{backgroundImage: `url(${project.mainPhoto})`}}
             onMouseOver={onProjectCardHover}
             onMouseLeave={onProjectLeaveHandler}>
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
