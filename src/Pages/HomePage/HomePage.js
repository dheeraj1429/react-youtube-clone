import React, { useEffect, useState } from 'react';

import FilterCardComponent from '../../Components/FilterCardComponent/FilterCardComponent';
import VideosCardComponent from '../../Components/VideosCardComponent/VideosCardComponent';

import { useDispatch, useSelector } from 'react-redux';
import { setData, fetchVideosData } from '../../Redux/Action/action';

import './HomePage.css';

function HomePage() {
  const selector = useSelector((state) => state.user.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideosData());
  }, []);

  return (
    <div className="HomePage">
      {/* Filter Div */}
      <div className="HomePage__Filter_Div">
        <FilterCardComponent />
      </div>

      <div className="Video__Card__Component">
        {selector !== undefined && selector.length > 0 ? (
          selector.map(({ id, ...otherProps }) => <VideosCardComponent key={id} {...otherProps} id={id} />)
        ) : (
          <div className="Snipper__Div">
            <img src="/images/roling.svg" />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
