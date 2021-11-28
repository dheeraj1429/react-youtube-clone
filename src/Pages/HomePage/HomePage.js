import React from 'react';
import FilterCardComponent from '../../Components/FilterCardComponent/FilterCardComponent';

import './HomePage.css';

function HomePage() {
 return (
  <div className="HomePage">
   {/* Filter Div */}
   <div className="HomePage__Filter_Div">
    <FilterCardComponent />
   </div>
  </div>
 );
}

export default HomePage;
