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
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,


    };
    // const playerRef = React.useRef(null);
    // let [source, setSource] = useState(0);
    //
    // let videoJsOptions = {
    //     autoplay: true,
    //     controls: false,
    //     responsive: true,
    //     muted: true,
    //     fluid: true,
    //     sources: [{
    //         src: videoBgArray[source].videoUrl,
    //         type: 'video/mp4'
    //     }]
    // };

    // const handlePlayerReady = (player) => {
    //     playerRef.current = player;
    //
    //     // You can handle player events here, for example:
    //     player.on('waiting', () => {
    //     });
    //
    //     player.on('dispose', () => {
    //     });
    // };
    // const onArrowClickHandler = () => {
    //     if(source < videoBgArray.length - 1) {
    //         setSource(source + 1)
    //     } else {
    //         setSource(0)
    //     }
    // }
    // const titleSwitcher = () => {
    //     switch (source) {
    //         case 0:
    //             let timer5 = setTimeout(() => {
    //                 setTitleVision(false)
    //                 clearTimeout(timer5);
    //             }, videoBgArray[0].videoDuration - 4);
    //             break;
    //         case 1:
    //             let timer6 = setTimeout(() => {
    //                 setTitleVision(false)
    //                 clearTimeout(timer6);
    //             }, videoBgArray[1].videoDuration - 4)
    //             break;
    //         case 2:
    //             let timer7 = setTimeout(() => {
    //                 setTitleVision(false)
    //                 clearTimeout(timer7);
    //             }, videoBgArray[2].videoDuration - 4)
    //             break;
    //         default:
    //     }
    // }
    // const intervalSwitcher = () => {
    //     switch (source) {
    //         case 0:
    //             let timer1 = setTimeout(() => {
    //                 setSource(1);
    //                 clearTimeout(timer1);
    //                 }, videoBgArray[0].videoDuration);
    //             break;
    //         case 1:
    //             let timer2 = setTimeout(() => {
    //                 setSource(2);
    //                 clearTimeout(timer2);
    //             }, videoBgArray[1].videoDuration)
    //             break;
    //         case 2:
    //             let timer3 = setTimeout(() => {
    //                 setSource(0);
    //                 clearTimeout(timer3);
    //             }, videoBgArray[2].videoDuration)
    //             break;
    //         default:
    //     }
    // }
    // intervalSwitcher();
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






    return (


        <Slider {...settings}>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://assets.website-files.com/5dc103431d958bfe587c36ad/5fbe76769bb83cd1b3446c00_Emme-01-transcode.mp4" type="video/mp4"/>
                </video>
            </div>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://assets.website-files.com/5dc103431d958bfe587c36ad/5eecec891b18c0b4ad9d57ee_One%20Bennett-transcode.mp4" type="video/mp4"/>
                </video>
            </div>
            <div>
                <video
                    className={S.myVideo}
                    autoPlay="autoplay" muted loop playsInline>
                    <source src="https://apextest12.b-cdn.net/vid4.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={S.videoTitle}>
                <PopUpTitleWithSlowUnderline title={'Waterfall'} text={'Chicago,il'} buttonName={'view project'}/>
            </div>
        </Slider>)
}





















