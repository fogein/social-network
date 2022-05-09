import { usersApi } from './../../api/api';



const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,

}
export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state
  }
}

export const setAuthUserData = (email, id, login) => {
  return {
    type: SET_USER_DATA,
    data: { email, id, login }
  };
};

export const authMe = () => {
  return (dispatch) => {
    usersApi.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          let { email, id, login } = data.data
          dispatch(setAuthUserData(email, id, login))
        }
      })
  }
}