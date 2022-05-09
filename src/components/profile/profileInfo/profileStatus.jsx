import React, { useState } from 'react'
import cls from './profileInfo.module.css'

export const ProfileStatus = ({ status }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      { !editMode ?
      <span onDoubleClick={() => setEditMode(true)} className={cls.about}>{status}</span>
      :
      <input autoFocus={true} onBlur={() => setEditMode(false)} type="text" value={status} />
      }
    </>
  )
}
