import React, { useState, useEffect } from 'react';

import SortVideosComponent from '../SortVideosComponent/SortVideosComponent';

import './YtRecommendVidesComponent.css';

function YtRecommendVidesComponent() {
 const [RecommondedVideos, setRecommondedVideos] = useState('');

 const res = async function () {
  await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.trunc(
   Math.random() * 100 + 1
  )}
  `)
   .then((res) => res.json())
   .then((data) => setRecommondedVideos(data.results));
 };

 useEffect(() => {
  res();
 }, []);

 return (
  <div className="yt__Recomment_Vides_Div">
   {RecommondedVideos !== '' ? RecommondedVideos.map(({ id, ...othreProps }) => <SortVideosComponent key={id} {...othreProps} />) : null}
  </div>
 );
}

export default YtRecommendVidesComponent;
