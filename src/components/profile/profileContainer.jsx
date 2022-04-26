import axios from 'axios';
import React from 'react';
import { Profile } from './profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
    componentDidMount () {
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId ? this.props.match.params.userId : this.props.match.params.userId=2}`)
        .then(res => {
          this.props.setUserProfile(res.data)
        })
    };
   
    render () {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    );
 }
}

const mapStateToProps = (state) => {
return {
    profile:state.profilePage.profile
}
}

let urlComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(urlComponent)
