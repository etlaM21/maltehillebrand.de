import React from "react"
import "./roundbutton.css"

const RoundButton = ({ id, specialID, specialType, extraClass, onClick, text, fill, inverted, hover, IconLeft, IconRight, rightIconHidden}) => {
  let theClass = "roundbutton";
  if (fill) theClass += " fill"
  if (inverted) theClass += " inverted";
  if (!hover) theClass += "  noHover";
  if(extraClass !== undefined) theClass += " " + extraClass;
  let theContentClass = "buttonContent";
  if(rightIconHidden === true) theContentClass += " rightIconHidden";
  if(IconLeft === undefined && IconRight === undefined){
    return (
      <button key={id} id={specialID} type={specialType} onClick={onClick} className={theClass}>
        <div className={theContentClass}>
          <p>{text}</p>
        </div>
      </button>
    )
  }
  else if(IconLeft === undefined && IconRight !== undefined){
    return (
      <button key={id} id={specialID} onClick={onClick} className={theClass}>
      <div className={theContentClass}>
        <p>{text}</p>
        {< IconRight className="rightIcon"/>}
        </div>
      </button>
    )
  }
  else if(IconLeft !== undefined && IconRight === undefined){
    return (
      <button key={id} id={specialID} onClick={onClick} className={theClass}>
        <div className={theContentClass}>
          {< IconLeft className="leftIcon" />}
          <p>{text}</p>
        </div>
      </button>
    )
  }
  else if(IconLeft !== undefined && IconRight !== undefined){
    return (
      <button key={id} id={specialID} onClick={onClick} className={theClass}>
        <div className={theContentClass}>
          {< IconLeft className="leftIcon"/>}
          <p>{text}</p>
          {< IconRight className="rightIcon"/>}
        </div>
      </button>
    )
  }
}

export default RoundButton