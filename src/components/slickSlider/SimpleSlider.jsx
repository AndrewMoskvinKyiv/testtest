import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import S from "./SimpleSlider.module.css"
import * as React from "react";
import {PopUpTitleWithSlowUnderline} from "../common/PopUpTiTleWithSlowUnderline/PopUpTitleWithSlowUnderline";
import whiteLeftArrow from "./../../assets/whiteArrowLeft.png"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";



export const SimpleSlider = () => {
    const navigate = useNavigate();
    let [currentSlide, setCurrentSlide] = useState({title:'verandah townhomes',text:'Chicago,IL',buttonName:'view Project', id:1133});
    let [showDivider, setShowDivider] = useState(true);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return ()=> { document.body.style.overflow = "auto"}
    },[])

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 23000,
        speed: 20,
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
                    setCurrentSlide({title:'Mokena Park District',text:'Chicago,IL',buttonName:'view Project', id: 1132})

                    break;
                case 1:
                    setCurrentSlide({title:'rocks',text:'someplace',buttonName:'view Project'})

                    break;
                case 2:
                    setCurrentSlide({title:'verandah townhomes',text:'Chicago,IL',buttonName:'view Project', id: 1133})

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
    const redirectToProjectHandler = () => {
        navigate(`/projects/project_view/${currentSlide.id}`);
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <img className={S.prevArrow} src={whiteLeftArrow} onClick={onClick}/>
        );
    }

    return (
        <div className={S.homePageContainer}>
        <Slider {...settings}>
            <div >
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://apextest12.b-cdn.net/videos/MainPage_videos/1.mp4" type="video/mp4"/>
                </video>
            </div>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://apextest12.b-cdn.net/videos/MainPage_videos/mokena%20(1).mp4" type="video/mp4"/>
                </video>
            </div>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://apextest12.b-cdn.net/projects/A%20top%20projects%20video/SchoolShort_Long%20ss.mp4" type="video/mp4"/>
                </video>

            </div>

        </Slider>
    <div className={S.videoTitle}>
        <PopUpTitleWithSlowUnderline
            title={currentSlide.title}
            text={currentSlide.text}
            buttonName={currentSlide.buttonName}
            showDivider={showDivider}
            callbackFunk={redirectToProjectHandler}
        />
    </div>
    </div>
    )
}





















