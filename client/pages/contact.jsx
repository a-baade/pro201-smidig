import React from "react";
import Message from "../pics/sign-up-pic/img_2.png";
import Phone from "../pics/icons/phone.png";
import Location from "../pics/icons/location.png";
import Pink from "../pics/contact-pics/pink-squiggle.png";
import Blue from "../pics/contact-pics/blue-squiggle.png";
import Person from "../pics/contact-pics/person-flowers.png";

export function Contact() {
    return (
        <div className={"login-container page-margin"}>
            <div className={"contact-sidebar"}>
                <h1 className={"sidebar-title"}>We'd love to <br/> hear from you</h1>
                <div>
                    <div className={"contact-info"}>
                        <img src={Phone} className={"contact-icon"} alt={"phoneIcon"}/>
                        <p>+47 999 99 999</p>
                    </div>
                    <div className={"contact-info"}>
                        <img src={Message} className={"contact-icon"} alt={"msgIcon"}/>
                        <p>meliora.impact@gmail.com</p>
                    </div>
                    <div className={"contact-info"}>
                        <img src={Location} className={"contact-icon"} alt={"locationIcon"}/>
                        <p>ch. groghsgate 12, 0186 Oslo Norway</p>
                    </div>
                </div>
                <div className={"contact-background"}>
                    <img src={Pink} className={"pink"} alt={"pinkSquig"}/>
                    <img src={Blue} className={"blue"} alt={"blueSquig"}/>
                    <img src={Person} className={"person"} alt={"personPic"}/>
                </div>
            </div>

            <div className={"contact-form"}>
                <h1>Get in touch with us</h1>
                <p>Fill out the form and our team will get back to you <br/> within 72 hours.</p>
                <div className={"name-field contact-input-field"}>
                    <label className={"login-txt contact-txt"}>Your name</label>
                    <input type= "text" placeholder={"Firstname Lastname"} className={"login-txt contact-input"}/>
                </div>
                <div className={"email-field contact-input-field"}>
                    <label className={"login-txt contact-txt"}>Email address</label>
                    <input type= "email" placeholder={"email@address.com"} className={"login-txt contact-input"}/>
                </div>
                <div className={"message-field contact-input-field"}>
                    <label className={"login-txt contact-txt"}>Your message</label>
                    <input type="textarea" placeholder={"Write your message"} className={"login-txt contact-textarea contact-input"}/>
                </div>
                <button className={"submit-btn sign-in-btn"}>Submit</button>
            </div>
        </div>
    );
}