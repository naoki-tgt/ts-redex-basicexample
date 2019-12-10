import React ,{FC} from 'react'
import {Todo} from '../types';
import TodoItem from './TodoItem'

interface IProps {
    todos : Todo[];
    toggleTodo : (id : number) => void;
}


const TodoList : FC<IProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList;