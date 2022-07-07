import React from "react";
import { connect } from "react-redux";
import { todosSelector } from "../../store/selectors";
import { UPDATE_TODO_ACTION } from "../../store/reducer";

import './styles.css';
import { toggleTodoAction } from "../../store/action";

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
  (state) => ({ todos: todosSelector(state) }),
  (dispatch) => ({
    onToggle: todo => dispatch(toggleTodoAction(todo))
  })
  )(App)




