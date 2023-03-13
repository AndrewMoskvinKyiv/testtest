import * as React from "react";
import S from "./ProjectVideoModalWindow.module.css";
import closeBtn from "./../../assets/icons8-close-button-32 (1).png";
import 'animate.css';
export const ProjectVideoModalWindow = ({setOpenVideoModal, videoLink}) => {
    const onCloseClickHandler = () => {
        setOpenVideoModal(false);
    }
    return (
          <div className={S.modalOverlay}>
            <div className={S.modalContainer}>
                <img className={S.closeButton} src={closeBtn} onClick={onCloseClickHandler} alt='closeButton'/>
                <video controls className={S.modalVideoPlayer}>
                    <source src={videoLink} type="video/mp4"/>
                </video>
            </div>
          </div>
    )
}
