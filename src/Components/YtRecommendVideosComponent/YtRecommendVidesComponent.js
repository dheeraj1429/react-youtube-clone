import React, { useState, useEffect } from 'react';

import SortVideosComponent from '../SortVideosComponent/SortVideosComponent';
import { fetchVideosData } from '../../Redux/Action/action';
import { useSelector, useDispatch } from 'react-redux';

import './YtRecommendVidesComponent.css';

function YtRecommendVidesComponent() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.movies);

  useEffect(() => {
    dispatch(fetchVideosData());
  }, []);

  return (
    <div className="yt__Recomment_Vides_Div">
      {selector !== '' ? selector.map(({ id, ...othreProps }) => <SortVideosComponent key={id} {...othreProps} id={id} />) : null}
    </div>
  );
}

export default YtRecommendVidesComponent;
