import React from "react";
import { connect } from "react-redux";
import { UPDATE_TODO_ACTION } from "../../store/todosReducer";

import './styles.css';

function TodoItem ({ todo, onToggle }) {
  return(
      <li>
        <label>
          <input type="checkbox"
                 checked={todo.completed}
                 onChange={() => onToggle(todo)} />
                {todo.title}
         
        </label>
      </li>
  )}

export function App({ todos, onToggle }) {
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
  (state) => ({ todos: state.todos }),
  (dispatch) => ({
    onToggle: todo => dispatch({
      type: UPDATE_TODO_ACTION,
      payload: {...todo, completed: !todo.completed}
    })
  })
  )(App)




