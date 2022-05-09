import React from 'react';
import { Header } from './header';
import { connect } from 'react-redux';
import { authMe } from './../../redux/reducers/authReducer';


class HeaderContainer extends React.Component {


  componentDidMount() {
    this.props.authMe()
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
export default connect(mapStateToProps, { authMe })(HeaderContainer)
