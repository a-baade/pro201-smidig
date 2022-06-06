import React from "react";
import {Link} from "react-router-dom";
import Facebook from "../pics/icons/facebook.png";
import Instagram from "../pics/icons/instagram.png";
import Snapchat from "../pics/icons/snapchat.png";
import Linkedin from "../pics/icons/linkedin.png";

export default function Footer() {
    return (
        <footer>
            <div className={"footer-links"}>
                <Link to={"/"} className={"footer-link"}>
                    Social Media
                </Link>
                <p>|</p>
                <Link to={"/charities"} className={"footer-link"}>
                    Donate
                </Link>
                <p>|</p>
                <Link to={"/about"} className={"footer-link"}>
                    About us
                </Link>
                <p>|</p>
                <Link to={"/contact"} className={"footer-link"}>
                    Contact
                </Link>
            </div>
            <div className={"footer-social"}>
                <a href={"https://www.facebook.com/"}>
                    <img src={Facebook} alt={"facebook"} />
                </a>
                <a href={"https://www.instagram.com/"}>
                    <img src={Instagram} alt={"insta"} />
                </a>
                <a href={"https://www.linkedin.com/"}>
                    <img src={Linkedin} alt={"linkedin"} />
                </a>
                <a href={"https://www.snapchat.com/"}>
                    <img src={Snapchat} alt={"snap"} />
                </a>
            </div>
            <div className={"footer-copyright"}>
                <p>Copyright © 2022 Melioria Impact. All rights reserved</p>
            </div>
            <div className={"footer-subscribe"}>
                <p>Subscribe here for news about our causes</p>
                <form>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        required={"true"}
                    />
                    <button>Subscribe</button>
                </form>
            </div>
        </footer>
    );
}
