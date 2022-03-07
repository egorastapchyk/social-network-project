import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>
        <img src={props.avatar}></img>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    {
      id: 1,
      name: 'Gosha',
      imgUrl: 'https://html5css.ru/w3images/avatar2.png',
    },
    {
      id: 2,
      name: 'Chel',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
    {
      id: 3,
      name: 'Lil Pump',
      imgUrl:
        'https://i2.wp.com/jamznet.com/wp-content/uploads/2021/03/Lil-Pump.jpg?resize=500%2C500&ssl=1',
    },
    {
      id: 4,
      name: 'Kashtan',
      imgUrl:
        'https://toppng.com/uploads/preview/user-pro-avatar-scalable-vector-graphics-icon-woman-icon-11553526869tcdfa31pvo.png',
    },
    {
      id: 5,
      name: 'Kykareky',
      imgUrl: 'https://cdn-icons-png.flaticon.com/512/168/168734.png',
    },
    {
      id: 6,
      name: 'Pacavaca',
      imgUrl:
        'https://www.sb.by/upload/resize_cache/slam.image/iblock/34d/355_237_101a9461d51526113595f057e89280f5a/34da280fbed80cfe6dc93ee7098fab6a.jpg',
    },
    {
      id: 7,
      name: 'Chelik',
      imgUrl: 'https://html5css.ru/w3images/avatar2.png',
    },
  ];

  let messagesData = [
    { id: 1, message: 'Hi, Gosha!' },
    { id: 2, message: 'Whatsup?' },
    { id: 3, message: 'Hi, How do you do?' },
    { id: 4, message: 'It was great!' },
    { id: 5, message: 'LOL' },
    { id: 6, message: 'See you tomorrow, my friend!' },
    { id: 7, message: 'I buy a new shirt today.' },
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem
          avatar={dialogsData[0].imgUrl}
          name={dialogsData[0].name}
          id={dialogsData[0].id}
        />
        <DialogItem
          avatar={dialogsData[1].imgUrl}
          name={dialogsData[1].name}
          id={dialogsData[1].id}
        />
        <DialogItem
          avatar={dialogsData[2].imgUrl}
          name={dialogsData[2].name}
          id={dialogsData[2].id}
        />
        <DialogItem
          avatar={dialogsData[3].imgUrl}
          name={dialogsData[3].name}
          id={dialogsData[3].id}
        />
        <DialogItem
          avatar={dialogsData[4].imgUrl}
          name={dialogsData[4].name}
          id={dialogsData[4].id}
        />
        <DialogItem
          avatar={dialogsData[5].imgUrl}
          name={dialogsData[5].name}
          id={dialogsData[5].id}
        />
        <DialogItem
          avatar={dialogsData[6].imgUrl}
          name={dialogsData[6].name}
          id={dialogsData[6].id}
        />
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
        <Message message={messagesData[5].message} />
        <Message message={messagesData[6].message} />
      </div>
    </div>
  );
};

export default Dialogs;
