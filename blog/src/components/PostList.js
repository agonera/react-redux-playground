import React from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
    componentDidMount() {
    }

    render() {
        return (<div>
            Post list
        </div>)
    }
}

const mapDispatchToProps = {
    fetchPosts
};

export default connect(null, mapDispatchToProps)(PostList);