import { authApi } from './../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const setErrorText = 'SET_ERROR';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  errorText:'',

}
export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
      case setErrorText:
        return {
          ...state,
          errorText:action.error
        }
    default:
      return state
  }
}

export const setAuthUserData = (email, id, login,isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { email, id, login, isAuth }
  };
};
const setError = (error) => {
  return {
    type: setErrorText,
    error
  };
};

export const authMe = () => {
  return (dispatch) => {
   return authApi.me()
      .then(data => {
        if (data.resultCode === 0) {
          let { email, id, login } = data.data
          dispatch(setAuthUserData(email, id, login,true))
        }
      })
  }
}

export const login = (email,password,rememberMe) => {
  return (dispatch) => {
    authApi.login(email,password,rememberMe)
      .then(data => {
        if (data.resultCode === 0) {   
          dispatch(authMe())
          
        } else if (data.resultCode === 1) {
          dispatch(setError(data.messages))
        }
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    authApi.logout()
      .then(
          dispatch(setAuthUserData(null, null,null,false))
      )
  }
}