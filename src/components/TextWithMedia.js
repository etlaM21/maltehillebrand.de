import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import "./TextWithMedia.css"

const TextWithMedia = ({id, media, Text, mediaPosition}) => {
  const theWrapperClass = "text-with-media " + mediaPosition; //left or right
  const thePicClass = "pic " + mediaPosition; //left or right
  const theTextClass = mediaPosition === "left" ? "text right" : "text left"; //left or right
  return (
    <div id={id} className={theWrapperClass}>
        <div className={thePicClass}>
            <Parallax className="parallax" translateY={["-50px", "50px"]}>
              {
                media.type === "img" ? <img src={media.src} alt={media.alt} /> :
                <video src={media.src} alt={media.alt} controls autoPlay loop muted/>
              }
              
            </Parallax>
        </div>
        <div className={theTextClass}>
            {< Text />}
        </div>
    </div>
  )
}

export default TextWithMedia