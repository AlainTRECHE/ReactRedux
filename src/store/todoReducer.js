
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
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";


export function todosReducer(state = initialeState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      // retourne un nouveau tableau qui contient tout le state + un nouvel element 
      // avec un nouvel id et les information que l'on lui donnera dans le payload
      return [...state, { id: ++id, completed: false, ...action.payload }] ;
     
    case UPDATE_TODO_ACTION:
      // parcours l'ensemble de nos element et trouve l'element qui sera envoye dans le payload
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, ...action.payload}
        } else { return todo}
      }) 

    case DELETE_TODO_ACTION:
      // parcours chaque element et retourne tous les elements qui ont un id different de celui contenu dans le payload 
      return state.filter(todo => todo.id !== action.payload)

    default:
      return state;
  }
}

