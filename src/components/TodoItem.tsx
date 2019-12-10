import React,{FC} from 'react';

interface IProps {
    onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    text : string;
    completed :boolean;
}

const TodoItem : FC<IProps> = ({onClick,text,completed}) =>(
    <li onClick={onClick}
        style={{textDecoration : completed ? 'line-through' : 'none'}}
     >
        {text}
    </li>
)

export default TodoItem;