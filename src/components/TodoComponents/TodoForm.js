import React from 'react';

export default function Todoform(props) {
    const {addTodo, clearCompleted, value, onInputChange} = props;
    
    return(
        <div>
            <input name ='todo' type='text' placeholder='...todo' onChange={onInputChange} value={value}/>
            <button onClick={(e)=> addTodo(e,value)}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}