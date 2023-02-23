import {useState} from 'react'
import { TodoListValue } from '../TodoListValue';

function useTodoList(initialValue: TodoListValue[]){
    const [getTodos, setTodos] = useState(initialValue);

    const addTodo = (formTarget: EventTarget) => {        
        const formData = new FormData(formTarget as HTMLFormElement)
        setTodos([...getTodos, TodoListValue.MapFromForm(getTodos.length,formData)])
    }

    const removeTodo = (todo: TodoListValue) => {
        setTodos([...getTodos.filter((f: TodoListValue) => f !== todo)]);
    }

    const updateTodo = (todo: TodoListValue) => {
        const indexOf = getTodos.findIndex(f => f.id === todo.id);
        if(indexOf > -1){    
            const copy = [...getTodos];
            copy[indexOf] = todo;
            setTodos(copy);
        }
        else{
            throw "Invalid TODO provided to updateTodo"
        }
    }

    return {
        getTodos, addTodo, removeTodo, updateTodo       
    }
}

export {useTodoList}