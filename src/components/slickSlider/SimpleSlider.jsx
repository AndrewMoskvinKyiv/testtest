import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import S from "./SimpleSlider.module.css"
import * as React from "react";
import {PopUpTitleWithSlowUnderline} from "../common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";
import whiteLeftArrow from "./../../assets/whiteArrowLeft.png"



export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <img className={S.nextArrow} src={whiteLeftArrow} onClick={onClick}/>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (

        <img className={S.prevArrow} src={whiteLeftArrow} onClick={onClick}/>
        );
    }

    return (
        <Slider {...settings}>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://assets.website-files.com/5dc103431d958bfe587c36ad/5fbe76769bb83cd1b3446c00_Emme-01-transcode.mp4" type="video/mp4"/>
                </video>
                <div className={S.videoTitle}>
                    <PopUpTitleWithSlowUnderline title={'constructionVideo1'} text={'Chicago,il'} buttonName={'view project'}/>
                </div>
            </div>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://assets.website-files.com/5dc103431d958bfe587c36ad/5eecec891b18c0b4ad9d57ee_One%20Bennett-transcode.mp4" type="video/mp4"/>
                </video>
                <div className={S.videoTitle}>
                    <PopUpTitleWithSlowUnderline title={'constructionVideo2'} text={'Chicago,il'} buttonName={'view project'}/>
                </div>
            </div>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://apextest12.b-cdn.net/vid4.mp4" type="video/mp4"/>
                </video>
                <div className={S.videoTitle}>
                    <PopUpTitleWithSlowUnderline title={'constructionVideo3'} text={'Chicago,il'} buttonName={'view project'}/>
                </div>
            </div>

        </Slider>)
}





















