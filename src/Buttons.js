import React from "react";

const Buttons = ({ toggleFilterFunc, highlightMode, toggleFilterHighlightFunc, filteredCategories, categories }) => {
  let highlightState = "";
  if (highlightMode) highlightState = "active";
  return (
    <>
      <div className="d-flex justify-content-center">
        {categories.map((Val, id) => {
          let activeFilter = false;
          let state = "";
          filteredCategories.forEach(filterCat => {
            if (Val === filterCat) activeFilter = true;
          });
          if (activeFilter) state = "active";
          if (Val !== "Highlight") {
            return (
              <button
                onClick={() => toggleFilterFunc(Val)}
                key={id}
                className={state}
              >
                {Val}
              </button>
            );
          }
          return ("");
        })}

        <button
          onClick={() => toggleFilterHighlightFunc()}
          className={highlightState}
        >
          Show only HIGHLIGHTS
        </button>
      </div>
    </>
  );
};

export default Buttons;

