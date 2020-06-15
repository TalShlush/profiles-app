import React from 'react';
import {AppBar} from '@material-ui/core';
import ProfileFormAdd from './ProfileFormAdd';

class Header extends React.Component {
    render(){
        return (<AppBar position="sticky" color="default">
            <ProfileFormAdd />
        </AppBar>)
    }
}

export default Header;