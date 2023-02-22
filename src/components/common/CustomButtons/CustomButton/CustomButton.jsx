import * as React from "react";
import S from "./CustomButton.module.css"

export const CustomButton = ({name, callback}) => {
    return (
        <button className={S.customButton} onClick={callback}>{name}</button>
    )
}
