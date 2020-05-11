import React from 'react';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { getRedioDataFromApiTC, addNewUserTC, toggleModalWindowTC } from './../../Redux/commonReducer';
import SuccessRegisterWindow from './SuccessRegisterWindow';

class RegisterFormContainer extends React.Component {
    componentDidMount() {
        // get data for radio button when component did mount
        this.props.getRedioDataFromApiTC();
    }
    render(){
        return (
            <>
            {/* if people register is successfully - show modal window else - register form */}
            {this.props.toggleModalWindow && <SuccessRegisterWindow hideModal={this.props.toggleModalWindowTC}/>}
            <RegisterForm 
            addNewUserTC={this.props.addNewUserTC} 
            arrayOfRadioData={this.props.arrayOfRadioData}/>
            </>
        )    
    }
}

let mapStateToProps = (state) => {
    return {
        arrayOfRadioData: state.common.arrayOfRadioData,
        toggleModalWindow: state.common.toggleModalWindow
    }
}

export default connect(mapStateToProps, { getRedioDataFromApiTC, addNewUserTC, toggleModalWindowTC })(RegisterFormContainer);