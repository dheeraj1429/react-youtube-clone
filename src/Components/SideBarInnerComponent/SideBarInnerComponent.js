import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './SideBarInnerComponent.css';

function SideBarInnerComponent({ SubTitle, Icon, Data, onClick }) {
 const selector = useSelector((state) => state.user.HideAndShowNavBar);

 return (
  <Link to={SubTitle == 'Sign Out' || SubTitle == 'Home' ? '/' : SubTitle.replaceAll(' ', '_')}>
   <div className={`${selector !== false ? 'SiderBar__Inner__Div Sm__ActiveBar' : 'SiderBar__Inner__Div '}`} onClick={onClick ? onClick : null}>
    <i className={`${Icon} ${Data}`} />
    {selector == false ? <p>{SubTitle}</p> : null}
   </div>
  </Link>
 );
}

export default SideBarInnerComponent;
