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