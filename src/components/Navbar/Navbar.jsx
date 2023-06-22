import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  // let friendsElement = props.state.sidebarFriendsData.map((friend, index) => (
  //   <SidebarFriendsItem
  //     key={index}
  //     /* the index parameter is needed to remove the error of unique keys */
  //     avatar={friend.imgUrl}
  //     name={friend.name}
  //     id={friend.id}
  //   />
  // ));

  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/settings"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
