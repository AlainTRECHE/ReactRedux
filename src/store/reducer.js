
let id = 2;

export const initialeState = [
  {
    id: 1,
    title: "Faire un truc",
    completed: false,
  },
  {
    id: 2,
    title: "Faire un autre truc..",
    completed: true,

  },
];

export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";


export function todosReducer(state = initialeState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { id: ++id, completed: false, ...action.payload }] ;
     
    case UPDATE_TODO_ACTION:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, ...action.payload}
        } else { return todo}
      }) 

    default:
      return state;
  }
}
