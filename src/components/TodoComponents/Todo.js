import React from 'react';

export default function Todo({todos}) {
    return (
       <div>
           {todos.map(todo =>
                <p key={todo.id}>{todo.task}</p>
            )}
       </div> 
    )
}