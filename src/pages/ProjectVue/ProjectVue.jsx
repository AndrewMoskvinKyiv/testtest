import * as React from "react";
import {useParams} from "react-router-dom";
import {projects} from "../../data/projects";
import {useEffect, useState} from "react";

export const ProjectVue = () => {
    const [element, setElement] = useState({})
    const { id } = useParams();

   useEffect(() => {
       let currentProgect = projects.find((el)=> el.id === +id);
       setElement(currentProgect)
       }, [])


    return (
        <div>{element.title}</div>
    )
}
