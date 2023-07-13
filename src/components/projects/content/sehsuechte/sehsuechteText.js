import React from 'react'
import RoundButton from "../../../RoundButton"
import Graphic from "../../../icons/Graphic"
import Experience from "../../../icons/Experience"
import Motion from "../../../icons/Motion"

const Xerx3sText = () => {
  return (
    <div className="AboutText">
        <p>In 2022 India Aparicio and I were asked to design the year's edition of the biggest international student film festival, <b>Sehsüchte</b>. The festival at the film university Konrad Wolf in Potsdam Babelsberg started in 1972 and has since had a <b>unique motto for each year's edition</b>, this time it was <b>Radiance</b>.</p>
        <p>
        Tasked with the opportunity to design the festival's complete visual identity, we designed everything from <b>lanyards, posters, websites, social media posts, an instagram filter to trophies, banners, stages and even animated the trailer for the year's edition</b>. Based on the theme we created a key visual that symbolizes diverse realities through abstract manifold forms. These realities emerge from a two-dimensional frame – the screen. Little parts and bits of the main motif found their way in all of the designs, constructing a coherent and vibrant design. While dark backgrounds were mostly used used to further emphasize the glowing colors, our design system enabled us to use simple gradients and bold borders whenever a light background was needed.
        </p>
        <p>
        The trailer for the festival was animated in Blender, composited in After Effects, graded in DaVinci and played in multiple cinemas across Berlin and Brandenburg. Ole Wiedekamm composed the soundtrack, Jonathan Hamann added SFX and it was all mixed by Ingolf-Christopher Facius.
        </p>
        <br />
        <RoundButton text={"Corporate Design"} fill={true} />
        <RoundButton text={"Graphic"} fill={false} IconLeft={Graphic} />
        <RoundButton text={"Motion"} fill={false} IconLeft={Motion} />
        <RoundButton text={"Experience"} fill={false} IconLeft={Experience} />
        <br />
        <p><b>#Blender #AfterEffects #Illustrator #InDesign #VisualIdentiy</b></p>
    </div>
  )
}

export default Xerx3sText