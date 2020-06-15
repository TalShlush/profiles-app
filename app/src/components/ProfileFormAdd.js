import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './ProfileFormAdd.css'
import ProfileForm from './ProfileForm';
import {connect} from 'react-redux';
import {addNewProfile} from '../actions';

class ProfileFormAdd extends React.Component {
    handleSubmit = (profile) =>{
        this.props.addNewProfile(profile);
    }
    render() {
        return (<ProfileForm handleSubmit={this.handleSubmit} mode="Create"/>);
    }
}

export default connect(null,{addNewProfile})(ProfileFormAdd); 