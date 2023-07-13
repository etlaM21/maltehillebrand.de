import React, { useState, useEffect  } from 'react'
import RoundButton from "../RoundButton"
import "./filter.css"
import PlusSign from '../icons/PlusSign'
import MinusSign from '../icons/MinusSign'
import FilterFunnel from '../icons/FilterFunnel'
import Star from '../icons/Star'
import Graphic from '../icons/Graphic'
import Motion from '../icons/Motion'
import Experience from '../icons/Experience'

import PinkNoiseShader from "../PinkNoiseShader"

const Filter = (categories, filterFunction) => {
  const [selectedFilters, setSelectedFilters] = useState(["Highlight"]);

  const expandFilterSelection = () => {
    let filterSelectDiv = document.getElementById("filter-expand");
    let filterSelectButton = document.getElementById("filterMenu");
    if(filterSelectDiv.classList.contains("closed")) {
      filterSelectDiv.classList.remove("closed");
      filterSelectButton.classList.add("active");
    }
    else {
      filterSelectDiv.classList.add("closed");
      filterSelectButton.classList.remove("active");
    }
  }

  const removeSelectedFilter = (cat) => {
    const newFilters = selectedFilters;
    const index = newFilters.indexOf(cat);
    if (index > -1) { // only splice array when item is found
      newFilters.splice(index, 1); // 2nd parameter means remove one item only
    }
    setSelectedFilters([...newFilters]); // Spreading the old Array into a new one to force re-render: https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render
    applyFilter();
  }

  const addSelectedFilter = (cat) => {
    const newFilters = selectedFilters;
    newFilters.push(cat);
    setSelectedFilters([...newFilters]); // Spreading the old Array into a new one to force re-render: https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render
    applyFilter();
  }

  const applyFilter = () => {
    /* ISOTOPE FILTERING
    https://isotope.metafizzy.co/filtering.html

    // filter .metal items
    $grid.isotope({ filter: '.metal' });

    // filter .alkali OR .alkaline-earth items
    $grid.isotope({ filter: '.alkali, .alkaline-earth' });

    // filter .metal AND .transition items
    $grid.isotope({ filter: '.metal.transition' });

    // show all items
    $grid.isotope({ filter: '*' });
    */
    if(selectedFilters.length === 0) categories.filterFunction("*")
    else {
      let tempFilters = selectedFilters;
      // console.log(tempFilters);
      let isHighlightOnly = tempFilters.includes("Highlight");
      let filter = "";
      if(tempFilters.length === 1 && isHighlightOnly){ // Only Highlight is selected
        filter += "." + tempFilters[0];
      }
      else {
        if(isHighlightOnly) { // We can remove the highlight tag if we know it is in highlight mode
          const index = tempFilters.indexOf("Highlight");
          if (index > -1) { // only splice array when item is found
            tempFilters.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        for(let i = 0; i < tempFilters.length; i++){
          if(tempFilters[i] !== "Highlight"){
            filter += "." + tempFilters[i];
            if(isHighlightOnly) filter += ".Highlight";
            if(i + 1 < tempFilters.length){
              filter += ", "
            }
          }
        }
      }
      // console.log(filter);
      categories.filterFunction(filter);
    }
  }

  // Header height transition
  

  const [isClosed, setIsClosed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState();

  const filterScrollReveal = (event) => {
    let scrollPos = event.target.scrollingElement.scrollTop;
    if(document.getElementById("filter") !== null){
      if(scrollPos > headerHeight * 1.5 && isClosed === false) {document.getElementById("filter").classList.remove("maximized"); document.getElementById("filter").classList.add("minified"); setIsClosed(true)};
      if(scrollPos < headerHeight * 1.5 && isClosed === true) {document.getElementById("filter").classList.add("maximized"); document.getElementById("filter").classList.remove("minified"); setIsClosed(false)}; 
    }};

  window.addEventListener("scroll", filterScrollReveal);

  useEffect(() => {
    setHeaderHeight(document.getElementsByTagName("header")[0].getBoundingClientRect().height);

    return () => window.removeEventListener("scroll", filterScrollReveal);
  }, []);

  return (
    <div id="filter" className="maximized">
      <div className="filter-menu">
        <div className="filter-wrapper">
          <div className="filter-buttons">
          {categories.categories.map((cat, id) => {
            if(selectedFilters.includes(cat)){
              let iconL = undefined;
              if(cat === "Highlight") iconL = Star;
              if(cat === "Graphic") iconL = Graphic;
              if(cat === "Motion") iconL = Motion;
              if(cat === "Experience") iconL = Experience;

              let displayText = cat;
              if(cat === "Highlight") displayText = "Only Highlights";
              return (
                <RoundButton key={id} extraClass="filtered" onClick={() => removeSelectedFilter(cat)} text={displayText} fill={false} inverted={false} hover={true} IconLeft={iconL} IconRight={MinusSign} rightIconHidden={true}/>
              )
            }
            else {
              return null;
            }
            })}
            <RoundButton key={0} specialID="filterMenu" onClick={() => expandFilterSelection()} text={"FILTER"} fill={true} inverted={false} hover={true} IconRight={FilterFunnel} rightIconHidden={false}/>
            </div>
          </div>
          <PinkNoiseShader isSticky={true}/>
        </div>
        <div id="filter-expand" className="closed">
          <div className="filter-wrapper">
            <div className="filter-buttons">
            <RoundButton specialID="filterHelper" key={0} text={"Select categories to be displayed"} fill={false} inverted={true} hover={false}/>
              {categories.categories.map((cat, id) => {
                  if(!selectedFilters.includes(cat)){
                    let iconL = undefined;
                    if(cat === "Highlight") iconL = Star;
                    if(cat === "Graphic") iconL = Graphic;
                    if(cat === "Motion") iconL = Motion;
                    if(cat === "Experience") iconL = Experience;

                    let displayText = cat;
                    if(cat === "Highlight") displayText = "Only Highlights";
                  return (
                    <RoundButton key={id} onClick={() => addSelectedFilter(cat)} text={displayText} fill={true} inverted={true} hover={true} IconLeft={iconL} IconRight={PlusSign} rightIconHidden={true} f/>
                  )
                }
                else {
                  return null;
                }
              })}
            </div>  
          </div>
        </div>
    </div>
  )
}

export default Filter