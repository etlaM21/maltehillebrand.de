import React from 'react'
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <div id="Footer">
        <div id="Footer-content">
          <Link to={"/imprint"} relative="path">Imprint</Link>
          <Link to={"/privacy"} relative="path">Privacy Policy</Link>
        </div>
    </div>
  )
}

export default Footer