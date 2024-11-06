import React from "react";

function CategoryFilter({ categories, chosen, handleClick }) {

  const buttonsToDisplay = categories.map((element) => {
    if (element === chosen) {
      return <button key={element} value={element} className="selected" onClick={(event) => handleClick(event)}>{element}</button>
    }
    return <button key={element} value={element} onClick={(event) => handleClick(event)}>{element}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsToDisplay}
    </div>
  );
}

export default CategoryFilter;
