import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg"></img>
      </div>
      <div>Ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={classes.posts}>
          <div className={classes.item}>Post 1</div>
          <div className={classes.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
