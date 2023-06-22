import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

import {
  required,
  maxLengthCreator,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(100);

const MyPosts = React.memo((props) => {
  let postsElement = [...props.postsData]
    .reverse()
    .map((posts, index) => (
      <Post
        key={
          index
        } /* the index parameter is needed to remove the error of unique keys */
        avatar={posts.imgUrl}
        message={posts.message}
        likesCount={posts.likesCount}
        id={posts.id}
      />
    ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={'Enter your message'}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <button>ADD POST</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: 'ProfileAddNewPostForm',
})(AddNewPostForm);

export default MyPosts;
