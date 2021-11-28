import React from 'react';

import './PopUpComponent.css';

function PopUpComponent({ Data }) {
 return <div className={Data == false ? 'Popup__Container_Div ' : 'Popup__Container_Div ShowPopUp'}></div>;
}

export default PopUpComponent;
