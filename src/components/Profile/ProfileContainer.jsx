import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';

import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from '../../redux/profile-reducer';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withNavigate } from '../../hoc/withNavigate';

import Profile from './Profile';

const ProfileComponent = (props) => {
  // debugger;
  const { userId = props.authorizedUserId } = useParams();
  if (!userId) {
    props.navigate('/login');
  }
  useEffect(() => {
    props.getUserProfile(userId);
    props.getUserStatus(userId);
  }, []);

  return (
    <div>
      <Profile
        {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

let mapStateToProps = ({ profilePage: { profile, status }, auth }) => {
  return {
    profile,
    status,
    authorizedUserId: auth.userId,
    isAuth: auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withNavigate,
  withAuthRedirect
)(ProfileComponent);
