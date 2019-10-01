import React from 'react';

export default function Todo(props) {
    const {todo, onClick} = props;
    const style={
        textDecoration: todo.completed ? 'line-through' : "unset"
    }
    
    return (
       <p style={style} onClick={()=> onClick(todo.id)}>{todo.task}</p>
    )
}