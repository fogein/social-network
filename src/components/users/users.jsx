import axios from 'axios';
import React from 'react'
import cls from './users.module.css';
import userPhoto from '../../assets/images/user.png';

export class Users extends React.Component {

  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => this.props.setUsers(res.data.items))
    }
  }
  render() {
    return (
      <>
      <button onClick={this.getUsers}>getUsers</button>
        {
          this.props.users.map(({ id, photos, followed, name, status }) => {
            return <div key={id} className={cls.container}>
              <div className={cls.imageButton}>
                <img className={cls.avaImage} src={photos.small != null ? photos.small : userPhoto} alt="avatar" />
                {followed
                  ?
                  <button onClick={() => this.props.unfollow(id)}>unfollow</button>
                  :
                  <button onClick={() => this.props.follow(id)}>follow</button>}


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
}
