import * as React from "react";
import S from "./PersonalCard.module.css"
import {useState} from "react";
import {PopUpTitleWithSlowUnderline} from "../common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";


export const PersonalCard = ({card, setOpenModal, setShowedBio, openModal}) => {
    const [mouseOverId, setMouseOverId] = useState("");
    const onPersonCardHover = () => {
        setMouseOverId(card.id);
    }
    const onMouseLeaveHandler = () => {
        setMouseOverId("");
    }
    const onClickHandler = () => {
        setOpenModal(true);
        setShowedBio(card);
        document.body.style.overflow = 'hidden';
    }
    return (
        <div className={S.personalCardContainer}
             style={{backgroundImage: `url(${card.photo})`}}
             onMouseOver={onPersonCardHover}
             onMouseLeave={onMouseLeaveHandler}
             onClick={onClickHandler}
        >
            <div className={S.personalCardContainerHover}
                 style={{opacity: mouseOverId === card.id ? '80%' : '0%'}}></div>
            <div className={S.personalCardTitle}>
                {mouseOverId === card.id ? <PopUpTitleWithSlowUnderline title={card.name} buttonName={'view bio'} /> :
                    null
                }
            </div>
        </div>
    )
}
