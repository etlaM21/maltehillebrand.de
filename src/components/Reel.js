import React from 'react'
import "./reel.css"
import ReelVideo from "../res/MASTER_REEL_FINAL_web.webm"

const Reel = () => {
  return (
    <div id="reel-wrapper">
        <div id="reel-content">
            <video width="1280" height="729" autoPlay={true} loop={true} muted={true} playsInline={true} controls={true}>
                <source src={ReelVideo} type="video/webm"/>
            </video>
            <div id="reel-text">
                <h1>Hey, I'm <b>Malte Hillebrand</b>!</h1>
                <p>I've been freelancing for over five years and this reel is a visual journey through my personal endeavors and collaborations with incredible clients. Each project has been a labor of love.</p>
                <p>If you're looking for a <b>dedicated and imaginative freelancer</b> to bring your ideas to life, I'm here for you! Let's explore how we can collaborate to create something extraordinary.</p>
                <p><b>But I do more than just motion design:</b><br /> Take a look around and see what I'm all about. Cheers!</p>
            </div>
        </div>
    </div>
  )
}

export default Reel