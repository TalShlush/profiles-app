import React from 'react';
import avatarDefault from '../assets/avatar-default.png'
class Image extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        src: props.src,
        error: false,
      };
    }
  
    onError = () => {
      if (!this.state.error) {
        this.setState({
          src: avatarDefault,
          error: true,
        });
      }
    }
  
    render() {
      const { src } = this.state;
      const {src: _1,fallbackSrc: _2,...props} = this.props;
  
      return (
        <img
          style={{width:'3rem',height:'3rem',borderRadius:'50%'}}
          src={src}
          onError={this.onError}
          {...props}
        />
      );
    }
  }

  export default Image;
  