import React,{useState}from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";
import CancelIcon from '@material-ui/icons/Cancel';

function Header() {
    const [inMobile,setInmobile] = useState(false);
    const [navbar,setNavbar] = useState(false);

    const changeBg = () =>{
      if(window.scrollY >=80){
        setNavbar(true);
      }else{
        setNavbar(false);
      }
    }

    window.addEventListener("scroll",changeBg);
  return (
    <nav className= {navbar ? "navbar active" : "navbar"} >
      <div className="logo">
        <Link to="">
          <img src="./logo/logo.png" alt="main-logo" className="nav__logo" />
        </Link>
      </div>
      <ul className= {inMobile ? "nav__linksMobile": "nav__links"}
       onClick={()=>{setInmobile(false)}}
      >
        <li className="nav__items">
          <Link to="">Diversities</Link>
        </li>
        <li className="nav__items">
          <Link to="">Comparision</Link>
        </li>
        <li className="nav__items">
          <Link to="">Pick-a-color</Link>
        </li>
        <Link to="" className="nav__sign">
          Sign-up
        </Link>
      </ul>
      <div className="hamburger" onClick={()=>{setInmobile(!inMobile)}}>
        {inMobile ? <CancelIcon/> : <div className="line"></div>}
      </div>
    </nav>
  );
}

export default Header;
