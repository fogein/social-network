import React from 'react';
import { MyPosts } from './myPosts/myPosts';
import cls from './profile.module.css';
import { ProfileInfo } from './profileInfo/profileInfo';


export const Profile = () => {
    return (
        <main className={cls.main} >
            <ProfileInfo/>
            <MyPosts />
        </main>
    );
}