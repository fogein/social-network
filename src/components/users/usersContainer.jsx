import { connect } from 'react-redux'
import { followAC, setUsersAC } from '../../redux/reducers/usersReducer';
import { Users } from './users';
import { unfollocAC } from './../../redux/reducers/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollocAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
