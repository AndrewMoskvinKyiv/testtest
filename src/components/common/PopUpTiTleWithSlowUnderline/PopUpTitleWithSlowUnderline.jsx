import S from "./PopUpTitleWithSlowUnderline.module.css"
import 'animate.css'

export const PopUpTitleWithSlowUnderline = ({title, text, buttonName, showDivider}) => {
    return (
        <div className={S.PopUpTitleWrapper} style={{visibility: showDivider? "visible" : "hidden"}}>
            <p className={S.title}
               style={{opacity: showDivider ? '100' : '0'}}>
                {title}
            </p>

            <div className={S.divider}
                  style={{transform: showDivider ? 'scaleX(1)' : 'scaleX(0)'}}>

            </div>

            <p className={S.text}
               style={{opacity: showDivider ? '100' : '0'}}>
                {text}
            </p>
            <button
                style={{opacity: showDivider ? '100' : '0'}}
                className={S.titleBtn}>
                 {buttonName}
            </button>
        </div>
    )
}
