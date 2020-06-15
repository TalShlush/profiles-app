
import React from 'react';
import { TextField, Button } from '@material-ui/core';

class ProfileForm extends React.Component {

    state={};
    
    initState=()=>{
        this.setState({
            name:"",
            bio:"",
            fb_id:""
        }) 
    }

    componentDidMount() {
        if (this.props.profile) {
            const {name,bio,fb_id,id} = this.props.profile;
            this.setState({name,bio,fb_id,id})
        } else{
            this.initState()
        }
    }
    
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleClick=()=>{
        this.props.handleSubmit(this.state);
        this.initState();
    }

    render() {
        let {name,bio,fb_id} = this.state;
        return (
        <form className={`form-container ${this.props.mode === 'Create' ? 'form-add' : 'form-edit'}`} noValidate autoComplete="off">
            <TextField onChange={this.onChange} name="name" value={name} label="Name" />
            <TextField onChange={this.onChange} name="bio" value={bio} label="Bio" />
            <TextField onChange={this.onChange} name="fb_id" value={fb_id} label="Facebook id" />
            <Button onClick={this.handleClick} variant="contained" color="primary"> {this.props.mode} </Button>
        </form>)
    }
}


export default ProfileForm;