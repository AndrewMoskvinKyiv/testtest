import * as React from "react";
import S from "./Admin.module.css"
import {useState} from "react";
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {CustomButton} from "../../components/common/CustomButtons/CustomButton/CustomButton";
import {useSelector} from "react-redux";
import axios from "axios";
import {AdminElementComponent} from "../../components/AdminComponents/AdminElementComponent/AdminElementComponent";
import {AdminModal} from "../../components/AdminComponents/AdminModal/AdminModal";


export const Admin = () => {
    const projects = useSelector(state => state.projects);
    const [menuView, setMenuView] = useState(false);
    const [adminFile, setAdminFile] = useState('');
    const [currentModificatedDataObject, setCurrentModificatedDataObject] = useState({});
    const [modValue, setModValue] = useState({})


    const projectFetching = () => {
        setAdminFile('projects');
    };
    const teamFetching = () => {
        let objectToSend = [...projects];

        console.log('teamFetching');
        const session = axios.create();
        session.put('https://ny.storage.bunnycdn.com/apextest/apex_projects.json', {log: 'залупа'}, {
            headers: {
                AccessKey: '67fbf3d6-627c-4475-a1153abb5c81-8690-4880',
                accept: '*/*'
            }
        })
    }
    const choseObjectForModificationChoosen = (chosenProject) => {
        setCurrentModificatedDataObject(chosenProject)
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
                <div className={S.admin_home}>
                    <div className={S.linksWrapper}>
                        <CustomButton name={'projects'} callback={projectFetching}/>
                        <CustomButton name={'Team Members'} callback={teamFetching}/>
                    </div>
                    <div className={S.contentWrapper}>
                        <div className={S.projectTitleWrapper}>
                        {adminFile === 'projects' ?
                            projects.projects.map((project) =>

                                    <div className={S.projectWrapper} key={project.id} onClick={()=> choseObjectForModificationChoosen(project)}>
                                        <div className={S.projectTitle}>{project.title}</div>
                                    </div>


                            )

                            :
                            <span>choose subject for change!</span>
                        }
                        </div>
                        <div className={S.projectTitleWrapper}>
                            <AdminElementComponent project={currentModificatedDataObject} setModValue={setModValue}/>
                        </div>
                    </div>
                </div>
                {Object.keys(modValue).length !== 0   &&
                    <AdminModal
                        setModValue={setModValue}
                        modValue={modValue}
                    />}

            </div>
    )
}
