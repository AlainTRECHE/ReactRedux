import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filteredTodosSelector } from "../../store/todoSelectors";
import { deleteTodoAction, toggleTodoAction } from "../../store/todoActions";
import { TodoFilterStore } from "./TodoFilter";

import './styles.css';
import { AddTodoForm } from "./addTodoForm";


function TodoItem ({ todo, onToggle, onDelete }) {
  return(
      <li>
        <label>
          <input type="checkbox"
                 checked={todo.completed}
                 onChange={() => onToggle(todo)} />
                {todo.title}
          <button onClick={() => onDelete(todo)}>X</button>
        </label>
      </li>
  )}
  

export function App({ todos, onToggle, onDelete }) {
  return(
  <><TodoFilterStore />
 <ul>
      {todos.map(todo => <TodoItem
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
        key={todo.id} />)}
    </ul>
    
    <AddTodoForm />
    </>
 )}

 // creation d'une fonction en dehors de mon composant 
 // qui me permet de me connecter au store et de repatir mes actions 
 export default function TodoListStore () {
  const todos = useSelector(filteredTodosSelector)
  const dispatch = useDispatch()
  
  const onToggle = useCallback(todo => {
    dispatch(toggleTodoAction(todo))
  },[/*dispatch*/])

  const onDelete = useCallback(todo => {
    dispatch(deleteTodoAction(todo))
  },[])

  return <App 
    todos={todos}
    onToggle={onToggle}
    onDelete={onDelete}
  />
 }

 /**
export default connect(
  (state) => ({ todos: todosSelector(state) }),
  (dispatch) => ({
    onToggle: todo => dispatch(toggleTodoAction(todo))
  })
  )(App)
**/



