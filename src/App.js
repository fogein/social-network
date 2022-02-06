import './App.css';
import { Header } from './components/header';
import { Profile } from './components/profile';
import { SideBar } from './components/sideBar';

export const App = () => {
  return (
    <div className="appWraper">
      <Header />
      <SideBar />
      <Profile />

    </div>
  );
}

