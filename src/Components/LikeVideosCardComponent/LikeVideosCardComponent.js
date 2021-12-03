import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectedMovi } from '../../Redux/Action/action';

import './LikeVideosCardComponent.css';

function LikeVideosCardComponent({ poster_path, original_title, release_date, popularity, title, overview, vote_count, id }) {
 const dispatch = useDispatch();

 const EventHandler = function () {
  dispatch(selectedMovi({ poster_path, original_title, release_date, popularity, title, overview, vote_count, id }));
 };

 return (
  <Link to={`/Video/yt-clone:${title}`}>
   <div className="LikeVideos__Card" onClick={EventHandler}>
    <div className="LikeVideos__Imge_Div">
     <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
    </div>
    <div className="LikeVideos__Content">
     <h3>{original_title}</h3>
     <p>{overview}</p>
     <p>{title}</p>
    </div>
   </div>
  </Link>
 );
}

export default LikeVideosCardComponent;
