import { combineReducers, Reducer } from 'redux';
import {
    Todo, ToDoState, ADD_TODO, VisibilityFilter
    , SET_VISIBILITY_FILTER, TOGGLE_TODO, ActionTypes, SetVisibilityFilterAction, TodoActionType
} from './types'

const todoReducer: Reducer<Todo[], TodoActionType> = (
    state: Todo[] = [], action: TodoActionType
): Todo[] => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: action.id, completed: false }];

        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id == action.id ? { ...todo, completed: !todo.completed } : todo);

        default:
            return state;

    }
}

const VisibilityFilterReducer: Reducer<VisibilityFilter, SetVisibilityFilterAction> = (
    state: VisibilityFilter = VisibilityFilter.SHOW_ALL, action: SetVisibilityFilterAction
): VisibilityFilter => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
}

export default combineReducers({
    todos : todoReducer,
    visibilityFilter : VisibilityFilterReducer
});
