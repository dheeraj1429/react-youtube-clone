import React from 'react';

import { Link } from 'react-router-dom';

import './SideBarInnerComponent.css';

function SideBarInnerComponent({ SubTitle, Icon, OnClick, Data, Target }) {
 return (
  <Link to={SubTitle.replaceAll(' ', '_')}>
   <div className="SiderBar__Inner__Div" onClick={OnClick} data-target={Target}>
    <i className={`${Icon} ${Data}`} />
    <p>{SubTitle}</p>
   </div>
  </Link>
 );
}

export default SideBarInnerComponent;
