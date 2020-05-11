import React from 'react';
import UsersBlock from './UsersBlock';
import { connect } from 'react-redux';
import { getUsersFromApiTC } from './../../Redux/commonReducer';

class UsersBlockContainer extends React.Component {
    componentDidMount() {
        //get users when component did mount
        this.props.getUsersFromApiTC();
    }
    render(){
        return (
            <UsersBlock 
            totalUsersCount={this.props.totalUsersCount} 
            getUsersFromApiTC={this.props.getUsersFromApiTC} 
            arrayOfUsers={this.props.arrayOfUsers}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        arrayOfUsers: state.common.arrayOfUsers,
        totalUsersCount: state.common.totalUsersCount,
        dummy: state.common.dummy
    }
}

export default connect(mapStateToProps, { getUsersFromApiTC })(UsersBlockContainer);