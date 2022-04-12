import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Profile } from './components/profile/profile';
import { SideBar } from './components/sideBar/sideBar';
import { Header } from './components/header/header';
import { DialogsContainer } from './components/dialogs/dialogsContainer';
import { UsersContainer } from './components/users/usersContainer';


export const App = (props) => {
return (
        <Router>
            <div className="appWraper" >
                <Header />
                <SideBar />
                <div className='appWraperContent' >
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer
                        />} />
                        <Route path='/profile' element={<Profile
                        />} />
                        <Route path='/users' element={<UsersContainer
                        />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}