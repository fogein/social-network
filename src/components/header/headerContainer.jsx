import axios from 'axios';
import React from 'react';
import { Header } from './header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {


  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(res => {
        if (res.data.resultCode === 0) {
          let { id, email, login } = res.data.data
          this.props.setAuthUserData(id, login, email)
        }
      })
  }
  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
