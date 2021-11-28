import React from 'react';

import SideBarInnerComponent from '../SideBarInnerComponent/SideBarInnerComponent';

import { useSelector } from 'react-redux';

import './SideBarComponent.css';

function SideBarComponent() {
 const selector = useSelector((state) => state.user.HideAndShowNavBar);

 return (
  <div className="SideBar_Div">
   <SideBarInnerComponent SubTitle={'Home'} Icon={'fas fa-home'} />
   <SideBarInnerComponent SubTitle={'Explore'} Icon={'fas fa-compass'} />
   <SideBarInnerComponent SubTitle={'Subcriptions'} Icon={'fas fa-vote-yea'} />

   <div className="Break__Line"></div>

   <SideBarInnerComponent SubTitle={'Library'} Icon={'fas fa-photo-video'} />
   <SideBarInnerComponent SubTitle={'History'} Icon={'fas fa-history'} />
   <SideBarInnerComponent SubTitle={'Your videos'} Icon={'far fa-clock'} />
   <SideBarInnerComponent SubTitle={'Like'} Icon={'far fa-thumbs-up'} />

   <div className="Break__Line"></div>

   {selector == false ? <h3 className="Subcribtion__Heading">SUBSCRIPTIONS</h3> : null}

   <SideBarInnerComponent SubTitle={'Music'} Icon={'fab fa-spotify'} />
   <SideBarInnerComponent SubTitle={'Sport'} Icon={'fas fa-trophy'} />
   <SideBarInnerComponent SubTitle={'Gaming'} Icon={'fas fa-gamepad'} />
   <SideBarInnerComponent SubTitle={'Films'} Icon={'fas fa-film'} />

   <div className="Break__Line"></div>

   {selector == false ? <h3 className="Subcribtion__Heading">MORE FROM YOUTUBE</h3> : null}

   <SideBarInnerComponent SubTitle={'Youtube premium'} Icon={'fab fa-youtube'} />
   <SideBarInnerComponent SubTitle={'Films'} Icon={'fas fa-film'} />
   <SideBarInnerComponent SubTitle={'Gaming'} Icon={'fab fa-steam-symbol'} />
   <SideBarInnerComponent SubTitle={'Fasion'} Icon={'fas fa-vest-patches'} />
   <SideBarInnerComponent SubTitle={'Learning'} Icon={'fas fa-graduation-cap'} />
   <SideBarInnerComponent SubTitle={'Sport'} Icon={'fas fa-trophy'} />
  </div>
 );
}

export default SideBarComponent;
