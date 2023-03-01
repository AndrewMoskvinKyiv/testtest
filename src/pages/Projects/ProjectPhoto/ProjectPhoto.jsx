import * as React from "react";
import {useEffect, useState} from "react";

export const ProjectPhoto = ({photo}) => {
    const possiblePhotoWidth = [800,1100,920,1000,900,690,700,950,1150,880]
    const [widthOfProjectPhoto, setWidthOfProjectPhoto] = useState(5);
    useEffect(()=> {
        const chooseWidthOfPhoto = Math.random().toFixed(1)*10;
        setWidthOfProjectPhoto(possiblePhotoWidth[chooseWidthOfPhoto]);
        console.log(chooseWidthOfPhoto);
        console.log(widthOfProjectPhoto);
    },[])
    return (
        <img style={{width: `${widthOfProjectPhoto}px`}} src={photo} alt={'objectPhoto'}/>
    )
}
