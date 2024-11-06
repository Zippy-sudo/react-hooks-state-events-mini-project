import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [chosen, setChosen] = useState("All");
  const [newTaskList, setNewTaskList] = useState(tasks)

  function handleClick(e) {
    const a = e.target.value;
    setChosen(e.target.value);
    setNewTaskList(tasks.filter((element) => {
      if (a === "All") return true;
      return element.category === a;
    }))
  }

  function handleDelete(e) {
    const b = e.target.value;

    setNewTaskList(newTaskList.filter((element) => {
      return b !== element.text
    }))

    setTasks(tasks.filter((element) => {
      return b !== element.text
    }))
  }

  function onTaskFormSubmit(newObj) {
    setNewTaskList([...newTaskList, newObj]);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} chosen={chosen} handleClick={handleClick} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={newTaskList} chosenState={chosen} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
