import React from 'react';

import SideBarInnerComponent from '../SideBarInnerComponent/SideBarInnerComponent';
import LineBreakComponent from '../LineBreakComponent/LineBreakComponent';

import { auth } from '../../Firebase/Firebase.Utitl';

import './PopUpComponent.css';

function PopUpComponent({ Data }) {
 const SignOutUser = function () {
  auth.signOut();
 };

 return (
  <div className={Data == false ? 'Popup__Container_Div ' : 'Popup__Container_Div ShowPopUp'}>
   <div className="UserProfile__Div">
    <div className="UserImg_Div"></div>
    <p>Name</p>
   </div>
   <LineBreakComponent />

   <SideBarInnerComponent SubTitle={'Your Channel'} Icon={'fas fa-user'} />
   <SideBarInnerComponent SubTitle={'Purchases and memberships'} Icon={'fas fa-dollar-sign'} />
   <SideBarInnerComponent SubTitle={'Youtube studio'} Icon={'fas fa-cogs'} />
   <SideBarInnerComponent SubTitle={'Sign Out'} Icon={'fa fa-sign-out-alt'} onClick={SignOutUser} />

   <LineBreakComponent />

   <SideBarInnerComponent SubTitle={'Appearance: Theme'} Icon={'fas fa-moon'} />
   <SideBarInnerComponent SubTitle={'Setting'} Icon={'fas fa-cog'} />
   <SideBarInnerComponent SubTitle={'Help'} Icon={'fas fa-question-circle'} />
  </div>
 );
}

export default PopUpComponent;
