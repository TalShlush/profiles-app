import React from 'react';
import ProfileForm from './ProfileForm';
import {Dialog,DialogContent,DialogTitle, Paper} from '@material-ui/core'; 
import {connect} from 'react-redux';
import {getProfile,editProfile} from '../actions'
import Image from './Image';
class ProfileFormEdit extends React.Component {
  componentDidMount(){
    this.props.getProfile(this.props.id);
  }

  handleSubmit = (profile) =>{
      this.props.handleCloseEdit()
      this.props.editProfile(profile)
    }

    getImageSrc = () =>{
      return `http://graph.facebook.com/${this.props.selectedProfile.fb_id}/picture`
    }

    render(){
      if(!this.props.selectedProfile) return null;
        return (
        <Dialog
            open={this.props.open}
            onClose={this.props.handleCloseEdit}
            fullWidth={true}
            maxWidth={'md'}
          >
            <DialogTitle>Edit Profile {this.props.selectedProfile.name}
              <Image src={this.getImageSrc()}/>
            </DialogTitle>
            <DialogContent>
                <ProfileForm profile={this.props.selectedProfile}
                             handleSubmit={this.handleSubmit}
                             mode="Edit" />
            </DialogContent>
          </Dialog>
          )
    }
}

const mapStateToProps = ({profileReducer})=>{
  return {selectedProfile:profileReducer.selectedProfile}
}

export default connect(mapStateToProps,{getProfile,editProfile})(ProfileFormEdit);