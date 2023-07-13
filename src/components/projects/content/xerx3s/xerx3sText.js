import React from 'react'
import RoundButton from "../../../RoundButton"
import Graphic from "../../../icons/Graphic"

const Xerx3sText = () => {
  return (
    <div className="AboutText">
        <p>Procedurally generated temples after Greek's architectural ruleset, destroyed in Houdini, rendered in C4D and riso printed. Exhibited for the first time in 2022.</p>
        <p>
        <b>XERX3S</b> is a work exploring the relationship of traditional and modern art. A series of artworks depict the direct confrontation between the new and the old world: The analog and time consuming process of constructing a temple is rendered useless in the blink of an eye, with a modern laser beam finding it's way through it.
        </p>
        <p>
        But that is not the only depiction of traditional and modern processes clashing. The depicted temple, the temple of Athena, has been in ruins for more than 2000 years. With digital tools it was reconstructed to be digitally destroyed again. Even though the two methods of contruction - anlog and digital - couldn't seem further apart, the precision and planning needed was similiar in the modern process. The structure was carefully build, precisely broken and smoke exactly generated. The stone material had to look believable, the retouching needed to enhance the feeling and the format was crafted to tell a story. Just like the architects of the Akropolis and it's temple planned the project thoroughly, this artwork was.
        </p>
        <p>
        Landmarks will go and the world will change, the only truly inter-generational legacy connecting us as humans is our approach to mortality.
        </p>
        <br />
        <RoundButton text={"Artwork"} fill={true} />
        <RoundButton text={"Graphic"} fill={false} IconLeft={Graphic} />
        <br />
        <p><b>#Houdini #Cinema4D #RisoPrint</b></p>
    </div>
  )
}

export default Xerx3sText