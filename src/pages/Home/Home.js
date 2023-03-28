import * as React from "react";
import S from "./Home.css"
import {SimpleSlider} from "../../components/slickSlider/SimpleSlider";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import {Header} from "../../components/common/Header/Header";
import {useEffect, useState} from "react";
import axios from "axios";
import {actions} from "../../store/projectsReduser/projectsReducer";
import {useDispatch} from "react-redux";
export const scrollUpFast = () => {
        let t, s;
        s=document.body.scrollTop||window.pageYOffset;
        t=setInterval(function(){if(s>0)window.scroll(0,s=s-1000);else clearInterval(t)},1);
        return!1
    }
export default function Home() {
    const [menuView, setMenuView] = useState(false);
    const dispatch = useDispatch();
   useEffect(()=> {
       scrollUpFast();
       const session = axios.create();
       session.get('https://apextest12.b-cdn.net/data(1).json').then((data)=>{
           dispatch(actions.setAllApexProjects(data.data));
       });
   } , [])

    return (
        <div className={S.root}>
            <Header setMenuView={setMenuView} menuView={menuView}/>
            {menuView ? <MobileMenu setMenuView={setMenuView}/> : <SimpleSlider/> }
        </div>)


}
