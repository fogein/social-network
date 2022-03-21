import React from 'react';
import { MyPosts } from './myPosts/myPosts';
import cls from './profile.module.css';
import { ProfileInfo } from './profileInfo/profileInfo';


export const Profile = (props) => {
    return (
        <main className={cls.main} >
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}  newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} />
        </main>
    );
}