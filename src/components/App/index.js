import React from "react";
import { connect } from "react-redux";

import './styles.css';

function TodoItem ({todo, onToggle}) {
  return(
      <li>
        <label>
          <input type="checkbox"
                 checked={todo.completed}
                 onChange={() => onToggle(todo)} >
            {todo.title}
          </input>
        </label>
      </li>
  )}

function App({todos}) {
  return(
 <ul>                                                                                                                                  
  {todos.map(todo => <TodoItem 
    todo={todo}
    onToggle={onToggle}
    key={todo.id}
  />)}
 </ul>
 )}

export default connect(
  (state) => {
    return({
    todos: state.todos
  })}
  )(App)




