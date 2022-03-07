import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    {
      id: 1,
      imgUrl: 'https://html5css.ru/w3images/avatar2.png',
      message: 'Hi, how are you?',
      likesCount: '5 ❤️',
    },
    {
      id: 2,
      imgUrl: 'https://www.w3schools.com/w3images/avatar6.png',
      message: 'It`s my first post!',
      likesCount: '10 ❤️',
    },
  ];

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>ADD POST</button>
      </div>
      <div className={classes.posts}>
        <Post
          avatar={postsData[0].imgUrl}
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
          id={postsData[0].id}
        />
        <Post
          avatar={postsData[1].imgUrl}
          message={postsData[1].message}
          likesCount={postsData[1].likesCount}
          id={postsData[1].id}
        />
      </div>
    </div>
  );
};

export default MyPosts;
