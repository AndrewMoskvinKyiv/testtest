import * as React from "react";
import S from "./AdminModal.module.css";
import closeBtn from "./../../../assets/icons8-close-button-32 (1).png";
import 'animate.css';
export const AdminModal = ({setModValue, modValue}) => {
    const onCloseClickHandler = () => {
        setModValue({});
        document.body.style.overflow = 'auto';
    }
    return<div className={S.personModalContainer}>
            <div className={S.modalOverlay}></div>

            <div className={`${S.modalContainer} animate__animated animate__fadeIn`}>

                <div className={S.modalContainerInnerOverlay}>
                    <img className={S.closeButton} src={closeBtn} onClick={onCloseClickHandler} alt='closeButton'/>
                    sdfsdf

                </div>
            </div>


        </div>
}
