import React from 'react';

import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { showPopup } from '../../Redux/Action/action';
import { changeMode } from '../../Redux/Action/action';

import './SideBarInnerComponent.css';

function SideBarInnerComponent({ SubTitle, Icon, Data, onClick, Hide, Arrow, SecondPopup }) {
 const location = useLocation();
 const selector = useSelector((state) => state.user);
 const dispatch = useDispatch();

 const ChangeStateHandler = function () {
  if (selector.mode == false) {
   document.documentElement.setAttribute('data-theme', 'dark');
  } else {
   document.documentElement.setAttribute('data-theme', 'light');
  }

  dispatch(showPopup(!selector.showPopUp));
  dispatch(changeMode(!selector.mode));
 };

 return (
  <>
   <Link
    to={
     SubTitle == 'Sign Out' || SubTitle == 'Appearance: Dark' || SubTitle == 'Appearance: Light'
      ? `${location.pathname}`
      : SubTitle == 'Home'
      ? '/'
      : SubTitle.replaceAll(' ', '_')
    }
   >
    <div
     className={`${selector.HideAndShowNavBar !== false ? 'SiderBar__Inner__Div Sm__ActiveBar' : 'SiderBar__Inner__Div '}`}
     onClick={onClick ? onClick : null}
    >
     <div className="Icon__Inner_Div" onClick={SecondPopup ? ChangeStateHandler : null}>
      <i className={`${Icon} ${Data}`} />
      {selector.HideAndShowNavBar == false && Hide ? null : <p>{SubTitle}</p>}
     </div>
     {Arrow ? <i className={`${Arrow} Arrow_Icon`}></i> : null}
    </div>
   </Link>
  </>
 );
}

export default SideBarInnerComponent;
