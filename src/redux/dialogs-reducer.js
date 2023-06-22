const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 8, message: text }],
      };
    default:
      return state;
  }
};

export const sendMessage = (newMessageText) => ({
  type: 'SEND_MESSAGE',
  newMessageText,
});

// export default dialogsReducer;
