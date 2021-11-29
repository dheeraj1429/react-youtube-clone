import React, { useEffect, useState } from 'react';

import FilterCardComponent from '../../Components/FilterCardComponent/FilterCardComponent';
import VideosCardComponent from '../../Components/VideosCardComponent/VideosCardComponent';

import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../Redux/Action/action';

import './HomePage.css';

function HomePage() {
 const [VideoData, setVideoData] = useState();
 const dispatch = useDispatch();

 const res = async function () {
  const resData = await fetch(
   `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.trunc(
    Math.random() * 100 + 1
   )}
   `
  )
   .then((res) => res.json())
   .then((data) => {
    dispatch(setData(data.results));
    setVideoData(data.results);
   });
 };

 useEffect(() => {
  res();
 }, []);

 return (
  <div className="HomePage">
   {/* Filter Div */}
   <div className="HomePage__Filter_Div">
    <FilterCardComponent />
   </div>

   <div className="Video__Card__Component">
    {VideoData !== undefined ? VideoData.map(({ id, ...otherProps }) => <VideosCardComponent key={id} {...otherProps} />) : null}
   </div>
  </div>
 );
}

export default HomePage;
