
import React from 'react'
import Masonry from "./Masonry";
import Filter from "./Filter";
import "./work.css";

const Work = ({ elements, categories }) => {
    const [filterKey, setFilterKey] = React.useState(".Highlight");

    const handleFilterKeyChange = (key) => setFilterKey(key);
  return (
    <div id="work">
        <Filter categories={categories} filterFunction={handleFilterKeyChange}/>
        <Masonry elements={elements} filterKey={filterKey} />
    </div>
  )
}

export default Work