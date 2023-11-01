import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "src/components/Todo/Todo";
import FilterButton from "src/components/FilterButton/FilterButton";
import Form from "src/components/Form/Form";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    //alert(name);
    const newTask = { id: `todo-${nanoid()}`, name, completed: false};
    // Create a new array of tasks that includes the newTask
    setTasks([...tasks, newTask]); // Spread syntax
  }

  //const taskList = props.tasks?.map((task) => task.name );
  const taskList = tasks.map((task) => <Todo 
    id={ task.id }
    name={ task.name }
    completed={ task.completed }
    key={ task.id }
  /> );

  // Count number of tasks and create a string to show the number on the UI
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={ addTask } />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{ headingText }</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          { taskList }
          {/* <Todo name="Eat" completed={ true } id="todo-0" />
          <Todo name="Sleep" completed={ false } id="todo-1" />
          <Todo name="Repeat" completed={ false } id="todo-2" /> */}
      </ul>
    </div>
  );
}  

export default App;