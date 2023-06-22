import React from 'react';
import profileReducer, {
  addPostActionCreator,
  deletePost,
} from './profile-reducer';

let state = {
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
};

it('length of posts should be incremented', () => {
  //1. Test data
  let action = addPostActionCreator('test');

  //2. Action
  let newState = profileReducer(state, action);

  //3. Expectation
  expect(newState.postsData.length).toBe(3);
});

it('message of new post should be correct', () => {
  //1. Test data
  let action = addPostActionCreator('test');

  //2. Action
  let newState = profileReducer(state, action);

  //3. Expectation
  expect(newState.postsData[2].message).toBe('test');
});

it('after deleting length of messages should be decrement', () => {
  //1. Test data
  let action = deletePost(1);

  //2. Action
  let newState = profileReducer(state, action);

  //3. Expectation
  expect(newState.postsData.length).toBe(2);
});

it(`after deleting length shouldn't be decremented if id is incorrect`, () => {
  //1. Test data
  let action = deletePost(1000);

  //2. Action
  let newState = profileReducer(state, action);

  //3. Expectation
  expect(newState.postsData.length).toBe(2);
});
