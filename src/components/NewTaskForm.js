import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code")
  console.log(text, category);

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const newCategories = categories.slice(1)
  const  options = newCategories.map((element) => <option key={uuid()} value={element}>{element}</option>)

  return (
    <form className="new-task-form" onSubmit={(event) => {
      event.preventDefault()
      onTaskFormSubmit({id:uuid(), category, text}) 
      setText("")
    }}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(event) => handleTextChange(event)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
