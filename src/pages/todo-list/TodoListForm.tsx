import React from "react"

interface ITodoListFormProps{
    addTodo: (formTarget: EventTarget) => void
}

const TodoListForm = ({addTodo } : ITodoListFormProps) =>{

    return (
        <div>
        <form onSubmit={(event: React.FormEvent) => {
            event.preventDefault();
            addTodo(event.target);
        }}>
            <input type="hidden" name="isChecked" value="false" />
            <input name="Value" />
            <button type='submit'>Create</button>
        </form>
    </div>
    )
}

export {TodoListForm}