import React from 'react'
import "./projects.css"
import PinkStripeTitle from '../PinkStripeTitle'

import Xerx3sproject from './content/xerx3s/xerx3sproject'
import Sehsuechteproject from "./content/sehsuechte/sehsuechteproject"
import ChromesthesiaProject from "./content/chromesthesia/chromesthesiaProject"

const Projects = () => {
  return (
    <div id="projects">
      <div className="projectWrapper" id="serx3s">
        <PinkStripeTitle text={"XERX3S"} textPos={"right"} />
        < Xerx3sproject />
      </div>
      <div className="projectWrapper" id="sehsuechte">
          <PinkStripeTitle text={"Sehsüchte"} textPos={"left"} />
          < Sehsuechteproject />
      </div>
      <div className="projectWrapper" id="chromesthesia">
          <PinkStripeTitle text={"Chromesthesia"} textPos={"right"} />
          < ChromesthesiaProject />
      </div>
    </div>
  )
}

export default Projects