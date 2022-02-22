import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/dialogs/dialogs';

import { Profile } from './components/profile/profile';
import { SideBar } from './components/sideBar/sideBar';


export const App = () => {
    return (
        <Router>
            <div className="appWraper" >

                <SideBar />
                <div className='appWraperContent' >
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </div>
            </div>

        </Router>
    );
}