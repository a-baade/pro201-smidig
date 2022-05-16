import Facebook from "./icons/facebook.png";
import Instagram from "./icons/instagram.png";
import Snapchat from "./icons/snapchat.png";
import Tiktok from "./icons/tiktok.png";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Footer(){
  const [email, setEmail] = useState("");

  return(
    <footer>
      <div className={"footerLinks"}>
        <Link to={"/"} className={"footerLink"}>Donate</Link>
        <p>|</p>
        <Link to={"/"} className={"footerLink"}>About us</Link>
        <p>|</p>
        <Link to={"/"} className={"footerLink"}>Contact</Link>
      </div>

      <div className={ "footerSocial" }>
        <p><strong>Follow us on our social medias:</strong></p>
        <a href={"https://www.facebook.com/"}><img src={ Facebook }/> Meliora Impact</a>
        <a href={"https://www.instagram.com/"}><img src={ Instagram }/> @melioraimpact</a>
        <a href={"https://www.snapchat.com/"}><img src={ Snapchat }/> melioraimpact</a>
        <a href={"https://www.tiktok.com/"}><img src={ Tiktok }/> @melioraimpact</a>
      </div>

      <div className={ "footerSubscribe" }>
        <p>Subscribe here for news about our causes</p>
        <form>
          <input type="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button>Subscribe</button>
        </form>
      </div>
    </footer>
  );
}