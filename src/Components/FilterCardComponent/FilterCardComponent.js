import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilterButton } from '../../Redux/Action/action';

import './FilterCardComponent.css';

function FilterCardComponent() {
 const selector = useSelector((state) => state.user);
 const dispatch = useDispatch();

 const Navbar_Filter_Data = selector.Navbar_Filter_Data;
 const Selected_Filter_Data = selector.Selected_Filter_Data;

 return (
  <div className="FilterCard_Div">
   {Navbar_Filter_Data.map((el) => (
    <div
     key={el.name}
     className={`${
      Navbar_Filter_Data !== null ? (Selected_Filter_Data[0].name === el.name ? 'Navbar__Sm_Card Navbar__Sm_Card_Active' : 'Navbar__Sm_Card') : null
     }`}
     onClick={() => dispatch(selectFilterButton(el))}
    >
     <p>{el.name}</p>
    </div>
   ))}
  </div>
 );
}

export default FilterCardComponent;
