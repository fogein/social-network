import React from 'react'
import { Preloader } from '../../preloader/preloader'
import cls from './profileInfo.module.css'
import { ProfileStatus } from './profileStatus'
import userPhoto from '../../../assets/images/user.png'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getProfile, updateProfile } from '../../../redux/reducers/profileReducer'
import { useDispatch, useSelector } from 'react-redux';



export const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const onSetPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.profilePhotoContainer}>
        <img src={props.profile.photos.large || userPhoto} alt='' className={cls.profilePhoto} />
        {props.isOwner && <input type="file" onChange={onSetPhoto} />}
      </div>
      <div className={cls.profileDataContainer}>
        {editMode
          ?
          <ProfileDataForm
            profile={props.profile}
            updateStatus={props.updateStatus}
            status={props.status}
            setEditMode={setEditMode}
          />
          :
          <ProfileData
            setEditMode={setEditMode}
            profile={props.profile}
            updateStatus={props.updateStatus}
            status={props.status}
          />
        }
        {props.isOwner
          &&
          !editMode
          &&
          <button type={'submit'} className={cls.editButton} onClick={() => setEditMode(true)} >Edit</button>
        }
      </div>
    </div>
  )
}

const ProfileData = ({ profile, updateStatus, status }) => {

  const errorProfileData = useSelector(state => state.profilePage.error)

  return <div className={cls.aboutProfile}>
    {errorProfileData !== ''
      &&
      <span className={cls.error}> {errorProfileData}</span>
      
    }
    <div className={cls.nameAndAbout}>
      <span className={cls.fullName}>{profile.fullName}</span>
      <div><b>Looking for a jod</b>: {profile.lookingForAJob ? 'Yes' : 'No'}</div>
      {
        profile.lookingForAJob
        &&
        <div><b>My skills:</b> {profile.lookingForAJobDescription}</div>
      }
      <div className={cls.aboutMe}><b>About me: </b>{profile.aboutMe}</div>
      <ProfileStatus updateStatus={updateStatus} status={status} />
    </div>
    <div className={cls.contacts}>Contacts</div>
    <div>{Object.keys(profile.contacts).map(key => {
      return profile.contacts[key] !== ''
        ?
        <Contacts key={key} contactName={key} contactValue={profile.contacts[key]} />
        : ''
    })}</div>
  </div>

}


const ProfileDataForm = ({ setEditMode, profile, updateStatus, status }) => {


  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(updateProfile(data))
    setTimeout(() => {
      dispatch(getProfile(profile.userId))
      setEditMode(false)

    })
  }



  return <div className={cls.aboutProfile}>
    <form className={cls.editForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.editInput}>
        <label htmlFor="fullName">Full Name</label>
        <input defaultValue={profile.fullName} placeholder="fullName" {...register("fullName")} />
      </div>

      <div className={cls.editInput}>
        <label>Loking for a job</label>
        <select defaultValue={profile.lookingForAJob} {...register("lookingForAJob")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
      </div>

      <div className={cls.editInput}>
        <label htmlFor="lookingForAJobDescription">Looking for a job description</label>
        <input defaultValue={profile.lookingForAJobDescription} placeholder="lookingForAJobDescription" {...register("lookingForAJobDescription")} />
      </div>


      <div className={cls.editInput}>
        <label htmlFor="aboutMe">About me</label>
        <input defaultValue={profile.aboutMe} placeholder="aboutMe" {...register("aboutMe")} />
      </div>

      <div className={cls.contacts}>Contacts</div>
      <div>{Object.keys(profile.contacts).map(key => {
        return <div key={key} className={cls.editInput}>
          <label htmlFor={key}>{key}</label>
          <input defaultValue={profile.contacts[key]} placeholder={key} {...register(`contacts.${key}`)} />
        </div>
      })}
      </div>
      <button type={'submit'} className={cls.editButton}>save</button>
    </form>

  </div>

}

const Contacts = ({ contactName, contactValue }) => {
  return (
    <div className={cls.contactsValue} ><b>{contactName}</b>:{contactValue}</div>
  )
}
