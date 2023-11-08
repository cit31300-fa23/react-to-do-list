# React To Do App

Built based on [the MSN tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)

## v.1 - Setup
* `npx create-react-app react-to-do`
* `cd react-to-do/src`
* `rm -- App.test.js App.css logo.svg reportWebVitals.js setupTests.js`
* Copy starter code for App.js and paste into `src/App.js`
* Copy starter code for index.css and paste into `src/index.css`
* Remove reportWebVitals references from `src/index.js`
* Update `<title>` in `public/index.html`
* `npm start` Review layout and discuss separate React components

## v.2 - Build a Todo Component
* `touch jsconfig.json` at root of project
* Add contents to `jsconfig.json`
* `mkdir src/components`
* `mkdir src/components/Todo`
* `touch src/components/Todo/Todo.js`
* Copy a single `<li>` from `App.js` to `Todo.js`
* Add import in `App.js`
* Replace all `<li>` with instances of `<Todo />`
* `npm start` - note that all Todos are showing the same name
* Add `name` property to each instance of Todo in `App.js`
* Implement `props` in `Todo.js`
* Show difference in browser
* Add `completed` property to each instance of Todo in `App.js`
* Implement `props.completed` in `Todo.js`
* Add `id` property to each instance of Todo in `App.js`
* Implement `props.id` in `Todo.js`

## v.3 - Using Data
* Add `DATA` element to `index.js` and pass to `App` component
* Add `console.log` statement in `App.js` to show the data passed to the component
* Add `taskList` to `App.js`
* Replace 3 `<Todo />` elements with `taskList`
* Update `taskList` to render elements of `<Todo />` with props
* Note warning in browser console about unique keys
* Update `taskList` to include a unique key for each

## v.4 - Adding Form and FilterButton Components
* `mkdir src/components/Form src/components/FilterButton`
* `touch src/components/Form/Form.js src/components/FilterButton/FilterButton.js`
* Add contents for Form and FilterButton
* Import Form and FilterButton into `App.js`

## v.5 - Handling Form Submission
* Add `handleSubmit()` function to `Form.js`
* Discuss **callbacks** as a way to hand information from an "employee" component up the chain to a "boss" component
* Add `addTask()` to `App.js`
* Pass `addTask()` as prop to `Form`
* Update Form's `handleSubmit()` to use the function
* Import useState into `Form` and add a `name` state
* Add a `value` to the `input` field in the form
* Add a `handleChange()` function to the `Form`, and add it to the `input` field in the form
* Update `handleSubmit()` to pass the value of `name` to the `App`
* Add `useState` and a `tasks` state to `App.js`
* Update `Form` `taskList` to use the tasks from state
* Update `Form` `addTask()` to append a new task to the `tasks` list stored in state
* Test form; every task added has the same ID (bad!)
* `npm install nanoid`
* Add `nanoid` to `App.js`
* Run app, show ID in React dev tools

## v.6 - Counting Tasks
* Add `headingText` to `App.js`
* Use `headingText` in return

## v.7 - Completing Tasks
* Add `toggleTaskCompleted()` to `App.js`
* Update `taskList` to pass `toggleTaskCompleted` as a prop to each `Todo` instance
* Add an `onChange()` handler to the checkbox in the `Todo.js`
* Run app; show that unchecking the box does not modify the state in React
* Update `toggleTaskCompleted()` in `App.js`
* Run app again

## v.8 - Deleting Tasks
* Add `deleteTask()` method in `App.js`
* Add callback prop to the `Todo` instances created in `App.js`
* Add `onClick` on Delete button in `Todo.js`
* Run app; "deleted" tasks should have the id logged in the console
* Update `deleteTask()` in `App.js`

## v.9 - Editing Tasks
* Add `editTask()` method in `App.js`
* Pass `editTask()` as a prop in the Todo component
* Add `useState` to Todo and set a state variable for `isEditing`
* Add view templates
* Put in conditional rendering in the body
* Add onClick to the Edit and Cancel buttons
* Add state variable to track name (similar to what we did in Form.js)
* Add handleChange() function
* Update input field
* Add handleSubmit() function
* Update `form` tag