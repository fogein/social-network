import { BrowserRouter, Redirect, Route, } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sideBar/sideBar';
import { DialogsContainer } from './components/dialogs/dialogsContainer';
import { UsersContainerComponent } from './components/users/usersContainer';
import { ProfileContainerComponent } from './components/profile/profileContainer';
import { Login } from './components/login/login';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/header/header';
import { useEffect } from 'react';
import { initializeApp } from './redux/reducers/appReducer';
import { Preloader } from './components/preloader/preloader';


export const App = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    const authId = useSelector((state) => state.auth.id)
    const auth = useSelector((state) => state.auth.isAuth)
    const initialized = useSelector((state) => state.app.initialized)


    if (!initialized) {
        return <Preloader />

    }
    return (
        <BrowserRouter>
            <div className="appWraper" >
                <Header />
                <SideBar />
                <div className='appWraperContent' >
                    <Route path='/login' render={() => <Login
                    />} />
                    <Route path='/users' render={() => <UsersContainerComponent
                    />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainerComponent authId={authId}
                    />} />
                    {
                        auth ?
                            (
                                <>
                                    <Route path='/dialogs/' render={() => <DialogsContainer
                                    />} />

                                </>)
                            :
                            <Redirect to='/login' />

                    }

                </div>
            </div>
        </BrowserRouter>
    );
}