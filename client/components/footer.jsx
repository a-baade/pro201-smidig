import Facebook from "../pics/icons/facebook.png";
import Instagram from "../pics/icons/instagram.png";
import Snapchat from "../pics/icons/snapchat.png";
import Linkedin from "../pics/icons/linkedin.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer>
      <div className={"footerLinks"}>
        <Link to={"/"} className={"footerLink"}>
          Social Media
        </Link>
        <p>|</p>
        <Link to={"/"} className={"footerLink"}>
          Donate
        </Link>
        <p>|</p>
        <Link to={"/about"} className={"footerLink"}>
          About us
        </Link>
        <p>|</p>
        <Link to={"/contact"} className={"footerLink"}>
          Contact
        </Link>
      </div>

      <div className={"footerSocial"}>
        <a href={"https://www.facebook.com/"}>
          <img src={Facebook} alt={"facebook"} />{" "}
        </a>
        <a href={"https://www.instagram.com/"}>
          <img src={Instagram} alt={"insta"} />
        </a>
        <a href={"https://www.linkedin.com/"}>
          <img src={Linkedin} alt={"linkedin"} />
        </a>
        <a href={"https://www.snapchat.com/"}>
          <img src={Snapchat} alt={"snap"} />{" "}
        </a>

      </div>

      <div className={" footerCopyright "}>
        <p>Copyright © 2022 Melioria Impact. All rights reserved</p>
      </div>

      <div className={"footerSubscribe"}>
        <p>Subscribe here for news about our causes</p>
        <form>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Subscribe</button>
        </form>
      </div>
    </footer>
  );
}
