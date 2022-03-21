import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/dialogs/dialogs';
import { Profile } from './components/profile/profile';
import { SideBar } from './components/sideBar/sideBar';
import { Header } from './components/header/header';




export const App = (props) => {
    return (
        <Router>
            <div className="appWraper" >
                <SideBar />
                <Header />
                <div className='appWraperContent' >
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />} />
                        <Route path='/profile' element={<Profile
                            dispatch={props.dispatch}
                            profilePage={props.state.profilePage}
                        />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}