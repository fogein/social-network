import React from "react";
import { Post } from "../post/post";
import cls from "./myPosts.module.css";

export const MyPosts = ({ posts }) => {
  return (
    <>
      <span className={cls.posts}>My posts</span>
      {posts.map(({ message }) => {
        return <Post postText={message} />;
      })}
    </>
  );
};
