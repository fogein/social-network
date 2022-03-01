import React from "react";
import { Post } from "../post/post";
import cls from "./myPosts.module.css";

export const MyPosts = () => {
  let postsData = [
    { id: 1, message: "hi its post", likesCount: 12 },
    { id: 2, message: "hi", likesCount: 32 },
    { id: 3, message: "hi it third post", likesCount: 31 },
  ];
  return (
    <>
      <span className={cls.posts}>My posts</span>
      {postsData.map(({ message }) => {
        return <Post postText={message} />;
      })}
    </>
  );
};
