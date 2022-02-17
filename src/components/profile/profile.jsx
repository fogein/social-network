import React from 'react';
import { MyPosts } from './myPosts/myPosts';
import cls from './profile.module.css';


export const Profile = () => {
  return (
    <main className={cls.main}>
        MainContent
        <MyPosts/>
      </main>
  );
}