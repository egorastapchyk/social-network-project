import { usersAPI } from '../api/api';
import { profileAPI } from '../api/api';
// import thunkMiddleware from 'redux-thunk';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
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
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostText = action.newPostText;
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: 6, message: newPostText, likeCount: 0 },
        ],
        newPostText: '',
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        post: state.postsData.filter((p) => p.id !== action.postId),
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: 'ADD_POST',
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: 'SET_USER_PROFILE',
  profile,
});
export const setStatus = (status) => ({
  type: 'SET_STATUS',
  status,
});
export const deletePost = (postId) => ({
  type: 'DELETE_POST',
  postId,
});
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
