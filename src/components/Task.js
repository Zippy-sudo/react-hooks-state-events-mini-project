import React from "react";

function Task({category, text, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" value={text} onClick={(event) => handleDelete(event)}>X</button>
    </div>
  );
}

export default Task;
