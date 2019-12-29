import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='http://www.astercume.com/wp-content/uploads/2018/01/avatar.png' />
      {props.message}
      <div><span>like</span>{props.likesCount}</div>
    </div>
  );

}

export default Post;
