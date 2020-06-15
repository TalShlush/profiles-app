
import React from 'react';
import {Paper,Button} from '@material-ui/core';

class ProfileItem extends React.Component {
    handleEditClick = () =>{
        this.props.handleEditClick(this.props.id);
    }

    render() {
        return (
        <Paper className="profile-item-container" id={this.props.id}>
            <div className="profile-item-name"> {this.props.name}</div>
            <Button className="profile-item-button" variant="contained" color="primary" onClick={this.handleEditClick}>Edit</Button>
        </Paper>
        )
    }
}

export default ProfileItem;