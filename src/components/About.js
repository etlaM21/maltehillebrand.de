import React from 'react'
import TextWithMedia from "./TextWithMedia"
import MaltePic from "../res/img/malte.jpg"
import AboutText from "./AboutText"
import "./about.css"

const About = () => {
  return (
    <div id="about">
        <TextWithMedia media={{src: MaltePic, type: "img", alt: "Portrait photo of a smiling Malte Hillebrand"}} Text={AboutText} mediaPosition={"left"} />
    </div>
  )
}

export default About