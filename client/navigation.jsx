import Search from "./icons/search.png";import Profile from "./icons/avatar.png";import Logo from "./icons/logo.png"import { Link } from "react-router-dom";/*        Bytt ut p med Link når routing er på plass */export default function Navigation() {  return(    <nav>      <div>        <img src={ Logo } className={ "logo" }/>        <Link to={"/"} className={"navLinks"}>Home</Link>        <Link to={"/charities"}  className={ "navLinks" }>Charities</Link>        <p className={ "navLinks" }>About us</p>        <p className={ "navLinks" }>Contact</p>        <p className={ "navLinks" }>Other</p>      </div>      <div>        <img src={ Search } className={ "navIcons" }/>        <div className={ "profileDropdown" }>          <img src={ Profile } className={ "navIcons" }/>          <div className={ "dropdownContent" }>            <ul><Link to={"/login"} className={ "dropdownLink" }>Log in</Link></ul>            <ul><Link to={"/profile"} className={"dropdownLink"}>Profile</Link></ul>            <p className={ "dropdownLink" }>My dashboard</p>            <Link to={"/login/endsession"} className={"dropdownLink"}>Log out</Link>          </div>        </div>      </div>    </nav>  );}