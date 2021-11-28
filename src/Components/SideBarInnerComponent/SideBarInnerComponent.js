import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import './SideBarInnerComponent.css';

function SideBarInnerComponent({ SubTitle, Icon, Data, Target }) {
 const selector = useSelector((state) => state.user.HideAndShowNavBar);

 return (
  <Link to={SubTitle.replaceAll(' ', '_')}>
   <div className={`${selector !== false ? 'SiderBar__Inner__Div Sm__ActiveBar' : 'SiderBar__Inner__Div '}`}>
    <i className={`${Icon} ${Data}`} />
    {selector == false ? <p>{SubTitle}</p> : null}
   </div>
  </Link>
 );
}

export default SideBarInnerComponent;
