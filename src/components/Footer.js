import React from 'react'
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <div id="Footer">
        <div id="Footer-content">
          <Link to={"/imprint"} relative="path">Imprint</Link>
          <Link to={"/privacy"} relative="path">Privacy Policy</Link>
          <a href="https://github.com/etlaM21/maltehillebrand.de" target="_blank" rel="noreferrer">Source Code</a>
        </div>
    </div>
  )
}

export default Footer