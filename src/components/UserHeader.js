import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        console.log(this.props.user);
        return (
            
            <div>User Header</div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.userDetails};
}
export default connect(null, {fetchUser}) (UserHeader);