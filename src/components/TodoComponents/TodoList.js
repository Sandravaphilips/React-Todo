// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from "./Todo";

export default function TodoList({todos, onClick}) {
    
    return (
       <div>
           {todos.map((todo) => {
               
               return <Todo todo={todo} key={todo.id} onClick={onClick}/>
            })}
       </div>
    )
}