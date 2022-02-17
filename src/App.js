import './App.css';
import { Header } from './components/header/header';
import { Profile } from './components/profile/profile';
import { SideBar } from './components/sideBar/sideBar';

export const App = () => {
  return (
    <div className="appWraper">
      <Header />
      <SideBar />
      <Profile />

    </div>
  );
}

