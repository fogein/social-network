const following = "FOLLOW";
const unfollow = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  totalUsersCount: 21,
  pageSize: 5,
  currentPage: 1,
  isFetching:false,

}
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case following:
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
      case  SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.currentPage
        }
      case  SET_TOTAL_USERS_COUNT:
        return {
          ...state,
          totalUsersCount: action.count
        }
      case  TOGGLE_IS_FETCHING:
        return {
          ...state,
          isFetching: action.isFetching
        }
       
        
    default:
      return state
  }
}

export const follow = (userId) => {
  return {
    type: following,
    userId
  };
};
export const unfolloc = (userId) => {
  return {
    type: unfollow,
    userId
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};
export const setTotalUsersCount = (count) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  };
};
