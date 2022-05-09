import {  BrowserRouter, Route, } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sideBar/sideBar';
import { DialogsContainer } from './components/dialogs/dialogsContainer';
import  { UsersContainerComponent }  from './components/users/usersContainer';
import  { ProfileContainerComponent }  from './components/profile/profileContainer';
import  HeaderContainer from './components/header/headerContainer';
import { Login } from './components/login/login';


export const App = (props) => {
return (
        <BrowserRouter>
            <div className="appWraper" >
                <HeaderContainer />
                <SideBar />
                <div className='appWraperContent' >
                    
                        <Route path='/dialogs/'  render={() => <DialogsContainer
                        />} />
                        <Route path='/profile/:userId?'  render={() => <ProfileContainerComponent
                        />} />
                        <Route path='/users' render={() => <UsersContainerComponent
                        />} />
                        <Route path='/login' render={() => <Login
                        />} />
                    
                </div>
            </div>
        </BrowserRouter>
    );
}