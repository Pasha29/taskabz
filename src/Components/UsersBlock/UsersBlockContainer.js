import React from 'react';
import UsersBlock from './UsersBlock';
import { connect } from 'react-redux';
import { getUsersFromApiTC } from './../../Redux/commonReducer';

class UsersBlockContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersFromApiTC();
    }
    // componentDidUpdate(prevProps){
    //     if(this.props.arrayOfUsers !== prevProps.arrayOfUsers) {
    //         console.log('state update');
    //         // this.props.getUsersFromApiTC();
    //     }
    //     else {
    //         console.log('state not update');
    //     }
    // }
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