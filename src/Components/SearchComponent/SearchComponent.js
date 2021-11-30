import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setSerchData } from '../../Redux/Action/action';

import './SearchComponent.css';

function SearchComponent() {
 const [SearchInput, setSearchInput] = useState('');
 const dispatch = useDispatch();

 return (
  <div className="Search__Div">
   <input type="search" placeholder="Search" className="Search__Inner__Input" value={SearchInput} onChange={(e) => setSearchInput(e.target.value)} />
   <div className="Search__Inner_Div" onClick={() => dispatch(setSerchData(SearchInput), setSearchInput(''))}>
    <svg>
     <path
      d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
      class="style-scope yt-icon __web-inspector-hide-shortcut__"
     ></path>
    </svg>
   </div>
  </div>
 );
}

export default SearchComponent;
