import React from 'react';
import { Profile } from './profile';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import { getProfile, getStatus,updateStatus } from './../../redux/reducers/profileReducer';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId){
            userId=this.props.authId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
            this.props.getProfile(userId)
            this.props.getStatus(userId)
    };
    render() {
        return (
            <Profile  profile={this.props.profile} updateStatus={this.props.updateStatus} status={this.props.status} />
        );
    }
}

const mapStateToProps = (state) => {
                                                                            
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export const ProfileContainerComponent =
 compose(
    connect(mapStateToProps, { getProfile,getStatus,updateStatus }),
    withRouter,
 ) (ProfileContainer) 
