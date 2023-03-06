import * as React from "react";
import S from "./Footer.module.css";
import logo from "./../../../assets/logo.webp"
import {FooterCustomButton} from "../CustomButtons/FooterCustomButton/FooterCustomButton";

export const FooterBlock = () => {
    return (
        <div className={S.footerContainer}>
            <img className={S.footerLogo} src={logo} alt={'footerLogo'}/>
            <div className={S.footerDevider}></div>
            <div className={S.footerNavButtonsBlock}>
                <FooterCustomButton name={"projects"}/>
                <FooterCustomButton name={"about"}/>
                <FooterCustomButton name={"contact"}/>
                <FooterCustomButton name={"news+awards"}/>
            </div>
            <div className={S.footerDevider}></div>
            <ul className={S.footerSocialMediaLinks}>
                <li >
                    <img className={S.socialLinkImg} src='https://apextest12.b-cdn.net/socialMediaImg/icons8-facebook.svg' alt='facebook'/>
                </li>
                <li>
                    <img className={S.socialLinkImg} src='https://apextest12.b-cdn.net/socialMediaImg/icons8-instagram.svg' alt='instagram'/>
                </li>
                <li>
                    <img className={S.socialLinkImg} src='https://apextest12.b-cdn.net/socialMediaImg/icons8-linkedin.svg' alt='linkedin'/>
                </li>
                <li>
                    <img className={S.socialLinkImg} src='https://apextest12.b-cdn.net/socialMediaImg/icons8-twitter.svg' alt='twitter'/>
                </li>
            </ul>

        </div>
    )
}

