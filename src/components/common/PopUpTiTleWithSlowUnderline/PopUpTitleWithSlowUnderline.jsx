import S from "./PopUpTitleWithSlowUnderline.module.css"
import {useEffect, useState} from "react";
import 'animate.css'

export const PopUpTitleWithSlowUnderline = ({title, text, buttonName, delay=100}) => {
    const [showDivider, setShowDivider] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivider(true);
            clearTimeout(timer)
        }, delay);
        const timer2 = setTimeout(() => {
            setShowBtn(true);
            clearTimeout(timer2)
        }, delay * 2);
    }, [title])
    return (
        <div className={S.PopUpTitleWrapper}>
            <p className={`${S.title} animate__fadeInUp`}
               style={{display: showDivider ? 'inline-block' : 'none'}}
            >{title}</p>
            <div className={S.divider} style={{transform: showDivider ? 'scaleX(1)' : 'scaleX(0)'}}></div>
            <p className={`${S.text} animate__fadeInDown`}
                style={{display: showDivider ? 'inline-block' : 'none'}}
            >{text}
            </p>
            <button
                style={{opacity: showBtn ? '100' : '0',
                    bottom: text ? '-45px' : '-15px',
                    border: buttonName ? '1px solid #FFFFFF7F' : '1px solid transparent'}}
                className={`${S.titleBtn} animate__fadeInDown`}
            >{buttonName}</button>
        </div>
    )
}
