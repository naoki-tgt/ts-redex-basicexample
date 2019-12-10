export const ADD_TODO = "ADD_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO"

export enum VisibilityFilter {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
}

interface AddTodoAction {
    type :typeof ADD_TODO;
    id :number;
    text :string;
}

export interface SetVisibilityFilterAction {
     type : typeof SET_VISIBILITY_FILTER;
     filter : VisibilityFilter;
 }

 interface ToggleTodoAction {
     type : typeof TOGGLE_TODO;
     id : number;
 }

 export interface Todo {
     text: string;
     id : number;
     completed: boolean;
 }

 export interface ToDoState {
     todos :  Todo[];
     visibilityFilter : VisibilityFilter;
 }

 export type TodoActionType = AddTodoAction | ToggleTodoAction;
 export type ActionTypes = SetVisibilityFilterAction | TodoActionType;

