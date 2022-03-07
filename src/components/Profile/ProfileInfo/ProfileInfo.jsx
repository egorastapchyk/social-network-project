import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg"></img>
      </div>
      <div className={classes.descriptionBlock}>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;
