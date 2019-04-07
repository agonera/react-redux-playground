import React, { Component } from 'react';


const TodoList = props => {
    return (
        <ul>
            {props.todoList.map(todo => (
                <li>{todo.text} : {todo.priority}</li>
            ))}
        </ul>
    );
};

export default TodoList;