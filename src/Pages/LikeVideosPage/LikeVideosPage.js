import React from 'react';

import LikeVideosCardComponent from '../../Components/LikeVideosCardComponent/LikeVideosCardComponent';

import { useSelector } from 'react-redux';

import './LikevideosPage.css';

function LikeVideosPage() {
 const slector = useSelector((state) => state.user.LikeVideos);
 return (
  <div className="LikeVideos__Contianer">
   <h3 className="Like_Heading">Liked videos</h3>
   {slector.map(({ id, ...otherProps }) => (
    <LikeVideosCardComponent key={id} {...otherProps} />
   ))}
  </div>
 );
}

export default LikeVideosPage;
