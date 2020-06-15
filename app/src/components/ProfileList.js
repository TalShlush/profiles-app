import React from 'react';
import ProfileItem from './ProfileItem';
import './ProfileList.css';
import ProfileFormEdit from './ProfileFormEdit';
import {connect} from 'react-redux';
import {getAllProfiles,cancelSelectedProfile} from '../actions'
class ProfileList extends React.Component {
    state = {}
    componentDidMount() {
        this.props.getAllProfiles()
        this.setState({
            isEditOpen:false
        })
    }

    handleEditClick = (profile) => {
        this.setState({selectedProfile:profile,isEditOpen:true})
    }

    handleCloseEdit = () =>{
        this.setState({isEditOpen:false});

        // Handle in case of cancel
        this.props.cancelSelectedProfile();
    }

    renderList = () => {
        return (
            this.props.profiles.map(profile => {
                return <ProfileItem {...profile} handleEditClick={this.handleEditClick}/>
            }))
    }

    renderEditModal = () =>{
        if(!this.state.isEditOpen) return ;
        return <ProfileFormEdit handleCloseEdit={this.handleCloseEdit} open={this.state.isEditOpen} id={this.state.selectedProfile}/>
    }

    render() {
        if (!this.props.profiles.length === 0) return null;

        return (<>
        <div className="profile-list-container">
            {this.renderList()}
        </div>
        {this.renderEditModal()}
        </>);
    }

}
const mapStateToProps = ({profileReducer}) =>{
    return {profiles:profileReducer.profiles}
}

export default connect(mapStateToProps,{getAllProfiles,cancelSelectedProfile})(ProfileList);