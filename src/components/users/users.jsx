import React from 'react'
import cls from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { Link } from 'react-router-dom';


export const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      <div>
        {pages.map(p => {
          return <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && cls.selected}>{p}</span>
        })}
      </div>
      {
        props.users.map(({ id, photos, followed, name, status }) => {
          return <div key={id} className={cls.container}>
            
              <div className={cls.imageButton}>
               <Link to={`../profile/${id}`}>
                <img className={cls.avaImage} src={photos.small != null ? photos.small : userPhoto} alt="avatar" />
                </Link>
                {followed
                  ?
                  <button onClick={() => props.unfollow(id)}>unfollow</button>
                  :
                  <button onClick={() => props.follow(id)}>follow</button>}


              </div>
            
            <div className={cls.desriptionContainer}>
              <div className={cls.nameStatus}>
                <span>{name}</span>
                <span>{status}</span>
              </div>
              <div className={cls.location}>
                <span>{'location.country'}</span>,
                <span>{'location.city'}</span>
              </div>
            </div>
          </div>
        })
      }
    </>
  )
}
