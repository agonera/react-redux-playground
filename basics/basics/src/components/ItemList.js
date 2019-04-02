import React, { Component } from 'react';
import { connect } from "react-redux";


class ItemList extends Component {
    render() {
        return (
            <div>
                hehehe
            </div>
        );
    }
}

const mapStateToProps = (state) => { // state - all data in the store
    console.log(state);
    return state;
};

// via connect() we want to get current list of items from the store using Provider
// connect() passes this current list of items to ItemList component

export default connect(mapStateToProps)(ItemList);


//       STORE --------> Provider <---
//      REDUCERS            |        |
//                          |        | tell me about the changes
//                         App       | to the list of items
//                          |        |
//                          |        |
//   ACTION CREATORS     Connect -----
//     selectItem           |
//                          |
//                      Item List


