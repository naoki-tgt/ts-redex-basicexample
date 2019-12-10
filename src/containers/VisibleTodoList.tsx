import { connect } from 'react-redux';
import { toggleTodo } from '../Action';
import TodoList from '../components/TodoList';
import { VisibilityFilter,Todo , ToDoState } from '../types';
import { Dispatch} from 'redux';

const getVisibleTodos = (todos : Todo[], filter : VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state : ToDoState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch : Dispatch) => ({
  toggleTodo: (id : number) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)