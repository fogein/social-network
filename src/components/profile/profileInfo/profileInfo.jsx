import React from 'react'
import { Preloader } from '../../preloader/preloader'
import cls from './profileInfo.module.css'

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <>
      <div className={cls.aboutContainer}>
        <div>
          <img src={props.profile.photos.large} alt='' className={cls.profilePhoto} />
        </div>
        <div className={cls.aboutProfile}>
          <div className={cls.nameAndAbout}>
            <span className={cls.fullName}>{props.profile.fullName}</span>
            <span className={cls.about}>{props.profile.aboutMe}</span>
          </div>
          <span className={cls.contacts}>Contacts</span>
          <span className={cls.social}>Twitter  <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a> </span>
          <span className={cls.social}>VK  <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></span>
        </div>
        
      </div>
    </>
  )
}
