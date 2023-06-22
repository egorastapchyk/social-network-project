import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {
  const state = props.dialogsPage;
  const dialogsElement = state.dialogsData.map((dialog, index) => (
    <DialogItem
      key={index}
      /* the index parameter is needed to remove the error of unique keys */
      avatar={dialog.imgUrl}
      name={dialog.name}
      id={dialog.id}
    />
  ));

  const messagesElement = state.messagesData.map((message, index) => (
    <Message
      key={index}
      /* the index parameter is needed to remove the error of unique keys */
      message={message.message}
      dispatch={props.dispatch}
    />
  ));

  // let newMessageText = state.newMessageText;

  // debugger;
  const addNewMessage = (value) => {
    props.sendMessage(value.newMessageText);
  };

  // if (!props.isAuth) return <Navigate to="/login" />;
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElement}</div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <div className={classes.newMessage}>
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
