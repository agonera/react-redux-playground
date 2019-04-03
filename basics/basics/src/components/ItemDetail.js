import React from 'react';
import { connect } from "react-redux";

const ItemDetail = props => {

console.log(props);
    return (
        <div>

        </div>
    );
};

const mapStateToProps = state => {
    return {item: state.selectedItem};
};

export default connect(mapStateToProps)(ItemDetail);
