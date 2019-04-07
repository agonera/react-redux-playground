import React, { Component } from 'react';
import TodoList from './TodoList'


// IDEA: split fetching data and presenting it
// a container does data fetching and then renders its corresponding sub-component


class TodoListContainer extends Component {
    state = { todoList: [] };

    componentDidMount() {
        fetchTodoList(todoList =>
            this.setState({ todoList: todoList }));
    }

    render() {
        return <TodoList todoList={this.state.todoList}/>;
    }
}

export default TodoListContainer;