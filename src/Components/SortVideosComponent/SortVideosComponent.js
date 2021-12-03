import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectedMovi } from '../../Redux/Action/action';
import './SortVideosComponent.css';

function SortVideosComponent({ poster_path, original_title, release_date, title, popularity, backdrop_path, overview, vote_count, id }) {
 const dispatch = useDispatch();
 const SendHandler = function () {
  dispatch(selectedMovi({ poster_path, original_title, release_date, popularity, title, overview, vote_count, id }));
 };

 return (
  <Link to={`/Video/yt-clone:${title}`}>
   <div className="yt__Recommond_Videos_Innre_Div" onClick={SendHandler}>
    <img src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} />
    <div className="yt__Recommond_Inner_Content">
     <h3>{original_title}</h3>
     <p>{title}</p>
     <p>{popularity}k views</p>
    </div>
   </div>
  </Link>
 );
}

export default SortVideosComponent;
