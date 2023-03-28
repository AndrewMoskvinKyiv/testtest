import * as React from "react";
import S from "./AdminElementComponent.module.css"
import {useEffect, useState} from "react";
import {v1} from "uuid";


export const AdminElementComponent = ({project, setModValue}) => {
    const [projectForCorrection, setProjectForCorrection] = useState({});
    const projectTemplate = {
        id: v1(),
        title: "",
        client: "",
        address: "sdf",
        locationCity: "",
        locationState: "",
        owner: "",
        architect: "",
        sf: "",
        deliverySystem: "",
        description: "",
        tags: [],
        projectVideo: "",
        mainPhoto: "",
        photos: []
    };
    useEffect(() => {
        setProjectForCorrection(project);
    }, [project]);
    const setModValueHandler = (el) => {
        setModValue(el);
    }
    const modElementLenghtCutter = (valueString) => {
        if (typeof valueString === "string" && valueString.length > 20) {
            const cuttedValue = valueString.split('').slice(0, 35).join('');
            return `${cuttedValue}...`
        } else if (typeof valueString === "object" && valueString.length !== 0) {
            return `${valueString.length} values`
        }
        return `${valueString}`
    }
    return (
        <div className={S.projectViewContainer}>

            {Object.keys(projectTemplate).map((el) =>
                <div className={S.modElement} onClick={setModValueHandler(el)}>
                    <div className={S.modElementTitle}>{el}:</div>
                    {modElementLenghtCutter(projectForCorrection[el])}
                </div>)}
        </div>
    )
}
