import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import S from "./SimpleSlider.module.css"
import * as React from "react";
import {PopUpTitleWithSlowUnderline} from "../common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";


export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        className: "center",
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>

    };
    return (
        // <div style={{height: '100%'}}>
        //     <video autoPlay muted loop className={S.myVideo}>
        //         <source src="https://apextest12.b-cdn.net/vid4.mp4" type="video/mp4"/>
        //     </video>
        //     <div className={S.videoTitle}>
        //         <PopUpTitleWithSlowUnderline title={'Waterfall'} text={'Chicago,il'} buttonName={'view project'}/>
        //     </div>
        // </div>
        <Slider {...settings}>
            <div>
                <video
                    className={S.myVideo}
                    controls ="controls"
                    controls preload="auto"
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://apextest12.b-cdn.net/vid4.mp4" type="video/mp4"/>
                </video>
                <div className={S.videoTitle}>
                    <PopUpTitleWithSlowUnderline title={'Waterfall'} text={'Chicago,il'} buttonName={'view project'}/>
                </div>
            </div>
            <div>
                <video controls ="controls"
                       controls preload="auto"
                       autoPlay="autoplay" muted loop playsInline className={S.myVideo}>
                    <source src="https://apextest12.b-cdn.net/vid5.mp4" type="video/mp4"/>
                </video>
                <div className={S.videoTitle}>
                    <PopUpTitleWithSlowUnderline title={'Video2'} text={'SliderTest'} buttonName={'view project'}/>
                </div>
            </div>
            <div>
                <video controls ="controls"
                       controls preload="auto"
                       autoPlay="autoplay" muted loop playsInline className={S.myVideo}>
                    <source src="https://apextest12.b-cdn.net/vid7.mp4" type="video/mp4"/>
                </video>
                <div className={S.videoTitle}>
                    <PopUpTitleWithSlowUnderline title={'Video3'} text={'SliderTest1'} buttonName={'view project'}/>
                </div>
            </div>
        </Slider>

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
