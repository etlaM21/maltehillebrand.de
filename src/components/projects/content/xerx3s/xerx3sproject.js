import React from 'react'
import TextWithMedia from "../../../TextWithMedia"
import InlineGallery from '../../../InlineGallery'
import pic01 from "../../../../res/work/full/img/xerx3s_01.webp"
import pic02 from "../../../../res/work/full/img/xerx3s_02.webp"
import pic03 from "../../../../res/work/full/img/xerx3s_03.webp"
import pic04 from "../../../../res/work/full/img/xerx3s_04.webp"
import pic05 from "../../../../res/work/full/img/xerx3s_05.webp"
import pic06 from "../../../../res/work/full/img/xerx3s_06.webp"
import pic07 from "../../../../res/work/full/img/xerx3s_07.webp"
import pic08 from "../../../../res/work/full/img/xerx3s_08.webp"
import Xerx3sText from "./xerx3sText"

const xerx3sproject = () => {
  return (
    <>
    <div className="projectContenttWrapper">
      <TextWithMedia media={{src: pic02, type: "img", alt: "Virtual destruction of temple of Athena"}} Text={Xerx3sText} mediaPosition={"left"}/>
    </div>
    <div className="projectGallery">
        
      <InlineGallery content={[
        {
            src: pic01,
            alt: "Virtual destruction of temple of Athena",
            type: "img"
        }, 
        {
            src: pic02,
            alt: "Virtual destruction of temple of Athena",
            type: "img"
        }, 
        {
            src: pic03,
            alt: "Virtual destruction of temple of Athena",
            type: "img"
        }, 
        {
            src: pic04,
            alt: "Virtual destruction of temple of Athena",
            type: "img"
        }, 
        {
            src: pic05,
            alt: "Virtual destruction of temple of Athena",
            type: "img"
        }, 
        {
            src: pic06,
            alt: "Virtual destruction of temple of Athena",
            type: "img"
        }, 
        {
            src: pic07,
            alt: "Virtual destruction of temple of Athena",
            type: "img"
        }, 
        {
            src: pic08,
            alt: "Virtual destruction of temple of Athena",
            type: "img"
        }, 
      ]} leftToRight={true} />
    </div>
    </>
  )
}

export default xerx3sproject