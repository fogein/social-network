import {  BrowserRouter, Route, } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sideBar/sideBar';
import { DialogsContainer } from './components/dialogs/dialogsContainer';
import  UsersContainer  from './components/users/usersContainer';
import  ProfileContainer  from './components/profile/profileContainer';
import  HeaderContainer from './components/header/headerContainer';


export const App = (props) => {
return (
        <BrowserRouter>
            <div className="appWraper" >
                <HeaderContainer />
                <SideBar />
                <div className='appWraperContent' >
                    
                        <Route path='/dialogs/'  render={() => <DialogsContainer
                        />} />
                        <Route path='/profile/:userId?'  render={() => <ProfileContainer
                        />} />
                        <Route path='/users' render={() => <UsersContainer
                        />} />
                    
                </div>
            </div>
        </BrowserRouter>
    );
}