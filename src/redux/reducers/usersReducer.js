const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],

}
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case follow:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      }

    case unfollow:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }

      case SET_USERS:
        return {
          ...state,
          users: [...action.users]
        }

    default:
      return state
  }
}

export const followAC = (userId) => {
  return {
    type: follow,
    userId
  };
};
export const unfollocAC = (userId) => {
  return {
    type: unfollow,
    userId
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  };
};
