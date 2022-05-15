import Search from "./icons/search.png";
import Profile from "./icons/avatar.png";
import Logo from "./icons/logo.png"
import { Link } from "react-router-dom";

/*
        Bytt ut p med Link når routing er på plass
 */

export default function Navigation() {
  return(
    <nav>
      <div>
        <img src={ Logo } className={ "logo" }/>
        <p  className={ "navLinks" }>Charities</p>
        <p className={ "navLinks" }>About us</p>
        <p className={ "navLinks" }>Contact</p>
        <p className={ "navLinks" }>Other</p>
      </div>
      <div>
        <img src={ Search } className={ "navIcons" }/>
        <div className={ "profileDropdown" }>
          <img src={ Profile } className={ "navIcons" }/>
          <div className={ "dropdownContent" }>
            <Link to={"/login"} className={ "dropdownLink" }>Log in</Link>
            <p className={ "dropdownLink" }>My dashboard</p>
          </div>
        </div>
      </div>
    </nav>
  );
}