import React from 'react';

import './VideosCardComponent.css';

function VideosCardComponent({ poster_path, original_title, release_date, popularity }) {
 return (
  <div className="VideoCard__Inner_Div">
   <img className="VideoBanner" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />

   <div className="Vider__Details_Div">
    <div className="User__Profile_Div">
     <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
    </div>
    <div className="Video__Content_Div">
     <h3>{original_title}</h3>
     <p>Chill Music</p>
     <div className="Video__View">
      <p>{popularity}k views</p>
      <p>{release_date}</p>
     </div>
    </div>
   </div>
  </div>
 );
}

export default VideosCardComponent;
