import * as React from "react";
import S from "./ModalWindow.module.css"
import closeBtn from "./../../assets/icons8-close-button-32 (1).png"

export const ModalWindow = ({setOpenModal, setShowedBio, showedBio, topPosition, winScroll, screenHeight}) => {
    const onCloseClickHandler = () => {
        setOpenModal(false);
        setShowedBio({});
        document.body.style.overflow = 'auto';
    }
    return (
        <>
            <div className={S.modalOverlay} style={{height: `${screenHeight}px`, top: `${winScroll}px`}}></div>


            <div className={S.modalContainer}
                 style={{top: `${topPosition}px`, backgroundImage: `url(${showedBio.photo})`}}>
                <div className={S.modalContainerInnerOverlay}>

                    <img className={S.closeButton} src={closeBtn} onClick={onCloseClickHandler} alt='closeButton'/>
                    <div className={S.modalContainerInner}>

                        <div className={S.title}>
                            <h2>{showedBio.name}</h2>
                        </div>
                        <div className={S.body}>
                            <p className={S.modalText}>{showedBio.aboutPerson}</p>
                            <br/>
                            <p dangerouslySetInnerHTML={{__html: showedBio.bottomDescription}} className={S.modalText}/>
                        </div>
                        <div className={S.footer}></div>
                    </div>
                </div>

            </div>


        </>)
}
