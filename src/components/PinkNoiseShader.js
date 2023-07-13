//@flow
import React, { Component, useRef  } from "react";

import { Vector3, Vector2 } from 'three'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'


const PinkNoiseMaterial = shaderMaterial({
  time: 0.,
  speed: 0.0125,
  scale: 150.0,
  seed: 0.,
  resolution: new Vector3(),
  mousePos: new Vector2()
},
`
varying vec2 vUv;

void main()	{
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}
`,
`
uniform vec3 resolution;
uniform float time;
uniform float speed;
uniform float scale;
uniform float seed;
uniform vec2 mousePos;

        /* https://www.shadertoy.com/view/XsX3zB
        *
        * The MIT License
        * Copyright © 2013 Nikita Miropolskiy
        * 
        * ( license has been changed from CCA-NC-SA 3.0 to MIT
        *
        *   but thanks for attributing your source code when deriving from this sample 
        *   with a following link: https://www.shadertoy.com/view/XsX3zB )
        *
        * ~
        * ~ if you're looking for procedural noise implementation examples you might 
        * ~ also want to look at the following shaders:
        * ~ 
        * ~ Noise Lab shader by candycat: https://www.shadertoy.com/view/4sc3z2
        * ~
        * ~ Noise shaders by iq:
        * ~     Value    Noise 2D, Derivatives: https://www.shadertoy.com/view/4dXBRH
        * ~     Gradient Noise 2D, Derivatives: https://www.shadertoy.com/view/XdXBRH
        * ~     Value    Noise 3D, Derivatives: https://www.shadertoy.com/view/XsXfRH
        * ~     Gradient Noise 3D, Derivatives: https://www.shadertoy.com/view/4dffRH
        * ~     Value    Noise 2D             : https://www.shadertoy.com/view/lsf3WH
        * ~     Value    Noise 3D             : https://www.shadertoy.com/view/4sfGzS
        * ~     Gradient Noise 2D             : https://www.shadertoy.com/view/XdXGW8
        * ~     Gradient Noise 3D             : https://www.shadertoy.com/view/Xsl3Dl
        * ~     Simplex  Noise 2D             : https://www.shadertoy.com/view/Msf3WH
        * ~     Voronoise: https://www.shadertoy.com/view/Xd23Dh
        * ~ 
        *
        */
    
    /* discontinuous pseudorandom uniformly distributed in [-0.5, +0.5]^3 */
    vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
    }
    
    /* skew constants for 3d simplex functions */
    const float F3 =  0.3333333;
    const float G3 =  0.1666667;
    
    /* 3d simplex noise */
    float simplex3d(vec3 p) {
        /* 1. find current tetrahedron T and it's four vertices */
        /* s, s+i1, s+i2, s+1.0 - absolute skewed (integer) coordinates of T vertices */
        /* x, x1, x2, x3 - unskewed coordinates of p relative to each of T vertices*/
        
        /* calculate s and x */
            
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        
        /* calculate i1 and i2 */
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
            
        /* x1, x2, x3 */
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        
        /* 2. find four surflets and store them in d */
        vec4 w, d;
        
        /* calculate surflet weights */
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        
        /* w fades from 0.6 at the center of the surflet to 0.0 at the margin */
        w = max(0.6 - w, 0.0);
        
        /* calculate surflet components */
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        
        /* multiply d by w^4 */
        w *= w;
        w *= w;
        d *= w;
        
        /* 3. return the sum of the four surflets */
        return dot(d, vec4(52.0));
    }
    
    /* const matrices for 3d rotation */
    const mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
    const mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
    const mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
    
    /* directional artifacts can be reduced by rotating each octave */
    float simplex3d_fractal(vec3 m) {
        return   2.0*simplex3d(m*rot1);
        // THESE MAKE COOLER NOISE; more interesting, but too res heavy for mobile web :(((
            /* +0.5*simplex3d(2.0*m*rot2)
            +0.1333333*simplex3d(4.0*m*rot3);
            +0.0666667*simplex3d(8.0*m); */
    }
    
    vec2 shiftFrag(vec2 fragCoord, float shiftX, float shiftY){
        return vec2(fragCoord.x + shiftX, fragCoord.y + shiftY)/resolution.x;
    }
    
    void main()
    {
        vec2 p = shiftFrag(gl_FragCoord.xy, 0.0,0.0);
        float time = time*speed + seed;
        float size = resolution.x / scale;
        vec2 mousePositionRelative = vec2(mousePos.x, mousePos.y) / resolution.xy;
        float edgeThresh = 0.0 + distance(p, vec2(mousePositionRelative.x, abs(mousePositionRelative.y-1.0)));
        float value;
        
        value = simplex3d_fractal(vec3(p.x, p.y, time) * size);
        value = smoothstep(edgeThresh, edgeThresh - 0.005, abs(value + simplex3d_fractal(vec3(shiftFrag(gl_FragCoord.xy, 1.0,0.0), time) * size)));
        value = smoothstep(edgeThresh, edgeThresh - 0.005, abs(value + simplex3d_fractal(vec3(shiftFrag(gl_FragCoord.xy, -1.0,0.0), time) * size)));
        value = smoothstep(edgeThresh, edgeThresh - 0.005, abs(value + simplex3d_fractal(vec3(shiftFrag(gl_FragCoord.xy, 0.0,1.0), time) * size)));
        value = smoothstep(edgeThresh, edgeThresh - 0.005, abs(value + simplex3d_fractal(vec3(shiftFrag(gl_FragCoord.xy, 0.0,-1.0), time) * size)));
        // value = step(abs(value - simplex3d_fractal(vec3(shiftFrag(gl_FragCoord.xy, 1.0,1.0), time) * size)), edgeThresh);
        // value = step(abs(value - simplex3d_fractal(vec3(shiftFrag(gl_FragCoord.xy, -1.0,-1.0), time) * size)), edgeThresh);
        // value = step(abs(value - simplex3d_fractal(vec3(shiftFrag(gl_FragCoord.xy, -1.0,1.0), time) * size)), edgeThresh);
        // value = step(abs(value - simplex3d_fractal(vec3(shiftFrag(gl_FragCoord.xy, 1.0,-1.0), time) * size)), edgeThresh);
        //value = 0.5 + 0.5*value;
        
        // value = abs(dFdx(value));
        
        
        // float valueGrey = smoothstep(0.5,0.7, value) * 0.25;
        
        //value =  smoothstep(0.5,0.75, value);
        
        gl_FragColor = vec4(value * 1.0, value * 0.2, value * 0.5, 1.0);
    }
`)

extend({ PinkNoiseMaterial })

const ShaderObject = ({nSeed, nMousePos}) => {
  const mesh = useRef()
  // console.log(Math.round(nSeed));
  // console.log(nMousePos);

  const { size } = useThree()
  // console.log(size);

  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value += delta;
  })

  return (
    <mesh ref={mesh} >
      <planeGeometry args={[size.width, size.height]} />
      <pinkNoiseMaterial resolution={[size.width, size.height, 1]} mousePos={nMousePos} seed={nSeed} scale={150} />
    </mesh>
  )
}

export default class PinkNoiseShader extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      randomSeed: Math.random() * 500,
      trackingMouse: false,
      mousePos: [Math.random() * window.screen.width, Math.random() * 50],
      isSticky: props.isSticky
    }
  }

  handleNoiseMove = (e) => {
    if(this.state.trackingMouse) {
      let touch = undefined;
      if(e.originalEvent !== undefined) if (e.originalEvent.touches) touch = e.originalEvent.touches[0]
      let pos_x = e.pageX || touch.pageX
      let pos_y = e.pageY || touch.pageY
      if(this.state.isSticky) {
        pos_x = e.clientX || touch.clientX
        pos_y = e.clientY || touch.clientY
      }
      // console.log("mouse location:", e.clientX, e.clientY);
      // console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode)
      // console.log(e)
      // console.log("div location:", e.clientX - e.target.parentNode.parentNode.parentNode.parentNode.offsetLeft, e.clientY - e.target.parentNode.parentNode.parentNode.parentNode.offsetTop);
      let left = pos_x - e.target.parentNode.parentNode.parentNode.parentNode.parentNode.offsetLeft;
      let top = pos_y - e.target.parentNode.parentNode.parentNode.parentNode.parentNode.offsetTop;
      // console.log(e.target.parentNode.parentNode.parentNode.parentNode)
      // console.log("div location:", left, top);
      this.setState({mousePos: [left, top]});
    }
  }

  mouseStart = (event) => {this.setState({trackingMouse: true}, () => event.target.addEventListener("mousemove", this.handleNoiseMove)); }
  mouseExit = (event) => {this.setState({trackingMouse: false}, () => event.target.removeEventListener("mousemove", this.handleNoiseMove)); }

  touchStart = (event) => {this.setState({trackingMouse: true}, () => event.target.addEventListener("touchmove", this.handleNoiseMove)); }
  touchExit = (event) => {this.setState({trackingMouse: false}, () => event.target.removeEventListener("touchmove", this.handleNoiseMove)); }



  render() {
    return (
      <div className="noiseShader" 
      style={{position: "relative", width: "100%", height: "100%", overflow: "hidden", pointerEvents: "auto", zIndex:100}}
      onMouseEnter={this.mouseStart} onMouseLeave={this.mouseExit} 
      onTouchStart={this.touchStart} onTouchEnd={this.touchExit}
      >
        <Canvas
          orthographic={true}
          dpr={window.devicePixelRatio}
        >
          <ShaderObject nSeed={this.state.randomSeed} nMousePos={this.state.mousePos} />
        </Canvas>
      </div>
    );
  }
}
