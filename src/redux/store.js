import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { friendsReducer } from './friends-reducer';

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          imgUrl: 'https://html5css.ru/w3images/avatar2.png',
          message: 'Hi, how are you?',
          likesCount: '5 ❤️',
        },
        {
          id: 2,
          imgUrl: 'https://html5css.ru/w3images/avatar2.png',
          message: 'It`s my first post!',
          likesCount: '10 ❤️',
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogsData: [
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
          imgUrl: 'https://www.w3schools.com/w3images/avatar6.png',
        },
      ],
      messagesData: [
        { id: 1, message: 'Hi, Gosha!' },
        { id: 2, message: 'Whatsup?' },
        { id: 3, message: 'Hi, How do you do?' },
        { id: 4, message: 'It was great!' },
        { id: 5, message: 'LOL' },
        { id: 6, message: 'See you tomorrow, my friend!' },
        { id: 7, message: 'I buy a new shirt today.' },
      ],
      newMessageText: '',
    },
    friendsPage: {
      friendsData: [
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
          imgUrl: 'https://www.w3schools.com/w3images/avatar6.png',
        },
      ],
      sidebarFriendsData: [
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
      ],
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
// Store - OOP
