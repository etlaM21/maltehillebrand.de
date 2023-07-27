import React from 'react';
import Isotope from "isotope-layout";
import packery from 'isotope-packery';
import "./masonry.css";
import RoundButton from "../RoundButton"
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const Masonry = ({elements, filterKey}) => {        
    // ISOTOPE AND REACT JS BY https://stackoverflow.com/a/58446038
    // init one ref to store the future isotope object
    const isotope = React.useRef();
    // store the filter keyword in a state
    // const [filterKey, setFilterKey] = React.useState("*");

    // initialize an Isotope object with configs
    React.useEffect(() => {
        isotope.current = new Isotope(".grid", {
            percentPosition: true,
            itemSelector: '.grid-item',
            layoutMode: "packery",
            packery: {
                columnWidth: '.grid-sizer',
                gutter: 0
            }
        });
        isotope.current?.arrange();
        // cleanup
        return () => isotope.current?.destroy();
    }, []);

    // handling filter key change
    React.useEffect(() => {
        if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
        // else isotope.current?.arrange({ filter: `.${elements.filterKey}` });
        else isotope.current?.arrange({ filter: filterKey });
    }, [filterKey]);

    // const handleFilterKeyChange = (key) => setFilterKey(key);


    
    // destructuring props
    return (
        <div className="grid">
            <div className="grid-sizer"></div>
            {elements.map((elm ,id) => {
                let extraWidthClass = "";
                if(elm.scale === 2) extraWidthClass = "width2 ";
                let classUsed = "grid-item " + extraWidthClass;
                for (let i = 0; i < elm.tags.length; i++) {
                    classUsed += " " + elm.tags[i];
                }
                if (elm.type === "image" || elm.type === "video") {
                    return (
                        <Link to={"/gallery/" + elm.galleryID + "/" + elm.galleryIndex} relative="path" key={elm.id}>
                            <div className={classUsed} key={elm.title}>
                                <Loader />
                                <div className="grid-item-desc">
                                    <div className="grid-item-desc-content">
                                        <RoundButton text={elm.title} fill={true} inverted={true} hover={false} />
                                        <RoundButton text={elm.subtitle} fill={false} inverted={true} hover={false} />
                                    </div>
                                </div>
                                { elm.type === "image" ?
                                <img src={elm.src} alt={elm.title} onLoad={(event) => {
                                    let img = event.target;
                                    if(img.width >= img.height) event.target.classList.add("horizontal");
                                    isotope.current?.arrange();
                                    event.target.parentNode.parentNode.getElementsByClassName("loader")[0].style.display = "none";
                                }}/>
                                :  <video src={elm.src} alt={elm.title} onLoadedData={(event) => {
                                    let vid = event.target;
                                    if(vid.videoWidth >= vid.videoHeight) event.target.classList.add("horizontal");
                                    vid.defaultMuted = true; vid.muted = true;
                                    isotope.current?.arrange();
                                    event.target.parentNode.parentNode.getElementsByClassName("loader")[0].style.display = "none";
                                }} autoPlay={true} loop={true} muted={true} playsInline={true} />
                                }
                                
                            </div>
                        </Link>
                    );
                }
                else {
                    console.error("Couldn't find type in workdata for element #", id);
                    return null;
                }
            })}
        </div>

    );
};
export default Masonry