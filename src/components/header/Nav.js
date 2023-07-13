import React from "react";
import { Link } from 'react-router-dom';
 
const Nav = (props) => {
  const toggleMobileNav = () => {
    let menu = document.getElementById("mobile-nav");
    if(menu.classList.contains("is-active")) menu.classList.remove("is-active")
    else menu.classList.add("is-active")
  }
  return (
    <div id="navwrapper">
      <nav id="main-nav">
        {props.pages.map((page, index) => {
          let classUsed = "";
          let link = "/" + page;
          if(page === "work") link = "/";
          if(page === props.activePage) classUsed += "active"
          return <Link to={link} className={classUsed} key={page}>{page}</Link>
        })}
      </nav>
      <nav id="mobile-nav">
        <div className="hamburger" onClick={toggleMobileNav}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        <div className="mobile-menu">
          {props.pages.map((page, index) => {
            let classUsed = "";
            let link = "/" + page;
            if(page === "work") link = "/";
            if(page === props.activePage) classUsed += "active"
            let transDelay = index * 0.125 + "s";
            return <Link to={link} className={classUsed} style={{transitionDelay: transDelay}} key={page}>{page}</Link>
          })}
        </div>
      </nav>
    </div>
  );
};
 
export default Nav;
