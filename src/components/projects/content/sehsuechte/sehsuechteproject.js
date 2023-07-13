import React from 'react'
import TextWithMedia from "../../../TextWithMedia"
import InlineGallery from '../../../InlineGallery'
import pic01 from "../../../../res/work/full/img/sehsuechte_buch.webp"
import pic02 from "../../../../res/work/full/img/sehsuechte_instagram.webp"
import pic03 from "../../../../res/work/full/img/sehsuechte_merch_overview.webp"
import pic04 from "../../../../res/work/full/img/sehsuechte_plakat_final.webp"
import pic05 from "../../../../res/work/full/img/sehsuechte_plakate.webp"
import pic06 from "../../../../res/work/full/img/sehsuechte_pokal.webp"
import pic07 from "../../../../res/work/full/img/sehsuechte_pullover.webp"
import pic08 from "../../../../res/work/full/img/sehsuechte_website_home.webp"
import vid01 from "../../../../res/work/full/video/Sehsuechte.mp4"
import sehsuechteText from "./sehsuechteText"

const xerx3sproject = () => {
  return (
    <>
    <div className="projectContenttWrapper">
      <TextWithMedia media={{src: pic04, type: "img", alt: "Visual Identity for a film festival, poster design"}} Text={sehsuechteText} mediaPosition={"right"}/>
    </div>
    <div className="projectGallery">
        
      <InlineGallery content={[
        {
            src: pic01,
            alt: "Visual Identity for a film festival, program book",
            type: "img"
        }, 
        {
            src: pic02,
            alt: "Visual Identity for a film festival, social media templates",
            type: "img"
        }, 
        {
            src: pic03,
            alt: "Visual Identity for a film festival, merchandise",
            type: "img"
        }, 
        {
            src: pic04,
            alt: "Visual Identity for a film festival, poster design",
            type: "img"
        }, 
        {
            src: vid01,
            alt: "Visual Identity for a film festival, trailer",
            type: "vid"
        }, 
        {
            src: pic05,
            alt: "Visual Identity for a film festival, poster design",
            type: "img"
        }, 
        {
            src: pic06,
            alt: "Visual Identity for a film festival, throphies",
            type: "img"
        }, 
        {
            src: pic07,
            alt: "Visual Identity for a film festival, merchandise",
            type: "img"
        }, 
        {
            src: pic08,
            alt: "Visual Identity for a film festival, website design",
            type: "img"
        }, 
      ]} leftToRight={false} />
    </div>
    </>
  )
}

export default xerx3sproject