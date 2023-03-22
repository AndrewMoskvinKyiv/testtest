import * as React from "react";
import S from "./PersonalCard.module.css"
import {useState} from "react";
import {PopUpTitleWithSlowUnderline} from "../common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";


export const PersonalCard = ({card, setOpenModal, setShowedBio}) => {
    const [mouseOverId, setMouseOverId] = useState("");
    const [showTitle, setShowTitle] = useState(false);
    const onPersonCardHover = () => {
        setMouseOverId(card.id);
        let timer = setTimeout(()=> {
            setShowTitle(true);
            clearTimeout(timer);
        },200)

    }
    const onMouseLeaveHandler = () => {
        setMouseOverId("");
        setShowTitle(false);
    }
    const onClickHandler = () => {
        setOpenModal(true);
        setShowedBio(card);
        document.body.style.overflow = 'hidden';
    }
    return (
        <div
             className={`${S.personalCardContainer}  animate__animated animate__fadeIn`}
             style={{backgroundImage: `url(${card.photo})`}}
             onMouseOver={onPersonCardHover}
             onMouseLeave={onMouseLeaveHandler}
             onClick={onClickHandler}>

            {card.name !== "general_photo" && <div className={S.personalCardTitle}>
                {mouseOverId === card.id && <PopUpTitleWithSlowUnderline title={card.name} buttonName={'view bio'} showDivider={showTitle}/>}
            </div>}
        </div>
    )
}
