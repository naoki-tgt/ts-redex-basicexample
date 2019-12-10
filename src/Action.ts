import { VisibilityFilter,ADD_TODO,SET_VISIBILITY_FILTER,TOGGLE_TODO,ActionTypes } from "./types"

let nextTodoId = 0
export const addTodo = (text : string ) : ActionTypes=> ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter : VisibilityFilter) : ActionTypes => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id : number) : ActionTypes => ({
  type: TOGGLE_TODO,
  id,
})

