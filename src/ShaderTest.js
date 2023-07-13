//@flow
import React, { Component, useRef } from "react";

import PinkNoiseShader from "./components/PinkNoiseShader";

export default class ShaderTest extends Component {
  render() {
     return (
      <div id="shadertest">
        <div style={{width: "50vw", height: "100vh", display: "inline-block"}}>
          <PinkNoiseShader />
        </div>
        <div style={{width: "49vw", height: "100vh", display: "inline-block"}}>
          <PinkNoiseShader />
        </div>
      </div>
    );
  }
}
