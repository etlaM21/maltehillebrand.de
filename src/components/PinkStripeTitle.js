import React from 'react'
import "./PinkStripeTitle.css"
import PinkNoiseShader from "./PinkNoiseShader"
import RoundButton from './RoundButton'

const PinkStripeTitle = ({text, textPos}) => {
    let theTextClass = "stripeTitleText";
    if(textPos === "left") theTextClass += " left";
    if(textPos === "right") theTextClass += " right";
    return (
        <div className="stripeTitle">
            <div className={theTextClass}>
            <RoundButton text={text} fill={true} inverted={true}/>
            </div>
            <PinkNoiseShader isSticky={false}/>
        </div>
  )
}

export default PinkStripeTitle