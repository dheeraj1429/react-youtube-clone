import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilterButton } from '../../Redux/Action/action';

import './FilterCardComponent.css';

function FilterCardComponent() {
 const selector = useSelector((state) => state.user);
 const dispatch = useDispatch();
 const SelectedFilterData = selector.Selected_Filter_Data;

 return (
  <div className="FilterCard_Div">
   {/* {selector.length > 1
    ? selector.Navbar_Filter_Data.map((el) => (
       <div
        key={el.name}
        className={`${
         SelectedFilterData !== null ? (SelectedFilterData[0].name === el.name ? 'Navbar__Sm_Card Navbar__Sm_Card_Active' : 'Navbar__Sm_Card') : null
        }`}
        onClick={() => dispatch(selectFilterButton(el))}
       >
        <p>{el.name}</p>
       </div>
      ))
    : null} */}
  </div>
 );
}

export default FilterCardComponent;
