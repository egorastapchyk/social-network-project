import React from 'react';
import { sendMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: (newMessageText) => {
//       dispatch(sendMessageActionCreator(newMessageText));
//     },
//   };
// };

// the compose function reads from bottom to top
export default compose(
  connect(mapStateToProps, sendMessage),
  withAuthRedirect
)(Dialogs);
