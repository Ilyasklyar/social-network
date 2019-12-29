import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';



const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
      },
      addPost: () => {
        dispatch(addPostActionCreator());
      }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
