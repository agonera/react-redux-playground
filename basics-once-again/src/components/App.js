import React from "react";
import { connect } from "react-redux";

import { TodoList } from "./TodoList";
import { getTodoList } from "../actions";


const TEST_LIST = [
    { text: 'a', priority: '1' },
    { text: 'b', priority: '3' },
    { text: 'c', priority: '2' },
];

export class App extends React.Component {
    componentDidMount() {
        this.props.getTodoList(TEST_LIST);
    }

    render() {
        return (
            <div>
                <TodoList todoList={this.props.todoList}/> {}
            </div>
        );
    }
}

// takes state and returns props for a component:
const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
};

const mapDispatchToProps = { getTodoList };

export default connect(mapStateToProps, mapDispatchToProps)(App);
