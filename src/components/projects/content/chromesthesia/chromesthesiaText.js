import React from 'react'
import RoundButton from "../../../RoundButton"
import Experience from "../../../icons/Experience"

const ChromesthesiaText = () => {
  return (
    <div className="AboutText">
        <p><strong>Chromesthesia is an interactive audio visualizer.</strong></p>
        <p>It's an audiovisual experience for VR meant to function both as new way to listen to songs as well as to learn about audio frequencies and audio manipulation. But most importantly, it's fun.</p>
        <p>I wanted to create a world where the user can quite literally dive into sounds and frequencies and learn playfully about their relation to a song while having a mesmerizing experience in virtual reality. One of the first steps though was to figure out a way to show a song as what it is: <strong>an immersive, all surrounding experience</strong>. That's why I chose to build a tunnel around the user, so everything surrounding him visually is the same as it's sonically: the sound.</p>
        <p>The frequency amplitudes shape the structure of the tunnel: <strong>the higher the amplitude, the closer the mesh is to the user</strong>, just like it is louder in the ears, it's "louder" in the eyes.</p>
        <p>With a spectral flux analysis extreme changes in amplitudes are detected and affect the shading of the material to have it glow on beat. <strong>How the tunnel behaves is exactly how the sound behaves</strong>.</p>
        <p>You can find out more about the project and download it on <a data-tooltip-position="top" aria-label="https://github.com/etlaM21/Chromesthesia" rel="noopener" class="external-link" href="https://github.com/etlaM21/Chromesthesia" target="_blank">Github</a>.</p>
        <br />
        <RoundButton text={"VR Visualizer"} fill={true} />
        <RoundButton text={"Experience"} fill={false} IconLeft={Experience} />
        <br />
        <p><b>#Unity #AudioVisualizer #VirtualReality</b></p>
    </div>
  )
}

export default ChromesthesiaText