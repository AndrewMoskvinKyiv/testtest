import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import S from "./SimpleSlider.module.css"
import * as React from "react";
import {PopUpTitleWithSlowUnderline} from "../common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";



export const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        lazyLoad: true,
        className: "center",
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>

    };
    return (
        <div style={{height: '100%'}}>
            <video autoPlay muted loop className={S.myVideo}>
                <source src="https://apextest12.b-cdn.net/vid4.mp4" type="video/mp4"/>
            </video>
            <div className={S.videoTitle}>
                <PopUpTitleWithSlowUnderline title={'Waterfall'} text={'Chicago,il'} buttonName={'view project'}/>
            </div>
        </div>
        // <Slider {...settings}>
        //         <div>
        //             <video autoPlay muted loop className={S.myVideo}>
        //                 <source src="https://apextest12.b-cdn.net/vid1.mp4" type="video/mp4"/>
        //             </video>
        //         </div>
        //         <div>
        //             <video autoPlay muted loop className={S.myVideo} >
        //                 <source src="https://apextest12.b-cdn.net/vid2.mp4" type="video/mp4"/>
        //             </video>
        //         </div>
        //         <div>
        //             <video autoPlay muted loop className={S.myVideo} >
        //                 <source src="https://apextest12.b-cdn.net/vid3.mp4" type="video/mp4"/>
        //             </video>
        //         </div>
        //     </Slider>

    )
}
function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none", background: "red"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none", background: "green"}}
            onClick={onClick}
        />
    );
}
