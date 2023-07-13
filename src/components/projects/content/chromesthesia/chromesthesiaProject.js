import React from 'react'
import TextWithMedia from "../../../TextWithMedia"
import InlineGallery from '../../../InlineGallery'
import pic01 from "../../../../res/work/full/img/chromesthesia_selectScene.png"
import pic02 from "../../../../res/work/full/img/chromesthesia_tunnel.png"
import vid03 from "../../../../res/work/full/video/Chromesthesia_AD.mp4"
import vid04 from "../../../../res/work/full/video/chromesthesia_commandCenter.mp4"
import vid05 from "../../../../res/work/full/video/chromesthesia_tunnelGrid.mp4"
import ChromesthesiaText from "./chromesthesiaText"

const ChromesthesiaProject = () => {
  return (
    <>
    <div className="projectContenttWrapper">
      <TextWithMedia media={{src: vid03, type: "vid", alt: "Interactive audio visualizer in VR"}} Text={ChromesthesiaText} mediaPosition={"left"}/>
    </div>
    <div className="projectGallery">
        
      <InlineGallery content={[
        {
            src: pic02,
            alt: "Interactive audio visualizer in VR",
            type: "img"
        }, 
        {
            src: vid03,
            alt: "Interactive audio visualizer in VR",
            type: "vid"
        }, 
        {
            src: vid04,
            alt: "Interactive audio visualizer in VR",
            type: "vid"
        }, 
        {
            src: pic01,
            alt: "Interactive audio visualizer in VR",
            type: "img"
        }, 
        {
            src: vid05,
            alt: "Interactive audio visualizer in VR",
            type: "vid"
        }
      ]} leftToRight={true} />
    </div>
    </>
  )
}

export default ChromesthesiaProject