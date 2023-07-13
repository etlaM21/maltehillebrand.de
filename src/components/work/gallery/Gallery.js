import React from 'react'
import "./gallery.css"
import RoundButton from '../../RoundButton'
import { Link } from 'react-router-dom';
import ArrowRight from '../../icons/ArrowRight';
import Magnifying from '../../icons/Magnifying';


const Gallery = (props) => {
    let object = props.object;
    let nIndex = parseInt(props.index);
    let backIndex = nIndex - 1;
    if(backIndex < 0) backIndex = props.object.assets.length - 1;
    let forwardIndex = nIndex + 1;
    if(forwardIndex > props.object.assets.length - 1) forwardIndex = 0;
    return (
      <div id="lb-gallery">
          <RoundButton specialID={"lb-gallery-title"} text={object.name} fill={true} inverted={true} hover={false} />
          <Link to={"/"} relative="path"><RoundButton specialID={"lb-gallery-close"} text={"X"} fill={true} inverted={true} hover={true} /></Link>
          <div id="lb-gallery-content">
            { object.assets[props.index].type === "img" ?
              <img src={object.assets[props.index].src} alt={object.assets[props.index].name} />
              : <video src={object.assets[props.index].src} autoPlay loop controls/>
            }
          </div>
          <RoundButton specialID={"lb-gallery-year"} text={object.assets[props.index].year} fill={true} inverted={false} hover={false} />
          <RoundButton specialID={"lb-gallery-description"} text={object.assets[props.index].name} fill={true} inverted={false} hover={false} />
          { object.projectlink !== null ? 
          <Link to={"/projects#" + object.projectlink} relative="path"><RoundButton specialID={"lb-gallery-projectlink"} text="More about this project" fill={true} inverted={true} hover={true} IconLeft={Magnifying} IconRight={ArrowRight} rightIconHidden={true}/> </Link>:
            <></>
          }
          <div id="lb-gallery-controls">
          <Link to={"../" + backIndex} relative="path"><RoundButton specialID={"lb-gallery-controls-left"} text={"<"} fill={false} inverted={true} hover={true} /></Link>
          <Link to={"../" + forwardIndex} relative="path"><RoundButton specialID={"lb-gallery-controls-right"} text={">"} fill={false} inverted={true} hover={true} /></Link>
          </div>
      </div>
    )
}

export default Gallery;