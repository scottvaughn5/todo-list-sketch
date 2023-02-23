import React from "react";
import { TodoListValue } from "./TodoListValue";

interface ITodoListItemProps{
    item: TodoListValue,
    remove: (todo: TodoListValue) => void,
    setChecked:(todo: TodoListValue) => void,
}

const TodoListItem = ({item, remove, setChecked}: ITodoListItemProps) =>{
    return (
    <li>
        <input type="checkbox" checked={item.isComplete} onChange={() => setChecked(item)} />
        <span>{item.Value}</span>
        <button onClick={() => remove(item)}>X</button>
    </li>);
}

export {TodoListItem}