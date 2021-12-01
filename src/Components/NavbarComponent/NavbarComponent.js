import React, { useEffect, useState } from 'react';

import SearchComponent from '../SearchComponent/SearchComponent';

import { useDispatch, useSelector } from 'react-redux';
import { hideAndShowNavbar } from '../../Redux/Action/action';
import { signInWithGoogle } from '../../Firebase/Firebase.Utitl';
import { showPopup } from '../../Redux/Action/action';

import PopUpComponent from '../PopUpComponent/PopUpComponent';

import './NavbarComponent.css';

function NavbarComponent() {
 const [UserPhoto, setUserPhoto] = useState('');
 const [UserName, setUserName] = useState('');

 const selector = useSelector((state) => state.user);
 const dispatch = useDispatch();
 const CurrentUserData = selector.CurrentUserData;

 const res = async function () {
  await CurrentUserData;
  if (CurrentUserData) {
   const { photoURL } = CurrentUserData;
   const { displayName } = CurrentUserData;
   setUserPhoto(photoURL);
   setUserName(displayName);
  }
 };

 res();

 return (
  <div className="Navbar_Div">
   <div className="Navbar__Inner_Div">
    {/* Logo and Bars icon */}
    <div className="Navbar__Logo_Div">
     <svg onClick={() => dispatch(hideAndShowNavbar(!selector.HideAndShowNavBar))}>
      <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" class="yt_icon"></path>
     </svg>

     {selector.mode == false ? <img src="/images/logo-pn.png" className="yt__Logo" /> : <img src="/images/light-logo.png" className="LightLogo" />}
    </div>

    {/* Search Component */}
    <SearchComponent />

    {/* Icons & Profile Componet */}
    <div className="Navbar__Icon_Div">
     <svg>
      <path
       d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
       class="style-scope yt-icon"
      ></path>
     </svg>

     <svg>
      <path
       d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"
       class="style-scope yt-icon"
      ></path>
     </svg>

     <svg>
      <path
       d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
       class="style-scope yt-icon"
      ></path>
     </svg>

     {CurrentUserData == null ? (
      <div className="SignIn__Div">
       <p onClick={signInWithGoogle}>Sign In</p>
      </div>
     ) : (
      <div className="User__Profile_Div">
       <img src={UserPhoto !== null ? UserPhoto : ''} onClick={() => dispatch(showPopup(!selector.showPopUp))} />
       <PopUpComponent Data={selector.showPopUp} Name={UserName} PhotoUrl={UserPhoto} />
      </div>
     )}
    </div>
   </div>
  </div>
 );
}

export default NavbarComponent;
