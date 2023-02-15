import * as React from "react";
import S from "./CustomButton.module.css"

export const CustomButton = ({name}) => {
    return (
        <div className={S.buttonContainer}>
            <button className={S.customButton}>{name}</button>
        </div>
    )
}
