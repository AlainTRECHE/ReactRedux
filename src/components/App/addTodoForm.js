import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../store/todoActions";

export function AddTodoForm () {
  const dispatch = useDispatch()
  // useRef est comme une « boîte » qui pourrait contenir une valeur modifiable dans sa propriété .current.(React doc)
  const input = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addTodoAction(input.current.value))
    input.current.value = ""
    input.current.focus()
  }

    return(
        <form onSubmit={handleSubmit}>
          <input className="task" type="text" placeholder="Tâche" ref={input} />
          <button className="task-submit">Ajouter</button>
        </form>
    )
}
