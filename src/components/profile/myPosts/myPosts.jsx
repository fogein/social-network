import React from "react";
import { Post } from "../post/post";
import cls from "./myPosts.module.css";
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer';



export const MyPosts = (props) => {


  const changeText = (e) => {
    let newText = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(newText));
  };

  const handleChange = (e) => {
    e.preventDefault();
    props.dispatch(addPostActionCreator());
  };
  return (
    <>
      <form className={cls.form}>
        <input
          onChange={changeText}
          className={cls.input}
          value={props.newPostText}
          type="text"
        />
        <button onClick={handleChange}>addPost</button>
      </form>
      {props.posts.map(({ message }) => {
        return <Post postText={message} />;
      })}
    </>
  );
};
