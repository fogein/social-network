import React from 'react';
import { Post } from '../post/post';
import cls from './myPosts.module.css';


export const MyPosts = () => {
  return (
    <>
      <span className={cls.posts}>My posts</span>
      <Post
      postText="hello"
      />
    </>
  );
}