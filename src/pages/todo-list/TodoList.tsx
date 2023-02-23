import React, { useState } from 'react'
import { useTodoList } from './hooks/useTodoList';
import { TodoListForm } from './TodoListForm';
import { TodoListItem } from './TodoListItem';
import { TodoListValue } from './TodoListValue';

const TodoList = () => {
    const {getTodos, addTodo, removeTodo, updateTodo} = useTodoList([
        new TodoListValue(0, false, "test 1"),
        new TodoListValue(1, true, "test 2")
    ]);

    const setChecked = (todo: TodoListValue) =>{
        updateTodo({...todo, isComplete: !todo.isComplete})
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoListForm addTodo={addTodo} />
            <div>
                <ul>
                    {getTodos.map((m: TodoListValue, i:number) => {
                        return <TodoListItem key={m.id} item={m} remove={removeTodo} setChecked={setChecked}/>
                    })}
                </ul>
            </div>
        </div>
    )
}


export{TodoList}