import React from 'react';
import { Profile } from './profile';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import { getProfile } from './../../redux/reducers/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
    componentDidMount() {
            this.props.getProfile(this.props.match.params.userId)
    };
    render() {
        return (
            <Profile  profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state) => {
                                                                            
    return {
        profile: state.profilePage.profile,
        myProfileId: state.auth.userId,
    }
}

export const ProfileContainerComponent =
 compose(
    connect(mapStateToProps, { getProfile }),
    withRouter,
    withAuthRedirect
 ) (ProfileContainer) 
