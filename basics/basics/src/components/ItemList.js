import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectItem } from "../actions";


class ItemList extends Component {

    renderList() {
        return this.props.items.map((item) => { // produces a new array of items
            return ( // produces an item for the map func
                <div key={item.task}>
                    {item.task}
                    <button onClick={() => this.props.selectItem(item)}>Select</button>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => { // state - all data in the store
    // now we are updating the state
    return { items: state.items }; // === this.props
    // returns an object which is going to show as props inside of the component
};

// via connect() we want to get current list of items from the store using Provider
// connect() passes this current list of items to ItemList component

// using connect() WE GET DATA OUT OF THE STORE
export default connect(
    mapStateToProps,
    { selectItem }
)(ItemList);
// connect will take the second argument {selectItem} and pass it as a prop to our component
// ^ check in render console.log(this.props)
// it also automatically calls dispatch() function to apply the action to change state


//       STORE --------> Provider <---
//      REDUCERS            |        |
//                          |        | tell me about the changes
//                         App       | to the list of items
//                          |        |
//                          |        |
//   ACTION CREATORS --> Connect -----
//     selectItem           |
//                          |
//                      Item List


