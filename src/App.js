import { BrowserRouter, Redirect, Route, } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sideBar/sideBar';
import { DialogsContainer } from './components/dialogs/dialogsContainer';
import { UsersContainerComponent } from './components/users/usersContainer';
import { ProfileContainerComponent } from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import { Login } from './components/login/login';
import { useSelector } from 'react-redux';


export const App = (props) => {

    const authId = useSelector((state) => state.auth.id)
    const auth = useSelector((state) => state.auth.isAuth)


    return (
        <BrowserRouter>
            <div className="appWraper" >
                <HeaderContainer />
                <SideBar />
                <div className='appWraperContent' >
                    <Route path='/login' render={() => <Login
                    />} />
                    {
                        auth ?
                            (
                                <>
                                    <Route path='/dialogs/' render={() => <DialogsContainer
                                    />} />
                                    <Route path='/profile/:userId?' render={() => <ProfileContainerComponent authId={authId}
                                    />} />
                                    <Route path='/users' render={() => <UsersContainerComponent
                                    />} />
                                </>)
                            : setTimeout(() => {
                                <Redirect to='/login' />
                            }, 500)
                    }

                </div>
            </div>
        </BrowserRouter>
    );
}