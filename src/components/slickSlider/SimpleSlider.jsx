import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import S from "./SimpleSlider.module.css"
import * as React from "react";
import {PopUpTitleWithSlowUnderline} from "../common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";
import whiteLeftArrow from "./../../assets/whiteArrowLeft.png"
import {useState} from "react";



export const SimpleSlider = () => {
    let [currentSlide, setCurrentSlide] = useState({title:'emme',text:'Chicago',buttonName:'view Project'});
    let [showDivider, setShowDivider] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 9000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current) => {
            setShowDivider(false);
            switch(current) {
                case 0:
                    setCurrentSlide({title:'skyeng',text:'kyiv',buttonName:'view Project'})

                    break;
                case 1:
                    setCurrentSlide({title:'rocks',text:'someplace',buttonName:'view Project'})

                    break;
                case 2:
                    setCurrentSlide({title:'emme',text:'Chicago',buttonName:'view Project'})

                    break;
                default:
                    setCurrentSlide({title:'some_progect',text:'somewhere',buttonName:'view Project'})

            }
            },
        afterChange:() => {
            let timer = setTimeout(()=> {
                clearTimeout(timer);
                setShowDivider(true);},500)

        }

    };
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <img className={S.nextArrow} src={whiteLeftArrow} onClick={onClick}/>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <img className={S.prevArrow} src={whiteLeftArrow} onClick={onClick}/>
        );
    }

    return (
        <div>
        <Slider {...settings}>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://assets.website-files.com/5dc103431d958bfe587c36ad/5fbe76769bb83cd1b3446c00_Emme-01-transcode.mp4" type="video/mp4"/>
                </video>
                {/*<div className={S.videoTitle}>*/}
                {/*    <PopUpTitleWithSlowUnderline title={'constructionVideo1'} text={'Chicago,il'} buttonName={'view Project'}/>*/}
                {/*</div>*/}
            </div>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://assets.website-files.com/5dc103431d958bfe587c36ad/5eecec891b18c0b4ad9d57ee_One%20Bennett-transcode.mp4" type="video/mp4"/>
                </video>
                {/*<div className={S.videoTitle}>*/}
                {/*    <PopUpTitleWithSlowUnderline title={'constructionVideo2'} text={'Chicago,il'} buttonName={'view Project'}/>*/}
                {/*</div>*/}
            </div>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://apextest12.b-cdn.net/vid4.mp4" type="video/mp4"/>
                </video>

            </div>

        </Slider>
    <div className={S.videoTitle}>
        <PopUpTitleWithSlowUnderline
            title={currentSlide.title}
            text={currentSlide.text}
            buttonName={currentSlide.buttonName}
            showDivider={showDivider}
        />
    </div>
    </div>
    )
}





















