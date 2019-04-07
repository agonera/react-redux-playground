import React from "react";
import { TodoItem } from "./TodoItem";

export class TodoList extends React.Component {
    
    itemToTodoItem = todoItem => {
        const text = todoItem.text;
        const priority = todoItem.priority;
        const key = todoItem.text + todoItem.priority;
        return <TodoItem key={key} text={text} priority={priority}/>;
    };

    render() {
        return (
            <ul>
                {this.props.todoList.map(this.itemToTodoItem)}
            </ul>
        );
    }
}
