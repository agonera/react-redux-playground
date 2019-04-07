import React from "react";
import { TodoList } from "./TodoList";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
};

const mapDispatchToProps = { getTodoList };

export default connect(mapStateToProps, mapDispatchToProps)(App);
