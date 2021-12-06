import { useEffect, useState } from 'react';

// Components
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import SideBarComponent from './Components/SideBarComponent/SideBarComponent';

// Pages
import HomePage from './Pages/HomePage/HomePage';
import VideosPlayPage from './Pages/VideosPlayPage/VideosPlayPage';
import LikeVideosPage from './Pages/LikeVideosPage/LikeVideosPage';

import { Routes, Route } from 'react-router';
import { auth, CreateUserProfileDocument } from './Firebase/Firebase.Utitl';
import { setCurrentUser } from './Redux/Action/action';
import { useDispatch } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const [CurrentUserData, setCurrentUserData] = useState({
    CurrentUserLogIn: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setCurrentUserData({ CurrentUserLogIn: userAuth });
      dispatch(setCurrentUser(userAuth));
      CreateUserProfileDocument(userAuth);
    });
  }, []);

  return (
    <div className="App">
      <NavbarComponent />

      <div className="Home__Container_Div">
        <SideBarComponent />

        {/* Routes */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Video/yt-clone:Name" element={<VideosPlayPage />} />
          <Route exact path="/Like" element={<LikeVideosPage />} />
        </Routes>
        {/* Routes */}
      </div>

      {/* Footer Component */}
    </div>
  );
}

export default App;
