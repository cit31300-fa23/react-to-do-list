import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "src/components/Todo/Todo";
import FilterButton from "src/components/FilterButton/FilterButton";
import Form from "src/components/Form/Form";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);
console.log(FILTER_NAMES);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    //alert(name);
    const newTask = { id: `todo-${nanoid()}`, name, completed: false};
    // Create a new array of tasks that includes the newTask
    setTasks([...tasks, newTask]); // Spread syntax
  }

  function toggleTaskCompleted(id) {
    // console.log(tasks[0]);
    const updatedTasks = tasks.map( (task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    } )
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter( (task) => task.id != id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name:newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  //const taskList = props.tasks?.map((task) => task.name );
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => <Todo 
    id={ task.id }
    name={ task.name }
    completed={ task.completed }
    key={ task.id }
    toggleTaskCompleted={ toggleTaskCompleted }
    deleteTask={ deleteTask }
    editTask={ editTask }
  /> );

  // Count number of tasks and create a string to show the number on the UI
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={ setFilter }
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={ addTask } />
      <div className="filters btn-group stack-exception">
        { filterList }
      </div>
      <h2 id="list-heading">{ headingText }</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          { taskList }
      </ul>
    </div>
  );
}  

export default App;