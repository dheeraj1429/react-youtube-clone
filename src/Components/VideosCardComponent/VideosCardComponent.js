import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideAndShowNavbar } from '../../Redux/Action/action';
import { selectedMovi } from '../../Redux/Action/action';

import './VideosCardComponent.css';

function VideosCardComponent({ poster_path, original_title, release_date, popularity, title, overview, vote_count, id }) {
 const dispatch = useDispatch();

 const EventHandlerFunction = function () {
  dispatch(hideAndShowNavbar(true));
  dispatch(selectedMovi({ poster_path, original_title, release_date, popularity, title, overview, vote_count, id }));
 };

 return (
  <Link to={`/Video/yt-clone:${title}`} onClick={EventHandlerFunction}>
   <div className="VideoCard__Inner_Div">
    <img className="VideoBanner" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />

    <div className="Video__Content_Div">
     <h3>{original_title}</h3>
     <div className="Video__View">
      <p>{popularity}k views</p>
      <p>{release_date}</p>
     </div>
    </div>
   </div>
  </Link>
 );
}

export default VideosCardComponent;
