import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/dialogs/dialogs';
import { Profile } from './components/profile/profile';
import { SideBar } from './components/sideBar/sideBar';
import { Header } from './components/header/header';




export const App = ({ posts, dialogs, messages }) => {
    return (
        <Router>
            <div className="appWraper" >
                <SideBar />
                <Header />
                <div className='appWraperContent' >
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogs={dialogs}
                            messages={messages}
                        />} />
                        <Route path='/profile' element={<Profile
                            posts={posts}
                        />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}