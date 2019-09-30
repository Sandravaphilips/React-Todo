import React from 'react';

export default function Todoform(props) {
    const {addTodo, clearCompleted} = props;
    return(
        <div>
            <input name ='todo' type='text' placeholder='...todo' />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}