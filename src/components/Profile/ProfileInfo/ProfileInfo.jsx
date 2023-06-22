import React from 'react';
import classes from './ProfileInfo.module.css';
import trueCheckMark from '../../../assets/images/trueCheckMark.png';
import falseCheckMark from '../../../assets/images/falseCheckMark.png';
import ProfileStatus from './ProfileStatus';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  let contactsItem = Object.entries(profile.contacts);

  return (
    <div>
      {/* <div>
        <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg"></img>
      </div> */}
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />

        <div className={classes.descriptionUser}>
          <span>{profile.fullName}</span>
          <div>
            {profile.lookingForAJob}
            <img
              src={
                profile.lookingForAJob != false ? trueCheckMark : falseCheckMark
              }
              className={classes.checkMark}
            />
          </div>
          <span>{profile.lookingForAJobDescription}</span>
          <span>{profile.aboutMe}</span>
          {contactsItem.map(([key, value], i) => {
            return <span key={i}>{value ? `${key}:${value}` : null}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
