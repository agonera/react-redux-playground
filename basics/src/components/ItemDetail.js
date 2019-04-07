import React from 'react';
import { connect } from "react-redux";


const ItemDetail = ({ item }) => {
    if (!item) {
        return <div>select an item</div>
    } else {
        return (
            <div>
                <ul>
                    <li>task: {item.task}</li>
                    <li>priority: {item.priority}</li>
                </ul>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return { item: state.selectedItem };
};


export default connect(mapStateToProps)(ItemDetail);
