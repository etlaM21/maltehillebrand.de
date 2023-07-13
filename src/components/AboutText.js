import React from 'react'
import RoundButton from './RoundButton'
import YouTube from "./icons/YouTube"
import Instagram from "./icons/Instagram"

const AboutText = () => {
  return (
    <div className="AboutText">
        <h1>Malte Hillebrand</h1>
        <p><b>Berlin-based interdisciplinary artist, designer and programmer.</b></p>
        <p>I worked for a variety of companies, including <a href="https://www.sonymusic.com/" target="_blank" rel="noreferrer">Sony Music</a>, <a href="https://www.bild.de/" target="_blank" rel="noreferrer">BILD</a>, <a href="https://napalmrecords.com/" target="_blank" rel="noreferrer">Napalm Records</a>, <a href="https://sehsuechte.de/" target="_blank" rel="noreferrer">Sehsüchte Festival</a>, <a href="https://www.groenland.com/" target="_blank" rel="noreferrer">Grönland Records</a>, and many more.</p>
        <p>Thanks to a broad skill set, I'm able to realise my client's ideas in creative ways. As a designer, my main task is to understand complex concepts and break them down into a language that can be understood across different cultures - "happiness" becomes :).</p>
        <p>I specialise in <b>2D and 3D graphic design, animation and programming</b>. Hence, I am able to help my clients developed and build upon a cohesive and consistent brand. The programs I use include After Effects, Blender, Spark AR, Photoshop, Illustrator, Premiere. Programming languages I'm comfortable in are Python, JavaScript, C#, C++, HTML and CSS.</p>
        <p>In 2020 I received my B.A. from the <a href="https://www.udk-berlin.de/" target="_blank" rel="noreferrer">University of Arts Berlin</a> and I am currently enrolled in the master program <a href="https://www.filmuniversitaet.de/en/studies/study-programs/master-programs/creative-technologies" target="_blank" rel="noreferrer">“Creative Technologies” at the Film University Babelsberg</a> in Potsdam.</p>
        <br />
        <RoundButton text={"Instagram"} fill={false} onClick={() => window.open("https://www.instagram.com/etlam.21/")} hover={true} IconLeft={Instagram} />
        <RoundButton text={"YouTube"} fill={false} onClick={() => window.open("https://www.youtube.com/@MalteHillebrandlink")} hover={true} IconLeft={YouTube} />
    </div>
  )
}

export default AboutText