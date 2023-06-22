import React from 'react';
import classes from './../Dialogs.module.css';
// import NewMessage from './NewMessage/NewMessage';

const Message = (props) => {
  return (
    <div>
      <div className={classes.message}>{props.message}</div>

      {/* <NewMessage dispatch={props.dispatch} /> */}
    </div>
  );
};

export default Message;
