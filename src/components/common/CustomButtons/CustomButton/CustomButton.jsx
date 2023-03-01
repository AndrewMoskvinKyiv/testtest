import * as React from "react";
import S from "./CustomButton.module.css"

export const CustomButton = ({name, callback, color}) => {
    return (
        <button className={S.customButton} style={{color: color}} onClick={callback}>{name}</button>
    )
}
