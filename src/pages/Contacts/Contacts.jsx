import S from "./Contacts.module.css";
import ST from "./../../styles/title.module.css"
import {Header} from "../../components/common/Header/Header";
import {MobileMenu} from "../../components/MobileMenu/MobileMenu";
import * as React from "react";
import {useState} from "react";
import {FooterBlock} from "../../components/common/Footer/Footer";
import {CustomButton} from "../../components/common/CustomButtons/CustomButton/CustomButton";

export default function Contacts() {
    const [menuView, setMenuView] = useState(false);
    return (
        menuView ?
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <MobileMenu/>
            </div>
            :
            <div>
                <Header setMenuView={setMenuView} menuView={menuView}/>
                <div className={S.topWrapper}
                     style={{backgroundImage: `url(https://apextest12.b-cdn.net/projects/Oakbrook%20Office/wasPSD.jpg)`}}
                >

                    <div className={S.inputsContainer}>
                        <div className={S.topInputsContainer}>


                            <div className={S.form__group}>
                                <input type="input" autoComplete= 'no' className={S.form__field} placeholder="First name" name="firstName" id='firstName'
                                       required/>
                                <label htmlFor="name" className={S.form__label}>First name</label>
                            </div>


                            <div className={S.form__group}>
                                <input type="input" autoComplete= 'no' className={S.form__field} placeholder="Last name"  name="lastName" id='lastName'
                                       required/>
                                <label htmlFor="name" className={S.form__label}>Last name</label>
                            </div>

                        </div>
                        <div className={S.topInputsContainer}>
                            <select className={S.stringInput}>
                                <option>General</option>
                                <option>Careers</option>
                                <option>Press</option>
                            </select>
                            <div className={S.form__group}>
                                <input type="input" autoComplete= 'no' className={S.form__field} placeholder="Email" name="email" id='email'
                                       required/>
                                <label htmlFor="name" className={S.form__label}>Email</label>
                            </div>
                        </div>
                        <div className={S.topInputsContainer}>
                            <textarea className={S.textareaStyle} placeholder={'Type your message here'} >

                            </textarea>
                        </div>
                        <CustomButton name={"let's connect!"} color={'white'} bcgColor={'transparent'} width={'100%'}/>
                    </div>
                    <div className={S.contactsContainer}>
                        <div className={S.adressBlock}>
                            <div className={S.addressLabel}>address</div>
                          <p className={S.addressText}>17W601 14th St.</p>
                          <p className={S.addressText}>OakBrook Terrace</p>
                            <p className={S.addressText}>Chicago, ILLINOIS 60181</p>
                        </div>
                        <div className={S.phoneBlock}>
                            <div className={S.addressLabel}>phone</div>
                            <p className={S.addressText}>(773) 481-1029</p>
                        </div>
                    </div>
                </div>
                <h1 className={`${S.contactsTitle} ${ST.pageTitle}`}>contact</h1>

                <FooterBlock/>
            </div>
    );
}
