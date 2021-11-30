import React from 'react';

import SideBarInnerComponent from '../SideBarInnerComponent/SideBarInnerComponent';
import LineBreakComponent from '../LineBreakComponent/LineBreakComponent';

import { useSelector } from 'react-redux';

import './SideBarComponent.css';

function SideBarComponent() {
 const selector = useSelector((state) => state.user.HideAndShowNavBar);

 return (
  <div className="SideBar_Div">
   <SideBarInnerComponent SubTitle={'Home'} Icon={'fas fa-home'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Explore'} Icon={'fas fa-compass'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Subcriptions'} Icon={'fas fa-vote-yea'} Hide={true} />

   <LineBreakComponent />

   <SideBarInnerComponent SubTitle={'Library'} Icon={'fas fa-photo-video'} Hide={true} />
   <SideBarInnerComponent SubTitle={'History'} Icon={'fas fa-history'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Your videos'} Icon={'far fa-clock'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Like'} Icon={'far fa-thumbs-up'} Hide={true} />

   <LineBreakComponent />

   {selector == true ? <h3 className="Subcribtion__Heading">SUBSCRIPTIONS</h3> : null}

   <SideBarInnerComponent SubTitle={'Music'} Icon={'fab fa-spotify'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Sport'} Icon={'fas fa-trophy'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Gaming'} Icon={'fas fa-gamepad'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Films'} Icon={'fas fa-film'} Hide={true} />

   <LineBreakComponent />

   {selector == true ? <h3 className="Subcribtion__Heading">MORE FROM YOUTUBE</h3> : null}

   <SideBarInnerComponent SubTitle={'Youtube premium'} Icon={'fab fa-youtube'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Films'} Icon={'fas fa-film'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Gaming'} Icon={'fab fa-steam-symbol'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Fasion'} Icon={'fas fa-vest-patches'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Learning'} Icon={'fas fa-graduation-cap'} Hide={true} />
   <SideBarInnerComponent SubTitle={'Sport'} Icon={'fas fa-trophy'} Hide={true} />
  </div>
 );
}

export default SideBarComponent;
