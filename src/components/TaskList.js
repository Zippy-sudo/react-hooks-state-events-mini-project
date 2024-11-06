import React from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid"

function TaskList({ tasks, handleDelete}) {

  const displayTasks = tasks.map((element) => <Task key={uuid()} category={element.category} text={element.text} handleDelete={handleDelete} />)

  return (
    <div className="tasks">
      <ul>
        {displayTasks}
      </ul>
    </div>
  );
}

export default TaskList;
