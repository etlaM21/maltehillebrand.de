import React, {useState, useEffect} from "react";
import './header.css';
import Logo from "../Logo";
import Nav from "./Nav";
import { Link } from 'react-router-dom';
 
const Header = ({pages, activePage}) => {            

  const [isClosed, setIsClosed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState();

  useEffect(() => {
    setHeaderHeight(document.getElementsByTagName("header")[0].getBoundingClientRect().height);
  }, []);


  window.addEventListener("scroll", (event) => {
    if(document.getElementsByTagName("header")[0] !== undefined) {
      let scrollPos = event.target.scrollingElement.scrollTop;
      if(scrollPos > headerHeight * 1.5 && isClosed === false) {document.getElementsByTagName("header")[0].classList.remove("maximized"); document.getElementsByTagName("header")[0].classList.add("minified"); setIsClosed(true)};
      if(scrollPos < headerHeight * 1.5 && isClosed === true) {document.getElementsByTagName("header")[0].classList.add("maximized"); document.getElementsByTagName("header")[0].classList.remove("minified"); setIsClosed(false)};  
    } 
  });

  return (
    <header className="maximized">
      <div className="header-wrapper">
        <Link to="/"><Logo /></Link>
        <Nav pages={pages} activePage={activePage}/>
      </div>
    </header>
  );
};
 
export default Header;
